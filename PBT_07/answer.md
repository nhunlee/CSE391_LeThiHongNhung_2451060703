# Phần A: Kiểm tra đọc hiểu
## Câu A1: 
### Câu A1 (5đ) — var / let / const

**1. Dự đoán kết quả (Output):**
* **Đoạn 1:** In ra `undefined`.
* **Đoạn 2:** Báo lỗi `ReferenceError` (Cannot access 'y' before initialization).
* **Đoạn 3:** Báo lỗi `TypeError` (Assignment to constant variable).
* **Đoạn 4:** In ra mảng `[1, 2, 3, 4]`.
* **Đoạn 5:** In ra lần lượt: `"Trong block: 2"` sau đó là `"Ngoài block: 1"`.

**2. Giải thích các kết quả bất ngờ:**
* **Đoạn 1 (Hoisting với `var`):** Cơ chế Hoisting trong JavaScript sẽ đẩy phần khai báo `var x` lên đầu phạm vi (scope), nhưng phần gán giá trị `= 5` vẫn ở nguyên vị trí cũ. Vì vậy, khi `console.log(x)` chạy, biến `x` đã tồn tại nhưng chưa có giá trị, dẫn đến kết quả là `undefined`.
* **Đoạn 2 (Temporal Dead Zone - TDZ với `let`):** Khác với `var`, biến khai báo bằng `let` cũng được hoisting nhưng bị đưa vào "Vùng chết tạm thời" (TDZ). Bạn không thể truy cập hoặc sử dụng biến này trước khi dòng khởi tạo của nó được thực thi.
* **Đoạn 4 (`const` với Reference Types):** Từ khóa `const` chỉ ngăn chặn việc gán lại một giá trị hoàn toàn mới (re-assignment) cho biến `arr` (ví dụ `arr = [5, 6]` sẽ báo lỗi). Tuy nhiên, mảng là kiểu dữ liệu tham chiếu (Reference Type), nên bạn hoàn toàn có thể thay đổi dữ liệu bên trong vùng nhớ mà biến đó trỏ tới, ví dụ như thêm phần tử bằng `.push()`.
* **Đoạn 5 (Block Scope):** Khai báo `let` có phạm vi theo khối (Block Scope). Khối lệnh `{ ... }` tạo ra một phạm vi mới, do đó biến `a` bên trong `{}` là một biến hoàn toàn khác và độc lập với biến `a` ở bên ngoài.