// JavaScript
function viewImageFullScreen(element) {
    // ดึง URL ของรูปภาพจาก background-image
    const imageUrl = window.getComputedStyle(element).backgroundImage.slice(5, -2);

    // สร้าง div สำหรับแสดงภาพเต็มจอ
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen-img');
    fullscreenDiv.style.backgroundImage = `url(${imageUrl})`;

    // เมื่อคลิกที่ภาพเต็มหน้าจอจะปิด
    fullscreenDiv.onclick = function () {
        document.body.removeChild(fullscreenDiv);
    };

    // เพิ่ม div ที่สร้างขึ้นไปใน body
    document.body.appendChild(fullscreenDiv);
}
