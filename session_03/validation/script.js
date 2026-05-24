const form = document.getElementById('studentForm');
const studentId = document.getElementById('studentId');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const score = document.getElementById('score');
const enrollDate = document.getElementById('enrollDate');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const studentList = document.getElementById('studentList');

let students = [];

//Hiển thị lỗi và Xóa lỗi
function showError(inputElement, errorMessage) {
    // Tìm thẻ span lỗi tương ứng dựa trên id của input
    const errorSpan = document.getElementById(inputElement.id + 'Error');
    errorSpan.innerText = errorMessage;
    inputElement.classList.add('error');
}

function clearError(inputElement) {
    const errorSpan = document.getElementById(inputElement.id + 'Error');
    errorSpan.innerText = '';
    inputElement.classList.remove('error');
}

// Hàm clear toàn bộ form sau khi submit thành công
function resetForm() {
    form.reset();
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => clearError(input));
}

function checkRequired(inputs) {
    let isValid = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, 'Trường này không được để trống!');
            isValid = false;
        } else {
            clearError(input);
        }
    });
    return isValid;
}

function checkLength(input, minLength, exactLength = null) {
    const value = input.value.trim();
    if (exactLength !== null && value.length !== exactLength) {
        showError(input, `Phải nhập đúng ${exactLength} ký tự.`);
        return false;
    }
    if (value.length < minLength) {
        showError(input, `Phải nhập tối thiểu ${minLength} ký tự.`);
        return false;
    }
    return true;
}

function checkEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(input.value.trim())) {
        return true;
    }
    showError(input, 'Email không đúng định dạng.');
    return false;
}

function checkScoreRange(input, min, max) {
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        showError(input, 'Điểm phải là một số hợp lệ.');
        return false;
    }
    if (value <= min || value >= max) {
        showError(input, `Điểm phải nằm trong khoảng: ${min} < x < ${max}.`);
        return false;
    }
    return true;
}

function checkDateAfter(input, targetDateStr) {
    const inputDate = new Date(input.value);
    const targetDate = new Date(targetDateStr);
    
    if (inputDate <= targetDate) {
        showError(input, `Ngày phải lớn hơn ${targetDateStr}.`);
        return false;
    }
    return true;
}

function checkPasswordsMatch(passInput, confirmPassInput) {
    if (passInput.value !== confirmPassInput.value) {
        showError(confirmPassInput, 'Mật khẩu xác nhận không trùng khớp.');
        return false;
    }
    return true;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isFormValid = true;
// check đầy đủ
    const requiredInputs = [studentId, fullName, email, score, enrollDate, password, confirmPassword];
    const isRequiredValid = checkRequired(requiredInputs);

    // check yêu cầu
    if (isRequiredValid) {
        const isIdValid = checkLength(studentId, 0, 9); // Phải đúng 9 ký tự
        const isNameValid = checkLength(fullName, 1); // Tối thiểu 10 ký tự
        const isEmailValid = checkEmail(email);
        const isScoreValid = checkScoreRange(score, -1, 11); // 4 < x < 7
        const isDateValid = checkDateAfter(enrollDate, '2024-01-01'); // Lớn hơn ngày 01/01/2024
        const isMatch = checkPasswordsMatch(password, confirmPassword);

        // Gom kết quả lại
        isFormValid = isIdValid && isNameValid && isEmailValid && isScoreValid && isDateValid && isMatch;
    } else {
        isFormValid = false;
    }

    if (isFormValid) {
        const newStudent = {
            id: studentId.value.trim(),
            name: fullName.value.trim(),
            email: email.value.trim(),
            score: parseFloat(score.value)
        };
        
        students.push(newStudent);
        renderStudents();
        
        alert("Thêm sinh viên thành công!"); 
        resetForm(); 
    }
});

function renderStudents() {
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.score}</td>
            <td>
                <button onclick="deleteStudent(${index})">Xóa</button>
            </td>
        `;
        
        studentList.appendChild(tr);
    });
}

function deleteStudent(index) {
    // Cảnh báo xác nhận trước khi xóa
    const isConfirm = confirm("Bạn có chắc chắn muốn xóa sinh viên này không?");
    
    if (isConfirm) {
        students.splice(index, 1); // Xóa phần tử khỏi mảng
        renderStudents(); // Gọi lại hàm render để cập nhật bảng ngay lập tức
    }
}