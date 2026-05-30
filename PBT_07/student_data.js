const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;
let maxAvg = -1, minAvg = 11;
let studentMax = null, studentMin = null;
let totalMath = 0, totalPhysics = 0, totalCS = 0;
let totalScoreM = 0, countM = 0;
let totalScoreF = 0, countF = 0;

for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let avg = student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
    student.avg = Number(avg.toFixed(1)); 

    if (student.avg >= 8.0) {
        student.rank = "Giỏi";
        countGioi++;
    } else if (student.avg >= 6.5) {
        student.rank = "Khá";
        countKha++;
    } else if (student.avg >= 5.0) {
        student.rank = "Trung bình";
        countTB++;
    } else {
        student.rank = "Yếu";
        countYeu++;
    }

    if (student.avg > maxAvg) {
        maxAvg = student.avg;
        studentMax = student;
    }
    if (student.avg < minAvg) {
        minAvg = student.avg;
        studentMin = student;
    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;

    if (student.gender === "M") {
        totalScoreM += student.avg;
        countM++;
    } else if (student.gender === "F") {
        totalScoreF += student.avg;
        countF++;
    }
}

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");
for (let i = 0; i < students.length; i++) {
    let s = students[i];
    let stt = String(i + 1).padEnd(3, " ");
    let name = s.name.padEnd(6, " ");
    let avg = String(s.avg.toFixed(1)).padEnd(4, " ");
    let rank = s.rank.padEnd(11, " ");
    
    console.log(`| ${stt} | ${name} | ${avg} | ${rank} |`);
}

console.log("\n--- THỐNG KÊ CHI TIẾT ---");

console.log(`4. Số lượng SV mỗi xếp loại:`);
console.log(`   - Giỏi: ${countGioi} | Khá: ${countKha} | Trung bình: ${countTB} | Yếu: ${countYeu}`);

console.log(`\n5. SV có điểm cao/thấp nhất:`);
console.log(`   - Cao nhất: ${studentMax.name} (${studentMax.avg} điểm)`);
console.log(`   - Thấp nhất: ${studentMin.name} (${studentMin.avg} điểm)`);

let n = students.length;
console.log(`\n6. Điểm TB toàn lớp theo môn:`);
console.log(`   - Toán: ${(totalMath / n).toFixed(1)}`);
console.log(`   - Vật lý: ${(totalPhysics / n).toFixed(1)}`);
console.log(`   - CS: ${(totalCS / n).toFixed(1)}`);

let avgM = countM > 0 ? (totalScoreM / countM).toFixed(1) : 0;
let avgF = countF > 0 ? (totalScoreF / countF).toFixed(1) : 0;
console.log(`\n7. Bonus - Điểm TB theo giới tính:`);
console.log(`   - Nam (M): ${avgM}`);
console.log(`   - Nữ (F): ${avgF}`);