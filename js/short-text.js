// function truncateText(selector, maxLength) {
//     var element = document.querySelector(selector);
//     var text = element.textContent || element.innerText;

//     // ตรวจสอบความยาวของข้อความและตัดให้เหลือเท่าที่กำหนด
//     if (text.length > maxLength) {
//         element.textContent = text.substring(0, maxLength) + '...';
//     }
// }

// // กำหนดให้ข้อความที่จะแสดงในหน้าแรกมีความยาวสูงสุด 150 ตัวอักษร
// truncateText('#short-text', 100);
// truncateText('#short-text-th', 100);

function truncateText(selector, maxLength) {
    // เลือกทุกองค์ประกอบที่มี class ตาม selector
    var elements = document.querySelectorAll(selector);

    elements.forEach(function (element) {
        var text = element.textContent || element.innerText;

        // ตรวจสอบความยาวของข้อความและตัดให้เหลือเท่าที่กำหนด
        if (text.length > maxLength) {
            element.textContent = text.substring(0, maxLength) + '...';
        }
    });
}

// กำหนดให้ข้อความที่จะแสดงในหน้าแรกมีความยาวสูงสุด 100 ตัวอักษร
truncateText('.short-text', 100);

// กำหนดให้ข้อความที่จะแสดงในหน้าแรกมีความยาวสูงสุด 3 บรรทัด
// truncateText('.short-text', 3);