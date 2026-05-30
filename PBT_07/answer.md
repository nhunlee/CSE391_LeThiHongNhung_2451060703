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

## Câu A2:
**Giải thích tại sao `"5" + 3` và `"5" - 3` cho kết quả khác nhau:**

Sự khác biệt này xuất phát từ cơ chế **Ép kiểu ngầm định (Implicit Type Coercion)** của JavaScript và cách nó xử lý các toán tử khác nhau:

* **Trường hợp `"5" + 3` (Kết quả là `"53"`):**
    * Trong JavaScript, toán tử `+` có hai chức năng: cộng số học và nối chuỗi.
    * Khi sử dụng `+`, nếu JavaScript phát hiện có ít nhất một toán hạng là chuỗi (String), nó sẽ ưu tiên thực hiện **phép nối chuỗi**.
    * Do đó, nó tự động ép kiểu số `3` thành chuỗi `"3"`, rồi ghép lại với `"5"` để tạo thành chuỗi `"53"`.

* **Trường hợp `"5" - 3` (Kết quả là `2`):**
    * Toán tử `-` (cũng như `*`, `/`, `%`) chỉ có một chức năng duy nhất là thực hiện phép toán số học.
    * Khi thấy toán tử `-`, JavaScript hiểu rằng bạn muốn làm toán. Nó sẽ cố gắng ép kiểu chuỗi `"5"` về định dạng số (Number).
    * Vì `"5"` có thể chuyển thành số `5` hợp lệ, phép tính trở thành `5 - 3`, và kết quả trả về là số nguyên `2`.

## Câu A3

**1. Dự đoán kết quả (Output):**
console.log(5 == "5");                // true (Ép kiểu chuỗi "5" thành số 5 rồi so sánh)
console.log(5 === "5");               // false (Khác kiểu dữ liệu: number vs string)
console.log(null == undefined);       // true (Quy tắc đặc biệt trong JS: null và undefined bằng nhau lỏng lẻo)
console.log(null === undefined);      // false (Khác kiểu dữ liệu: object/null vs undefined)
console.log(NaN == NaN);              // false (Đặc tính của JS: NaN không bao giờ bằng chính nó)
console.log(0 == false);              // true (Ép kiểu false thành 0 rồi so sánh)
console.log(0 === false);             // false (Khác kiểu dữ liệu: number vs boolean)
console.log("" == false);             // true (Cả chuỗi rỗng "" và false đều bị ép kiểu về 0)

**Quy tắc:** Từ giờ trở đi, bạn **LUÔN LUÔN nên dùng `===` (Strict Equality)**.
**Tại sao?**
* **`===` (So sánh nghiêm ngặt):** Phép toán này so sánh cả **giá trị** lẫn **kiểu dữ liệu**. Nếu hai bên khác kiểu dữ liệu, nó sẽ trả về `false` ngay lập tức. Điều này giúp code rõ ràng, minh bạch và hoạt động chính xác theo đúng logic mà bạn mong muốn.
* **`==` (So sánh lỏng lẻo):** Khi hai bên khác kiểu dữ liệu, JavaScript sẽ ngầm định **ép kiểu (Type Coercion)** chúng về cùng một kiểu rồi mới đem đi so sánh. Việc ép kiểu ngầm này thường tạo ra những kết quả rất vô lý (ví dụ: `"" == false` hay `0 == []` đều trả về `true`), dẫn đến những lỗi logic (bug) tiềm ẩn và cực kỳ khó debug trong các dự án thực tế.

## Câu A4: 
**1. TẤT CẢ các giá trị Falsy trong JavaScript:**
Trong JavaScript, chỉ có đúng 8 giá trị Falsy (những giá trị khi bị ép kiểu sang Boolean sẽ trở thành `false`). Bất kỳ giá trị nào không nằm trong danh sách này đều mặc định là Truthy:
1. `false`
2. `0` (Số không)
3. `-0` (Số không âm)
4. `0n` (BigInt zero)
5. `""`, `''`, ` `` ` (Chuỗi rỗng)
6. `null`
7. `undefined`
8. `NaN` (Not a Number)

**2. Dự đoán kết quả (Output):**
```javascript
if ("0") console.log("A");           // In (Vì "0" là chuỗi có độ dài > 0 -> Truthy)
if ("") console.log("B");            // Không in (Vì "" là chuỗi rỗng -> Falsy)
if ([]) console.log("C");            // In (Vì mảng là Object, mà Object luôn là Truthy)
if ({}) console.log("D");            // In (Vì Object rỗng vẫn là Object -> Truthy)
if (null) console.log("E");          // Không in (null thuộc danh sách Falsy)
if (0) console.log("F");             // Không in (0 thuộc danh sách Falsy)
if (-1) console.log("G");            // In (Mọi số khác 0 và NaN đều là Truthy)
if (" ") console.log("H");           // In (Chuỗi có chứa khoảng trắng có độ dài > 0 -> Truthy)

### Câu A5 (5đ) — Template Literals

Viết lại các chuỗi bằng **template literal** (sử dụng dấu backtick \` \` và cú pháp chèn biến \`${}\`):

```javascript
// Cách 1:
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3: 
// (Template literals hỗ trợ xuống dòng trực tiếp và không cần escape dấu ngoặc kép bằng dấu \)
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

# Phần C: 
## Câu C1:

**1. Liệt kê TẤT CẢ các lỗi, giải thích và cách sửa:**

* **Lỗi 1: Dùng phép gán (`=`) thay vì so sánh (`===`)**
    * **Dòng code:** `if (giaSauGiam = 0)`
    * **Giải thích:** Dấu `=` là toán tử gán. Biểu thức này vô tình gán giá trị `0` cho biến `giaSauGiam`. Giá trị `0` là Falsy, nên khối lệnh `if` sẽ không bao giờ chạy, đồng thời làm sai lệch kết quả trả về ở cuối hàm.
    * **Cách sửa:** Thay bằng toán tử so sánh nghiêm ngặt: `if (giaSauGiam === 0)`.

* **Lỗi 2 (Lỗi "ẩn"): Dùng `var` trong vòng lặp chứa `setTimeout`**
    * **Dòng code:** `for (var i = 0; i < 5; i++) { setTimeout(...) }`
    * **Giải thích:** Hàm `setTimeout` là bất đồng bộ (chạy sau 1000ms). Từ khóa `var` có phạm vi Function Scope (hoặc Global Scope), nên chỉ có **một** vùng nhớ duy nhất cho biến `i`. Khi vòng lặp chạy xong trong nháy mắt, `i` đã tăng lên `5`. Lúc này `setTimeout` mới bắt đầu thực thi callback, nó nhìn vào vùng nhớ `i` và thấy giá trị `5`, dẫn đến in ra "Item 5" liên tục 5 lần.
    * **Cách sửa:** Đổi `var i = 0` thành `let i = 0`. `let` có Block Scope, mỗi vòng lặp sẽ tạo ra một biến `i` hoàn toàn mới và đóng gói (closure) vào callback của `setTimeout`, giúp in ra đúng từ "Item 0" đến "Item 4".

* **Lỗi 3: Kiểu dữ liệu trả về không nhất quán (Return type mismatch)**
    * **Dòng code:** `return "Phần trăm giảm không hợp lệ"`
    * **Giải thích:** Hàm đang làm nhiệm vụ tính toán toán học, nhưng khi có lỗi lại `return` một chuỗi (String). Khi gọi `tinhGiaGiamGia(50000, 110)`, biến `gia2` sẽ chứa chuỗi này thay vì số, gây lỗi dây chuyền cho logic ở ngoài.
    * **Cách sửa:** Nên ném ra lỗi rõ ràng bằng cách dùng `throw new Error("Phần trăm giảm không hợp lệ");`.

* **Lỗi 4: Không kiểm tra và ép kiểu đầu vào (Input Validation)**
    * **Dòng code:** `tinhGiaGiamGia("100000", 20)`
    * **Giải thích:** Truyền `"100000"` dưới dạng chuỗi (String). Tuy ở đây phép `*` và `-` sẽ ngầm định ép kiểu về số, nhưng đây là thói quen lập trình nguy hiểm dễ sinh bug nếu sau này có dùng phép `+`.
    * **Cách sửa:** Ép kiểu đầu vào rõ ràng bằng `Number(giaBan)`.

* **Lỗi 5: Dùng `var` để khai báo biến `giamGia`**
    * **Dòng code:** `var giamGia = ...`
    * **Giải thích:** `var` dễ gây rò rỉ biến ra ngoài phạm vi và có thể khai báo lại. Biến `giamGia` chỉ được tính một lần và không gán lại.
    * **Cách sửa:** Thay `var` bằng `const`.

* **Lỗi 6: Thiếu dấu chấm phẩy (;) kết thúc câu lệnh**
    * **Dòng code:** Xuyên suốt hàm.
    * **Giải thích:** Dù JS có cơ chế tự động chèn dấu chấm phẩy (ASI), việc bỏ qua nó là một bad practice khiến code lộn xộn và đôi khi gây lỗi cấu trúc ngầm định ở những dòng nối tiếp nhau.
    * **Cách sửa:** Thêm dấu chấm phẩy vào cuối tất cả các câu lệnh khai báo, gán, return, v.v.

---

**2. Đoạn code đã được sửa lại hoàn chỉnh:**

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    // Sửa lỗi 4: Ép kiểu đầu vào
    const gia = Number(giaBan);

    // Kiểm tra tính hợp lệ của input
    if (isNaN(gia) || isNaN(phanTramGiam)) {
        throw new Error("Dữ liệu đầu vào không phải là số hợp lệ!");
    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        // Sửa lỗi 3: Ném ra lỗi thay vì trả về String
        throw new Error("Phần trăm giảm không hợp lệ");
    }
    
    // Sửa lỗi 5 & 6: Đổi var thành const và thêm chấm phẩy
    const giamGia = (gia * phanTramGiam) / 100;
    let giaSauGiam = gia - giamGia;
    
    // Sửa lỗi 1: Thay phép gán '=' bằng phép so sánh '==='
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}
```
```
// Test case an toàn với try...catch
try {
    const gia = tinhGiaGiamGia("100000", 20);
    console.log("Giá sau giảm: " + gia + "đ");

    const gia2 = tinhGiaGiamGia(50000, 110);
    console.log("Giá: " + gia2);
} catch (error) {
    console.log("Lỗi: " + error.message);
}

// Sửa lỗi 2: Thay 'var' bằng 'let'
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```
