import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';

const App = () => {
  const [vnd, setVnd] = useState('');
  const [ethRate, setEthRate] = useState(0);
  const [ethAmount, setEthAmount] = useState(0);
  const [copied, setCopied] = useState(false);
  const walletAddress = '0xa7FDF811C70Adcf73aEb299854f8f0eDA24B7dEf';

  useEffect(() => {
    // Fetch ETH rate
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=vnd')
      .then(response => {
        setEthRate(response.data.ethereum.vnd);
      });

    // Auto fullscreen on landscape
    const handleOrientation = () => {
      if (window.innerWidth > window.innerHeight && document.fullscreenEnabled) {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {
          elem.requestFullscreen().catch(() => {});
        }
      } else {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      }
    };

    window.addEventListener('resize', handleOrientation);
    handleOrientation();

    return () => {
      window.removeEventListener('resize', handleOrientation);
    };
  }, []);

  const formatCurrency = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat('vi-VN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setVnd(rawValue);
    const calculatedEth = parseFloat(rawValue) / ethRate;
    setEthAmount(calculatedEth || 0);
    if (navigator.vibrate) navigator.vibrate(50); // vibration feedback
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      if (navigator.vibrate) navigator.vibrate(100); // feedback when copy
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const ethURI = `ethereum:${walletAddress}?value=${(ethAmount * 1e18).toFixed(0)}`;

  return (
    <div style={{
      padding: 20,
      fontFamily: 'sans-serif',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ marginBottom: 5 }}>🛍️ <strong>Quang Trending</strong></h1>

      <p style={{ fontSize: 16, margin: '20px auto 8px' }}>
        Vui lòng nhập số tiền khách cần thanh toán (tính theo VNĐ):
      </p>

      <input
        type="text"
        inputMode="numeric"
        placeholder="Nhập số tiền (VNĐ)"
        value={formatCurrency(vnd)}
        onChange={handleChange}
        style={{
          padding: 10,
          fontSize: 18,
          width: '80%',
          maxWidth: 300,
          textAlign: 'center',
          marginBottom: 10
        }}
      />

      <p>Số ETH tương đương: {ethAmount.toFixed(6)}</p>

      <div style={{
        margin: "10px auto",
        width: "200px",
        flexShrink: 0
      }}>
        <QRCode value={ethURI} style={{ height: "auto", maxWidth: "200px", width: "100%" }} />
      </div>

      <p style={{ marginTop: 10 }}>
        <button onClick={handleCopy}>
          📋 Sao chép địa chỉ ví
        </button>
      </p>

      {copied && (
        <div style={{ marginTop: 10, color: 'green', fontWeight: 'bold' }}>
          ✅ Đã sao chép địa chỉ ví!
        </div>
      )}
    </div>
  );
};

export default App;
