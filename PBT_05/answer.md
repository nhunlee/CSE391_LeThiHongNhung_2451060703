# PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
## Câu A1 
- Thẻ <meta viewport> chuẩn: HTML
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Giải thích:
width=device-width: Yêu cầu trình duyệt thiết lập chiều rộng của trang web bằng đúng chiều rộng màn hình vật lý của thiết bị.
initial-scale=1.0: Mức độ thu phóng ban đầu khi trang vừa tải xong là 100% (không bị zoom to hay thu nhỏ).
- Nếu thiếu thẻ này: Trình duyệt trên điện thoại (như iPhone) sẽ giả định đây là một trang web dành cho Desktop (thường có chiều rộng khoảng 980px). Nó sẽ hiển thị toàn bộ trang nhưng thu nhỏ lại vừa bằng màn hình điện thoại, khiến chữ và nút bấm trở nên cực kỳ nhỏ, người dùng bắt buộc phải dùng tay zoom lên mới đọc và bấm được.
- Mobile-First vs Desktop-First:
Mobile-First: Viết CSS mặc định cho giao diện điện thoại trước. Sau đó dùng @media (min-width: ...) để nới rộng layout khi màn hình to ra.
CSS
/* Mobile-First */
.col { width: 100%; } /* Mặc định Mobile */
@media (min-width: 768px) { .col { width: 50%; } } /* Tablet trở lên */
Desktop-First: Viết CSS cho màn hình máy tính to trước. Sau đó dùng @media (max-width: ...) để bóp nhỏ layout lại khi màn hình bé đi.
CSS
/* Desktop-First */
.col { width: 25%; } /* Mặc định Desktop */
@media (max-width: 768px) { .col { width: 100%; } } /* Ép lại trên Mobile */
- Tại sao Mobile-First được khuyên dùng? Về hiệu suất, thiết bị di động có cấu hình yếu và mạng chậm hơn máy tính. Code theo Mobile-First giúp điện thoại chỉ cần tải đoạn CSS mặc định gọn nhẹ nhất, bỏ qua các đoạn CSS phức tạp của Desktop, giúp trang tải nhanh hơn.

## Câu A2
1. Breakpoint Cực Nhỏ (Extra small - xs)
Kích thước pixel: < 576px
Thiết bị đại diện: Điện thoại di động thông minh ở tư thế cầm dọc (iPhone, Samsung Galaxy...).
Ví dụ bố cục lưới: Sản phẩm nên hiển thị 1 cột. Màn hình điện thoại dọc rất hẹp, việc để 1 cột giúp hình ảnh to rõ, chữ dễ đọc và vùng bấm (touch target) đủ rộng cho ngón tay.

2. Breakpoint Nhỏ (Small - sm)
Kích thước pixel: ≥ 576px
Thiết bị đại diện: Điện thoại di động ở tư thế cầm ngang (Landscape) hoặc các dòng phablet kích thước lớn.
Ví dụ bố cục lưới: Sản phẩm nên hiển thị 2 cột. Không gian chiều ngang đã được nới rộng, việc chia 2 cột giúp tận dụng diện tích hiển thị mà không làm nội dung bị quá bé.

3. Breakpoint Trung Bình (Medium - md)
Kích thước pixel: ≥ 768px
Thiết bị đại diện: Máy tính bảng (Tablet) như iPad, Galaxy Tab (cầm dọc).
Ví dụ bố cục lưới: Sản phẩm nên hiển thị 2 hoặc 3 cột (tùy thuộc vào thiết kế có kèm Sidebar hay không).

4. Breakpoint Lớn (Large - lg)
Kích thước pixel: ≥ 992px
Thiết bị đại diện: Máy tính xách tay (Laptop) hoặc màn hình Desktop cỡ nhỏ.
Ví dụ bố cục lưới: Sản phẩm nên hiển thị 3 hoặc 4 cột. Ở mức này, giao diện đã đủ rộng rãi để hiển thị thêm các thành phần phụ như thanh điều hướng ngang, bộ lọc (Sidebar filter).

5. Breakpoint Cực Lớn (Extra large - xl)
Kích thước pixel: ≥ 1200px
Thiết bị đại diện: Màn hình máy tính để bàn (Desktop) cỡ lớn, màn hình độ phân giải cao (Full HD trở lên).
Ví dụ bố cục lưới: Sản phẩm nên hiển thị 4 đến 5 cột để tối ưu hóa không gian trống hai bên màn hình, mang lại trải nghiệm xem sản phẩm toàn diện cho người dùng E-commerce.

## Câu A3:
- Tại chiều rộng 375px (iPhone SE): .container có width là 100%.
(Vì kích thước này nhỏ hơn mốc 576px, trình duyệt sẽ lấy giá trị CSS mặc định ban đầu).- - Tại chiều rộng 600px: .container có width là 540px.
(Vì đã vượt mốc min-width: 576px nhưng chưa chạm tới mốc 768px).
- Tại chiều rộng 800px: .container có width là 720px.
(Vì đã vượt mốc min-width: 768px nhưng chưa chạm tới mốc 992px).
- Tại chiều rộng 1000px: .container có width là 960px.
(Vì đã vượt mốc min-width: 992px nhưng chưa chạm tới mốc 1200px).
- Tại chiều rộng 1400px: .container có width là 1140px.
(Vì lớn hơn mốc min-width: 1200px, trình duyệt sẽ áp dụng quy tắc media query lớn nhất ở cuối cùng).

## Câu A4:
1. 4 tính năng chính của SCSS:
Variables (Biến): Lưu trữ các giá trị (màu sắc, font, kích thước...) bằng dấu $. Giúp tái sử dụng và dễ dàng thay đổi đồng loạt.
SCSS
$primary:` #3498db `;
.btn { background-color: $primary; }
Nesting (CSS lồng nhau): Viết CSS lồng nhau theo đúng cấu trúc phân cấp HTML, giúp code gọn gàng. Dùng & để gọi lại class cha.
SCSS
nav {
    a { color: white; }
    &:hover { background: #333; } /* Tương đương nav:hover */
}
Mixins: Đóng gói một nhóm thuộc tính CSS thành một khối (như hàm) để gọi lại ở nhiều nơi. Có thể nhận tham số.
SCSS
@mixin flex-center { display: flex; justify-content: center; }
.box { @include flex-center; }
@extend (Kế thừa): Cho phép một class dùng chung toàn bộ thuộc tính CSS của một class khác, tránh lặp lại code.
SCSS
.message { border: 1px solid #ccc; }
.error { @extend .message; color: red; }
2. Tại sao trình duyệt KHÔNG đọc được file .scss?
Trình duyệt chỉ được lập trình để hiểu ngôn ngữ CSS thuần. SCSS là ngôn ngữ "tiền xử lý" (preprocessor) chứa các logic lập trình (biến, lồng nhau, hàm) mà trình duyệt không hỗ trợ đọc hiểu trực tiếp.
3. Cần bước gì để chuyển SCSS → CSS?
Cần thực hiện bước Biên dịch (Compile). Sử dụng các công cụ biên dịch (như extension Live Sass Compiler trên VS Code hoặc Dart Sass) để dịch mã từ file .scss xuất ra thành file .css bình thường, sau đó mới nhúng file CSS này vào thẻ <link> của HTML.