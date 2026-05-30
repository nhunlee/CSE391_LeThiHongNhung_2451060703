function formatMoney(amount) {
    return amount.toLocaleString('vi-VN') + "đ";
}

function formatK(amount) {
    return (amount / 1000) + "k";
}

function calculateBill(items, dayOfWeek, applyTip) {
    let subtotal = 0;
    
    let output = "╔══════════════════════════════════════╗\n";
    output += "║" + "HÓA ĐƠN NHÀ HÀNG".padStart(26, ' ').padEnd(38, ' ') + "║\n";
    output += "╠══════════════════════════════════════╣\n";
    
    items.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        // Căn lề từng cột cho đẹp
        let stt = `${index + 1}.`.padEnd(3, ' ');
        let name = item.name.padEnd(11, ' ');
        let qty = `x${item.quantity}`.padEnd(5, ' ');
        let price = `@${formatK(item.price)}`.padEnd(6, ' ');
        let total = `= ${formatK(itemTotal)}`.padEnd(8, ' ');
        
        let rowStr = ` ${stt} ${name} ${qty} ${price} ${total}`;
        output += `║${rowStr.padEnd(38, ' ')}║\n`;
    });
    
    output += "╠══════════════════════════════════════╣\n";
    
    let discountPercent = 0;
    if (subtotal > 1000000) {
        discountPercent += 15;
    } else if (subtotal > 500000) {
        discountPercent += 10;
    }
    
    // Giảm thêm 5% nếu là thứ 4
    if (dayOfWeek === "Wednesday") {
        discountPercent += 5;
    }
    
    let discountAmount = subtotal * (discountPercent / 100);
    let afterDiscount = subtotal - discountAmount; // Giá sau khi đã trừ khuyến mãi
    
    let vatAmount = afterDiscount * 0.08; 
    
    let tipAmount = applyTip ? (subtotal * 0.05) : 0; 
    
    let finalTotal = afterDiscount + vatAmount + tipAmount;
    
    const createSummaryRow = (label, value) => {
        return `║ ${label.padEnd(21, ' ')} ${value.padStart(15, ' ')} ║\n`;
    };
    
    output += createSummaryRow("Tổng cộng:", formatMoney(subtotal));
    output += createSummaryRow(`Giảm giá (${discountPercent}%):`, formatMoney(discountAmount));
    output += createSummaryRow("VAT (8%):", formatMoney(vatAmount));
    output += createSummaryRow(`Tip (${applyTip ? 5 : 0}%):`, formatMoney(tipAmount));
    
    output += "╠══════════════════════════════════════╣\n";
    output += createSummaryRow("THANH TOÁN:", formatMoney(finalTotal));
    output += "╚══════════════════════════════════════╝";
    
    console.log(output);
}

const order = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

calculateBill(order, "Monday", true);