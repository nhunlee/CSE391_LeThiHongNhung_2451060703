// js/main.js
document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Khi phần tử xuất hiện trên màn hình
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth; // Kích hoạt animation chạy thanh %
                
                // Sau khi chạy xong thì ngừng theo dõi để không bị chạy lại liên tục
                observer.unobserve(bar); 
            }
        });
    }, { threshold: 0.5 }); // Kích hoạt khi cuộn qua 50% phần tử

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});