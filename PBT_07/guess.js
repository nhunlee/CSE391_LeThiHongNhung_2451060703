// ==========================================
// FILE: guess.js
// BÀI B3 - Mini Game: Đoán Số
// ==========================================

// 1. Máy random 1 số từ 1-100
const targetNumber = Math.floor(Math.random() * 100) + 1;
const maxTries = 7;
let attempts = 0;
let guessedNumbers = [];

alert("Chào mừng đến với Game Đoán Số!\nBạn có 7 lần đoán để tìm ra số bí mật từ 1 đến 100.");

// Vòng lặp chính của game
while (attempts < maxTries) {
    // 2. User nhập số
    let input = prompt(`Lần đoán thứ ${attempts + 1}/${maxTries}.\nNhập một số từ 1 đến 100 (hoặc nhấn Cancel để thoát):`);
    
    // Xử lý nếu user nhấn nút Cancel
    if (input === null) {
        alert("Bạn đã thoát game.");
        break;
    }

    let guess = parseInt(input, 10);

    // Yêu cầu thêm: Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("⚠️ Lỗi: Vui lòng nhập một số nguyên hợp lệ từ 1 đến 100!");
        continue; // Bỏ qua phần dưới, quay lại đầu vòng lặp (không tính lượt này)
    }

    // Yêu cầu thêm: Kiểm tra số đã đoán chưa
    if (guessedNumbers.includes(guess)) {
        alert(`⚠️ Bạn đã đoán số ${guess} này rồi! Hãy chọn số khác.`);
        continue; // Không tính lượt này
    }

    // Input hợp lệ -> Lưu lại lịch sử và tăng số lần đoán
    guessedNumbers.push(guess);
    attempts++;

    // Kiểm tra kết quả
    if (guess === targetNumber) {
        // 4. Đoán đúng
        alert(`🎉 ĐÚNG RỒI! Bạn đoán đúng số ${targetNumber} sau ${attempts} lần!`);
        break; // Kết thúc game
    } else if (guess < targetNumber) {
        // Trả lời "Cao hơn" nếu số user đoán < số đích (Tức là user cần đoán số cao hơn)
        if (attempts < maxTries) alert(`🔼 Cao hơn! Số bí mật lớn hơn ${guess}`);
    } else {
        // Trả lời "Thấp hơn" 
        if (attempts < maxTries) alert(`🔽 Thấp hơn! Số bí mật nhỏ hơn ${guess}`);
    }

    // 5. Giới hạn 7 lần đoán - Hết lượt
    if (attempts === maxTries && guess !== targetNumber) {
        alert(`💥 GAME OVER! Bạn đã hết ${maxTries} lượt đoán.\nSố bí mật chính xác là: ${targetNumber}`);
    }
}