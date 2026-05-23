// A. Xác định các DOM elements [cite: 56, 57, 58, 59, 60, 61, 62, 63, 64]
const studentList = document.getElementById('student-list');
const form = document.getElementById('student-form');
const modalOverlay = document.getElementById('modal-overlay');
const btnAdd = document.getElementById('btn-add');
const btnClose = document.getElementById('btn-close');
const notification = document.getElementById('notification');
const editIndexInput = document.getElementById('edit-index');

// Đọc mảng sinh viên từ localStorage, nếu chưa có thì lấy mảng rỗng [cite: 74, 75]
let students = JSON.parse(localStorage.getItem('students')) || [];

// B. Xử lý sự kiện mở/đóng Form [cite: 66, 67, 212]
btnAdd.addEventListener('click', () => {
    form.reset(); // Xóa sạch dữ liệu cũ trên form
    editIndexInput.value = '-1'; // Chuyển về trạng thái Thêm mới
    document.getElementById('modal-title').innerText = 'Thêm Sinh Viên';
    modalOverlay.classList.remove('hidden'); // Hiển thị popup
});

btnClose.addEventListener('click', () => {
    modalOverlay.classList.add('hidden'); // Ẩn popup
});

// C. Hàm Hiển thị danh sách và Cập nhật thống kê [cite: 73, 76, 85, 86, 110]
function renderStudents() {
    studentList.innerHTML = ''; // Làm sạch bảng trước khi render lại
    let totalScore = 0;

    // Duyệt mảng và vẽ HTML
    students.forEach((sv, index) => {
        totalScore += parseFloat(sv.score);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sv.id}</td>
            <td>${sv.name}</td>
            <td>${sv.dob}</td>
            <td>${sv.classId}</td>
            <td>${sv.score}</td>
            <td>${sv.email}</td>
            <td>
                <button onclick="editStudent(${index})">Sửa</button>
                <button onclick="deleteStudent(${index})">Xóa</button>
            </td>
        `;
        studentList.appendChild(tr);
    });

    // Tính toán và hiển thị thống kê [cite: 39, 40]
    document.getElementById('total-students').innerText = students.length;
    const avg = students.length > 0 ? (totalScore / students.length).toFixed(2) : 0;
    document.getElementById('avg-score').innerText = avg;
}

// D. Thêm / Sửa Sinh Viên (Bắt sự kiện Submit Form) [cite: 68, 70, 80, 81, 82]
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn form tải lại trang

    // Lấy dữ liệu từ input
    const sv = {
        id: document.getElementById('sv-id').value,
        name: document.getElementById('sv-name').value,
        dob: document.getElementById('sv-dob').value,
        classId: document.getElementById('sv-class').value,
        score: document.getElementById('sv-score').value,
        email: document.getElementById('sv-email').value
    };

    const editIndex = parseInt(editIndexInput.value);

    // Kiểm tra trạng thái: -1 là Thêm mới, khác -1 là Đang sửa [cite: 107]
    if (editIndex === -1) {
        students.push(sv); // Thêm object vào mảng [cite: 83]
        showNotification('Thêm sinh viên thành công!');
    } else {
        students[editIndex] = sv; // Cập nhật đè lên vị trí cũ [cite: 93]
        showNotification('Cập nhật sinh viên thành công!');
    }

    // Lưu lại localStorage và render giao diện [cite: 84, 85, 94, 95]
    localStorage.setItem('students', JSON.stringify(students));
    modalOverlay.classList.add('hidden');
    renderStudents();
});

// E. Sửa Sinh Viên (Đưa dữ liệu lên form) [cite: 88, 89, 90, 91, 92]
function editStudent(index) {
    const sv = students[index]; // Lấy đúng object sinh viên từ mảng

    // Nạp dữ liệu cũ vào các ô input
    document.getElementById('sv-id').value = sv.id;
    document.getElementById('sv-name').value = sv.name;
    document.getElementById('sv-dob').value = sv.dob;
    document.getElementById('sv-class').value = sv.classId;
    document.getElementById('sv-score').value = sv.score;
    document.getElementById('sv-email').value = sv.email;

    // Chuyển form sang trạng thái Cập nhật
    editIndexInput.value = index; 
    document.getElementById('modal-title').innerText = 'Sửa Sinh Viên';
    modalOverlay.classList.remove('hidden');
}

// F. Xóa Sinh Viên [cite: 97, 98, 99, 100]
function deleteStudent(index) {
    if (confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
        students.splice(index, 1); // Xóa 1 phần tử tại vị trí index
        localStorage.setItem('students', JSON.stringify(students)); // Lưu thay đổi [cite: 101]
        renderStudents(); // Render lại [cite: 102]
        showNotification('Đã xóa sinh viên thành công!');
    }
}

// G. Hàm Hiển thị thông báo [cite: 54, 63, 258]
function showNotification(msg) {
    notification.innerText = msg;
    notification.classList.remove('hidden');
    // Tự động ẩn thông báo sau 3 giây
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// H. Chạy hàm hiển thị dữ liệu ngay khi trang vừa tải xong
renderStudents();