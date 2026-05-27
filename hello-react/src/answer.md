### Bài 0.1: 

**1. File `.jsx` khác gì file `.js`?**
- **`.js`**: Là file JavaScript thuần, chỉ chứa các đoạn code xử lý logic cơ bản.
- **`.jsx`**: Là file JavaScript mở rộng (JavaScript XML), cho phép bạn viết trực tiếp mã HTML (như `<div>`, `<h1>`,...) lồng vào bên trong JavaScript. Các dự án React bắt buộc dùng `.jsx` (hoặc cấu hình riêng) để công cụ dịch hiểu được giao diện bạn đang viết.

**2. Tại sao phải `export default App`?**
- Để "công khai" (xuất) component `App` ra bên ngoài. Nhờ đó, các file khác (đặc biệt là file khởi động `main.jsx`) mới có thể tìm thấy, `import` nó vào và kết nối để hiển thị lên màn hình trình duyệt.

**3. Thử xóa `export default` → chuyện gì xảy ra?**
- Trang web sẽ bị lỗi và màn hình trắng xóa. 
- Môi trường chạy (Vite) sẽ báo lỗi (kiểu như *does not provide an export named 'default'*), vì file `main.jsx` đang cố gọi `App` ra dùng nhưng không thấy đâu cả (do bạn chưa xuất nó ra).