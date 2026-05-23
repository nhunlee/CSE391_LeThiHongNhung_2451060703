// ================= MẢNG DỮ LIỆU & LẤY TỪ LOCALSTORAGE =================
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// ================= PHÂN TÍCH THÀNH PHẦN DOM =================
const btnOpenForm = document.getElementById('btn-open-form');
const btnCloseForm = document.getElementById('btn-close-form');
const modalOverlay = document.getElementById('modal-overlay');
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const notification = document.getElementById('notification');
const modalTitle = document.getElementById('modal-title');

// Các trường input
const inputId = document.getElementById('task-id');
const inputTitle = document.getElementById('task-title');
const inputDesc = document.getElementById('task-desc');
const inputDate = document.getElementById('task-date');
const inputPriority = document.getElementById('task-priority');

// ================= CÁC HÀM XỬ LÝ TÁCH BIỆT =================

// 1. Lưu dữ liệu
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 2. Cập nhật thống kê
function updateTaskSummary() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('stat-total').textContent = `Tổng: ${total}`;
    document.getElementById('stat-completed').textContent = `Đã xong: ${completed}`;
    document.getElementById('stat-pending').textContent = `Chưa xong: ${pending}`;
}

// 3. Hiển thị thông báo
function showMessage(msg, type = 'success') {
    notification.textContent = msg;
    notification.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 2500);
}

// 4. Render danh sách
function renderTasks() {
    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="empty-msg">Chưa có công việc nào. Bấm "Thêm công việc" để bắt đầu!</p>';
    } else {
        taskList.innerHTML = tasks.map(task => `
            <div class="task-card ${task.completed ? 'completed' : ''}">
                <div class="task-info">
                    <h3>${task.title}</h3>
                    <p>${task.desc || 'Không có mô tả'}</p>
                    <p><small>Hạn: ${task.date} | Ưu tiên: <strong>${task.priority}</strong></small></p>
                </div>
                <div class="task-actions">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleStatus(${task.id})">
                    <button class="btn-warning" onclick="editTask(${task.id})">Sửa</button>
                    <button class="btn-danger" onclick="deleteTask(${task.id})">Xóa</button>
                </div>
            </div>
        `).join('');
    }
    updateTaskSummary();
}

// ================= LUỒNG XỬ LÝ CRUD & SỰ KIỆN =================

// Đóng/Mở form
function openForm(isEdit = false) {
    modalOverlay.classList.remove('hidden');
    modalTitle.textContent = isEdit ? "Sửa công việc" : "Thêm công việc mới";
    if (!isEdit) taskForm.reset(); // Xóa trắng form nếu là thêm mới
}

function closeForm() {
    modalOverlay.classList.add('hidden');
    taskForm.reset();
    inputId.value = ''; // Clear ID
}

btnOpenForm.addEventListener('click', () => openForm(false));
btnCloseForm.addEventListener('click', closeForm);

// Submit Form (Thêm mới hoặc Cập nhật)
taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn load lại trang

    const taskData = {
        id: inputId.value ? parseInt(inputId.value) : Date.now(), // Tạo ID mới nếu chưa có
        title: inputTitle.value.trim(),
        desc: inputDesc.value.trim(),
        date: inputDate.value,
        priority: inputPriority.value,
        completed: false
    };

    if (inputId.value) {
        // Cập nhật công việc hiện tại
        const index = tasks.findIndex(t => t.id === parseInt(inputId.value));
        taskData.completed = tasks[index].completed; // Giữ nguyên trạng thái hoàn thành
        tasks[index] = taskData;
        showMessage('Cập nhật công việc thành công!');
    } else {
        // Thêm mới
        tasks.push(taskData);
        showMessage('Thêm công việc thành công!');
    }

    saveTasks();
    renderTasks();
    closeForm();
});

// Sửa công việc
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    // Đổ dữ liệu cũ lên form
    inputId.value = task.id;
    inputTitle.value = task.title;
    inputDesc.value = task.desc;
    inputDate.value = task.date;
    inputPriority.value = task.priority;

    openForm(true);
}

// Xóa công việc có xác nhận
function deleteTask(id) {
    if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
        showMessage('Đã xóa công việc.', 'danger');
    }
}

// Đổi trạng thái hoàn thành
function toggleStatus(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks(); // Render lại để cập nhật class CSS gạch ngang và thống kê
    }
}

// ================= KHỞI TẠO ỨNG DỤNG =================
renderTasks(); // Chạy ngay khi tải trang