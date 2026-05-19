# Phần A: Kiểm tra đọc hiểu
## Câu A1: 
1. Position: static
Vẫn chiếm chỗ trong flow? Có.
Tham chiếu vị trí: Vị trí mặc định theo luồng của trang HTML
Cuộn theo trang? Có.
Use cases: Trạng thái hiển thị mặc định của tất cả các phần tử.

2. Position: relative
Vẫn chiếm chỗ trong flow? Có.
Tham chiếu vị trí: Vị trí gốc ban đầu của chính nó.
Cuộn theo trang? Có.
Use cases: Dịch chuyển phần tử một chút xíu so với vị trí gốc, hoặc quan trọng nhất là làm mốc tọa độ (parent) cho phần tử con chứa absolute.

3. Position: absolute
Vẫn chiếm chỗ trong flow? Không 
Tham chiếu vị trí: Phần tử cha hoặc tổ tiên gần nhất có position khác static.
Cuộn theo trang? Có 
Use cases: Làm badge (chấm đỏ thông báo) đè lên icon, tạo menu dropdown, tooltip hiển thị khi hover.

4. Position: fixed
Vẫn chiếm chỗ trong flow? Không
Tham chiếu vị trí: Viewport 
Cuộn theo trang? Không 
Use cases: Nút chat ở góc dưới màn hình, thanh điều hướng (header) luôn hiện ở trên cùng, lớp mờ nền (overlay) của popup.

5. Position: sticky
Vẫn chiếm chỗ trong flow? Có.
Tham chiếu vị trí: Hoạt động giống như relative cho đến khi bạn cuộn trang chạm tới một ngưỡng chỉ định, lúc này nó sẽ chuyển sang tham chiếu Viewport giống fixed.
Cuộn theo trang? Cuộn theo trang bình thường, nhưng đến điểm neo thì sẽ "dính" lại và không trôi đi nữa.
Use cases: Header dính trên cùng khi cuộn qua nó, thanh menu sidebar luôn đi theo nội dung bài viết dài.

** Trả lời câu hỏi thêm: **
- Khi nào absolute tham chiếu body?
Khi nó dò tìm khắp các thẻ bọc ngoài nó mà không thấy thẻ nào có cài đặt position (tức là tất cả đều mang giá trị static mặc định).
- Khi nào tham chiếu parent?
Khi thẻ parent trực tiếp của nó được cài đặt position khác static (phổ biến nhất là lập trình viên hay gán position: relative cho thẻ parent).
- Giải thích khái niệm "nearest positioned ancestor":
Đó là thẻ bọc ngoài (có thể là cha, ông, cụ...) gần nhất tính từ phần tử absolute có chứa thuộc tính position khác static. Phân tử absolute sẽ dùng thẻ tổ tiên gần nhất này làm hệ tọa độ mốc để căn chỉnh vị trí lên/xuống/trái/phải.

## Câu A2:
Trường hợp 1:
Bố cục dự đoán: 1 hàng ngang, gồm 4 cột. Vì có thuộc tính flex: 1, cả 4 item sẽ chia đều nhau chiếm toàn bộ chiều rộng của container (tỷ lệ 1:1:1:1).
Sơ đồ text art:
Plaintext
+---------------------------------------------------+
| +---------+  +---------+  +---------+  +---------+ |
| | Item 1  |  | Item 2  |  | Item 3  |  | Item 4  | |
| +---------+  +---------+  +---------+  +---------+ |
+---------------------------------------------------+

Trường hợp 2:
Bố cục dự đoán: Gồm 3 hàng, mỗi hàng 2 cột.
Giải thích: Mỗi item chiếm width: 45% cộng với margin: 2.5% cho các bên (trái + phải = 5%). Tổng cộng 1 item chiếm không gian ngang là 50%. Do đó, 1 hàng chỉ chứa vừa vặn 2 item (100%). Nhờ flex-wrap: wrap, 6 items sẽ tự động xuống dòng và tạo thành 3 hàng.
Sơ đồ text art:
Plaintext
+---------------------------------------------------+
| +---------------------+   +---------------------+ |
| |       Item 1        |   |       Item 2        | |
| +---------------------+   +---------------------+ |
|                                                   |
| +---------------------+   +---------------------+ |
| |       Item 3        |   |       Item 4        | |
| +---------------------+   +---------------------+ |
|                                                   |
| +---------------------+   +---------------------+ |
| |       Item 5        |   |       Item 6        | |
| +---------------------+   +---------------------+ |
+---------------------------------------------------+

Trường hợp 3:
Bố cục dự đoán: 1 hàng ngang, 3 items sẽ nằm cách đều nhau ra hai bên mép. Item 1 dính sát mép trái, Item 2 ở chính giữa, Item 3 dính sát mép phải (justify-content: space-between). Cả 3 item đều được căn giữa hoàn hảo theo chiều dọc của container (align-items: center).
Sơ đồ text art:
Plaintext
+---------------------------------------------------+
|                                                   |
|  [ Item 1 ]           [ Item 2 ]           [ Item 3 ]
|                                                   |
+---------------------------------------------------+

Trường hợp 4:
Bố cục dự đoán: 1 hàng, 3 cột với khoảng cách gap là 20px.
Cột 1 (Item 1) rộng cố định 200px.
Cột 3 (Item 3) rộng cố định 200px.
Cột 2 (Item 2) mang giá trị 1fr nên sẽ tự động phình to ra để chiếm toàn bộ phần khoảng trống còn lại ở giữa.
Sơ đồ text art:
Plaintext
+-----------------------------------------------------------+
| +---------+  +---------------------------------+  +---------+ |
| | Item 1  |  |              Item 2             |  | Item 3  | |
| | (200px) |  |               (1fr)             |  | (200px) | |
| +---------+  +---------------------------------+  +---------+ |
+-----------------------------------------------------------+
Trường hợp 5:

Bố cục dự đoán: Tổng cộng có 3 hàng, bố cục lưới chia đều 3 cột (repeat(3, 1fr)). Khoảng cách giữa các phần tử là 10px.

Hàng 1: Đủ 3 items (Item 1, 2, 3).

Hàng 2: Đủ 3 items (Item 4, 5, 6).

Hàng 3: Chỉ chứa 1 item cuối cùng (Item 7), nằm gọn ở vị trí cột đầu tiên bên trái. Hai cột còn lại ở hàng này bị bỏ trống.

Sơ đồ text art:

Plaintext
+---------------------------------------------------+
| +------------+   +------------+   +------------+  |
| |   Item 1   |   |   Item 2   |   |   Item 3   |  |
| +------------+   +------------+   +------------+  |
|                                                   |
| +------------+   +------------+   +------------+  |
| |   Item 4   |   |   Item 5   |   |   Item 6   |  |
| +------------+   +------------+   +------------+  |
|                                                   |
| +------------+                                    |
| |   Item 7   |                                    |
| +------------+                                    |
+---------------------------------------------------+

# Phần C
## Câu C1:
1. Navigation bar ngang (logo + menu + buttons)
Lựa chọn: Flexbox.
Giải thích: Vì navbar là một bố cục 1 chiều (1D - nằm ngang). Flexbox rất mạnh trong việc căn chỉnh các phần tử trên một trục (align-items: center để căn giữa dọc, justify-content: space-between để đẩy 3 cụm ra 2 mép và giữa).

2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
Lựa chọn: CSS Grid.
Giải thích: Đây là bố cục 2 chiều (2D - cả hàng và cột). Bất kể có bao nhiêu ảnh, Grid chỉ cần 1 dòng grid-template-columns: repeat(3, 1fr) là tự động xếp ảnh thành 3 cột đều tăm tắp, xử lý khoảng cách bằng gap cực kỳ dễ dàng thay vì phải tính toán phần trăm % và bù trừ margin phức tạp như Flexbox.

3. Layout blog: main content + sidebar
Lựa chọn: Flexbox hoặc Grid (Grid tối ưu hơn).
Giải thích: Dùng Grid sẽ nhanh hơn vì bạn có thể kiểm soát chính xác kích thước bằng grid-template-columns: 1fr 300px; (cột nội dung tự co giãn, cột sidebar cố định). Tuy nhiên dùng Flexbox (flex: 1 cho main, width: 300px cho sidebar) cũng hoàn toàn giải quyết được tình huống này.

4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
Lựa chọn: CSS Grid.
Giải thích: Giống lưới ảnh Instagram, Footer 4 cột là bài toán chia tỷ lệ không gian tĩnh. Dùng Grid với lệnh grid-template-columns: repeat(4, 1fr) sẽ tạo ra 4 cột bằng nhau một cách nhanh gọn, ít lỗi khi responsive.

5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
Lựa chọn: Flexbox.
Giải thích: Đây là layout xếp chồng theo 1 chiều dọc. Bật thẻ Card thành display: flex; flex-direction: column; và gán cho nút dưới cùng thuộc tính margin-top: auto;, nút sẽ tự động bị đẩy xuống sát đáy card một cách hoàn hảo bất chấp việc đoạn text ở giữa dài hay ngắn.

## Câu C2 
Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
Nguyên nhân: Các .card đang nằm trong Flexbox nên có chiều cao bằng nhau (nhờ align-items: stretch mặc định của Flex container). Tuy nhiên, nội dung bên TRONG thẻ .card chưa có cấu trúc Flexbox dọc để kiểm soát vị trí của nút. Khi nội dung (h3 hoặc đoạn mô tả) dài ngắn khác nhau, cái nút sẽ hiển thị ngay sát dưới nội dung đó thay vì tuột xuống đáy.
Code sửa: (Thêm flex dọc cho thẻ card và đẩy nút xuống đáy)
CSS
/* Code sửa Lỗi 1 */
.card-container { display: flex; flex-wrap: wrap; }
.card { 
    width: 30%; 
    margin: 1.5%; 
    /* --- THÊM 2 DÒNG NÀY --- */
    display: flex; 
    flex-direction: column; 
}
.card img { width: 100%; }
.card h3 { font-size: 18px; }
.card .btn { 
    padding: 10px; 
    /* --- THÊM DÒNG NÀY --- */
    margin-top: auto; 
}

Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên
Nguyên nhân: Khai báo .hero là display: flex; mới chỉ kích hoạt môi trường Flexbox, nhưng lại thiếu các thuộc tính căn chỉnh dọc và ngang của Flexbox (justify-content và align-items). Thuộc tính text-align: center ở .hero-content chỉ căn giữa được chữ ở bên trong khối đó, chứ không căn giữa được cái khối đó ra giữa màn hình.
Code sửa:
CSS
/* Code sửa Lỗi 2 */
.hero {
    height: 100vh;
    display: flex;
    /* --- THÊM 2 DÒNG NÀY --- */
    justify-content: center; /* Căn giữa trục ngang */
    align-items: center;     /* Căn giữa trục dọc */
}
.hero-content {
    text-align: center;
}

Lỗi 3: Sidebar bị co lại khi content quá dài
Nguyên nhân: Thuộc tính mặc định của các thẻ con nằm trong Flexbox là flex-shrink: 1. Điều này có nghĩa là khi không đủ không gian (ví dụ nội dung .content quá dài hoặc màn hình nhỏ lại), các phần tử sẽ tự động bị bóp nhỏ lại để nhét vừa container. Vì thế cái width: 250px của Sidebar không được bảo toàn.
Code sửa: (Tắt tính năng co rúm của Sidebar)
CSS
/* Code sửa Lỗi 3 */
.layout { display: flex; }
.sidebar { 
    width: 250px; 
    /* --- THÊM DÒNG NÀY --- */
    flex-shrink: 0; 
}
.content { flex: 1; }