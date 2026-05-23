# Phần A 
## Câu A1
1. Kích thước < 768px (Màn hình Mobile - tương ứng với class col-12)
Số cột hiển thị: 1 cột (Mỗi box chiếm trọn 12/12 phần chiều ngang).
Box Layout (Sơ đồ bố cục): Xếp chồng lên nhau thành 4 hàng dọc.
Plaintext
┌─────────┐
│  Box 1  │
├─────────┤
│  Box 2  │
├─────────┤
│  Box 3  │
├─────────┤
│  Box 4  │
└─────────┘
2. Kích thước 768px - 991px (Màn hình Tablet - tương ứng với class col-md-6)
Số cột hiển thị: 2 cột (Mỗi box chiếm 6/12 phần, tương đương 50% chiều ngang).
Box Layout (Sơ đồ bố cục): Chia làm 2 hàng, mỗi hàng 2 box.
Plaintext
┌─────────┬─────────┐
│  Box 1  │  Box 2  │
├─────────┼─────────┤
│  Box 3  │  Box 4  │
└─────────┴─────────
3. Kích thước ≥ 992px (Màn hình Desktop - tương ứng với class col-lg-3)
Số cột hiển thị: 4 cột (Mỗi box chiếm 3/12 phần, tương đương 25% chiều ngang).
Box Layout (Sơ đồ bố cục): Xếp dàn hàng ngang trên cùng 1 hàng.
Plaintext
┌───────┬───────┬───────┬───────┐
│ Box 1 │ Box 2 │ Box 3 │ Box 4 │
└───────┴───────┴───────┴───────┘
Trả lời câu hỏi thêm:
1. col-md-6 nghĩa là gì?
Ý nghĩa: Bắt đầu từ kích thước màn hình trung bình (Medium - md, tức là chiều rộng màn hình từ 768px trở lên), phần tử này sẽ chiếm 6 phần trên tổng số 12 phần của lưới Bootstrap (tương đương chiếm 50% chiều rộng của container chứa nó).
2. Không cần viết col-sm-12 vì Bootstrap được thiết kế theo nguyên tắc Mobile-First (kế thừa từ kích thước nhỏ lên kích thước lớn).
Giải thích: Trong thẻ HTML đã có sẵn class col-12 (quy định mặc định cho màn hình từ mức nhỏ nhất xs trở lên là chiếm 12 phần). Khi màn hình lớn dần lên mức sm (≥ 576px), nó sẽ tự động kế thừa giá trị col-12 này, và tiếp tục giữ nguyên 12 phần cho đến khi nó đụng phải điểm neo tiếp theo là màn hình md (nơi có lệnh col-md-6 chặn lại để đổi kích thước). Vì tính chất tự động kế thừa này, việc viết thêm col-sm-12 là dư thừa.

## Câu 2:
1. Class d-none d-md-block:
Ẩn khi nào? Bị ẩn (display: none) trên màn hình Mobile (< 768px).
Hiển thị khi nào? Hiện dưới dạng khối (display: block) từ màn hình Tablet trở lên (≥ 768px).
(Thường dùng để giấu Sidebar trên điện thoại và hiện ra trên máy tính).
2. 5 spacing utilities (Margin/Padding):
mt-3: Margin Top (Tạo lề ở phía trên).
px-4: Padding X (Tạo khoảng đệm bên trong ở mép trái & phải).
mb-auto: Margin Bottom Auto (Tự động đẩy lề dưới ra tối đa, hay dùng đẩy nút bấm xuống sát đáy Card).
mx-auto: Margin X Auto (Tự động chia lề trái/phải bằng nhau, dùng để căn giữa phần tử).
py-2: Padding Y (Tạo khoảng đệm bên trong ở mép trên & dưới).
3. Sự khác nhau giữa các loại Container:
.container: Giới hạn chiều rộng (có khoảng trống 2 bên mép), tự động căn giữa màn hình.
.container-fluid: Tràn viền, luôn chiếm tối đa 100% chiều rộng ở mọi loại màn hình.
.container-md: Là bản lai. Sẽ tràn viền 100% trên Mobile, nhưng từ màn hình vừa trở lên (≥ 768px) sẽ hoạt động giống .container (giới hạn chiều rộng).

# Phần C
## Câu C1:

**1. Phân tích Responsive trên 3 kích thước màn hình:**
* **Navigation (Thanh điều hướng) thay đổi thế nào?**
    * **Mobile (375px):** Thanh tìm kiếm lớn bị giấu đi, chỉ còn một icon kính lúp. Không có thanh Sidebar bên trái (hamburger menu bị ẩn). Thay vào đó, YouTube sử dụng một thanh điều hướng dưới đáy màn hình (Bottom Navigation Bar) chứa các mục Home, Shorts, Subscriptions.
    * **Tablet (768px):** Thanh tìm kiếm đầy đủ xuất hiện ở giữa. Nút Hamburger (☰) xuất hiện để mở menu dạng trượt (overlay). Sidebar bên trái bị thu gọn lại thành dạng "Mini Sidebar" (chỉ hiện icon, không hiện chữ) để tiết kiệm diện tích.
    * **Desktop (1440px):** Navbar hiển thị tối đa tiện ích. Nút Hamburger lúc này dùng để điều khiển một Sidebar lớn nằm cố định bên trái (hiển thị đầy đủ cả icon và chữ), nội dung chính bên phải sẽ tự động co giãn theo.

* **Lưới content thay đổi mấy cột?**
    * **Mobile (375px):** Lưới video xếp thành **1 cột** dọc (Mỗi video chiếm 100% chiều ngang).
    * **Tablet (768px):** Lưới video chia thành **3 cột**.
    * **Desktop (1440px):** Lưới video chia thành **4 cột** hoặc **5 cột** (tùy vào việc người dùng đang đóng hay mở thanh Sidebar).

* **Elements nào bị ẩn trên Mobile?**
    * Thanh Sidebar bên trái bị ẩn hoàn toàn (thay bằng thanh dưới đáy).
    * Các nút Filter lọc chủ đề video trên cùng (Chip buttons) bị che khuất một phần, phải vuốt ngang mới xem hết được.
    * Một số metadata hiển thị trên video (như một đoạn mô tả ngắn ở màn tìm kiếm) bị ẩn đi để giao diện bớt rối mắt.

* **Font size có thay đổi không?**
    * Có sự thay đổi. Trên Mobile, tiêu đề video thường được làm font to hơn một chút so với tỷ lệ khung hình để phù hợp với thao tác chạm ngón tay (Touch-friendly), nhưng đồng thời chữ cũng bị cắt ngắn bằng dấu `...` (text-overflow) sớm hơn so với Desktop để tránh chiếm quá nhiều không gian.

## Câu C2 (10đ) — Thiết kế Responsive Strategy

**1. Wireframe (Sơ đồ bố cục) cho 3 kích thước:**

**Mobile (< 768px):**
```text
┌───────────────────────────┐
│ HEADER (Logo + Hamburger) │
├───────────────────────────┤
│        HERO IMAGE         │
├───────────────────────────┤
│        FOOD GRID          │
│   ┌───┐ ┌───┐ ┌───┐       │
│   │ 1 │ │ 2 │ │ 3 │       │
│   └───┘ └───┘ └───┘       │
│   (Xếp 1 cột hoặc 2 cột)  │
├───────────────────────────┤
│   FORM ĐẶT BÀN (Dọc)      │
│   [Ngày] [Giờ]            │
│   [Số người] [Ghi chú]    │
│   [ NÚT ĐẶT BÀN ]         │
├───────────────────────────┤
│    GOOGLE MAPS (Full)     │
├───────────────────────────┤
│          FOOTER           │
└───────────────────────────┘
┌───────────────────────────┐
│ HEADER (Logo + Menu ngang)│
├───────────────────────────┤
│        HERO IMAGE         │
├───────────────────────────┤
│        FOOD GRID          │
│   ┌─────┐ ┌─────┐         │
│   │  1  │ │  2  │         │
│   └─────┘ └─────┘         │
│   (Xếp 2 cột x 3 hàng)    │
├───────────────────────────┤
│  FORM ĐẶT BÀN (Chia cột)  │
│  [Ngày]      [Giờ]        │
│  [Số người]  [Ghi chú]    │
│       [ NÚT ĐẶT ]         │
├───────────────────────────┤
│    GOOGLE MAPS (Rộng)     │
├───────────────────────────┤
│          FOOTER           │
└───────────────────────────┘

┌─────────────────────────────────────────┐
│       HEADER (Logo + Menu ngang)        │
├─────────────────────────────────────────┤
│              HERO IMAGE                 │
├───────────────────────┬─────────────────┤
│       FOOD GRID       │  FORM ĐẶT BÀN   │
│ ┌───┐ ┌───┐ ┌───┐     │  (Sidebar)      │
│ │ 1 │ │ 2 │ │ 3 │     │                 │
│ └───┘ └───┘ └───┘     │  [Ngày/Giờ]     │
│ (Xếp 3 cột bên trái)  │  [ NÚT ]        │
├───────────────────────┴─────────────────┤
│            GOOGLE MAPS                  │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
/* 1. Mặc định Mobile-First (< 768px) */
.restaurant-layout {
    display: grid;
    grid-template-columns: 1fr; /* Mọi thứ xếp 1 cột dọc */
    gap: 20px;
}

.food-grid {
    display: grid;
    grid-template-columns: 1fr; /* Ảnh đồ ăn xếp 1 cột (hoặc 2 cột) */
    gap: 15px;
}

.form-reservation {
    display: flex;
    flex-direction: column; /* Form nằm dọc */
    order: 3; /* Nằm dưới phần đồ ăn */
}

/* 2. Tablet (≥ 768px) */
@media (min-width: 768px) {
    .food-grid {
        grid-template-columns: repeat(2, 1fr); /* Đồ ăn xếp 2 cột */
    }
    
    .form-reservation {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Các ô input xếp ngang 2 cột */
        gap: 10px;
    }
}

/* 3. Desktop (≥ 1024px) */
@media (min-width: 1024px) {
    .restaurant-layout {
        /* Nâng cấp toàn bộ trang thành 2 cột: Nội dung và Sidebar */
        grid-template-columns: 2fr 1fr; 
    }
    
    .hero, .google-map, .footer {
        grid-column: 1 / -1; /* Full màn hình xuyên qua 2 cột */
    }
    
    .food-grid {
        grid-template-columns: repeat(3, 1fr); /* Đồ ăn xếp 3 cột */
    }
    
    .form-reservation {
        /* Kéo form sang cột phải, làm nó dính (sticky) lại khi cuộn */
        display: flex; 
        flex-direction: column;
        position: sticky;
        top: 20px;
    }
}

