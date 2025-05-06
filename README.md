# ETHẹt

**ETHẹt** là ứng dụng thanh toán bằng Ethereum dành cho cửa hàng – hiện đại, nhanh chóng và có phong cách trẻ trung, dễ viral. Khách hàng chỉ cần quét mã QR để thanh toán ETH theo tỷ giá VNĐ.

---

## 🚀 Tính năng chính

- Nhập số tiền (VNĐ), tự động tính ETH theo tỷ giá thực tế từ CoinGecko
- Tạo mã QR chuẩn ETH (URI Ethereum)
- Nút sao chép địa chỉ ví ETH
- Rung nhẹ khi thao tác + Thông báo đã sao chép
- Giao diện tối giản, phù hợp cho điện thoại hoặc máy tính bảng tại quầy
- Tự động fullscreen khi xoay ngang
- Có thể thêm vào màn hình chính như ứng dụng (PWA)
- Bộ nhận diện riêng: Logo ETHẹt + Hướng dẫn QR

---

## 🖼️ Thương hiệu

- **Tên ứng dụng**: ETHẹt
- **Logo**: Chữ ETHẹt cách điệu + biểu tượng Ethereum
- **Nền giao diện**: Trắng `#ffffff` giúp logo nổi bật
- **Favicon & biểu tượng ngắn**: `logo.png`
- **QR mẫu + bộ nhận diện**: đã đính kèm trong thư mục branding

---

## 📲 Hướng dẫn sử dụng

### 1. Cài đặt & chạy ứng dụng (trên máy tính)

```bash
npm install
npm run dev
```

Mở trình duyệt tại: `http://localhost:5173`

---

### 2. Sử dụng thực tế tại quầy

- Nhân viên mở app ETHẹt trên trình duyệt điện thoại/máy tính bảng
- Nhập số tiền (VNĐ) khách cần thanh toán
- Khách dùng ví ETH (Metamask, Trust Wallet, Coin98...) quét mã QR để gửi ETH

---

### 3. Thêm ETHẹt vào màn hình chính

- Mở ETHẹt trên Chrome (Android) hoặc Safari (iPhone)
- Chọn “**Thêm vào màn hình chính**”
- App sẽ hiển thị toàn màn hình như ứng dụng thật

---

## ⚙️ Tuỳ chỉnh ví ETH nhận tiền

Mở file `src/App.jsx` và chỉnh dòng:

```js
const walletAddress = '0xa7FDF811C70Adcf73aEb299854f8f0eDA24B7dEf';
```

---

## 📦 Build & triển khai

```bash
npm run build
```

Có thể upload thư mục `dist/` lên:
- Vercel
- Netlify
- Server riêng

---

## 📁 Cấu trúc quan trọng

| Thành phần            | Vị trí                        |
|----------------------|-------------------------------|
| Giao diện chính       | `src/App.jsx`                 |
| Logo & favicon        | `public/logo.png`             |
| Manifest PWA          | `public/manifest.json`        |
| QR + Hướng dẫn hình ảnh | `branding/` (tuỳ chọn thêm)  |

---

## 📜 Bản quyền

Phát triển bởi **Cửa hàng Quang Trending – 2025**  
Ứng dụng **ETHẹt** được chia sẻ miễn phí, khuyến khích sử dụng trong cộng đồng.

