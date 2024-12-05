let currentLanguage = 'en'; // กำหนดให้ภาษาเริ่มต้นเป็นภาษาอังกฤษ

function switchLanguage() {
    console.log("Before switching language, currentLanguage: ", currentLanguage);

    if (currentLanguage === 'en') {
        // ซ่อนเนื้อหาภาษาอังกฤษและแสดงเนื้อหาภาษาไทย สำหรับทั้งหมดในหน้า
        let englishContent = document.querySelectorAll('.lang-en');
        let thaiContent = document.querySelectorAll('.lang-th');

        englishContent.forEach(function (item) {
            item.style.display = 'none';
        });
        thaiContent.forEach(function (item) {
            item.style.display = 'block';
        });

        currentLanguage = 'th'; // เปลี่ยนภาษาเป็นภาษาไทย
    } else {
        // ซ่อนเนื้อหาภาษาไทยและแสดงเนื้อหาภาษาอังกฤษ สำหรับทั้งหมดในหน้า
        let englishContent = document.querySelectorAll('.lang-en');
        let thaiContent = document.querySelectorAll('.lang-th');

        englishContent.forEach(function (item) {
            item.style.display = 'block';
        });
        thaiContent.forEach(function (item) {
            item.style.display = 'none';
        });

        currentLanguage = 'en'; // เปลี่ยนภาษาเป็นภาษาอังกฤษ
    }
    console.log("After switching language, currentLanguage: ", currentLanguage);

    // สลับไอคอนธง
    let languageIcon = document.querySelector("#language-toggle .language-icon");
    if (languageIcon.src.includes("images/favicon/thai.png")) {
        languageIcon.src = "/images/favicon/united-states.png";
    } else {
        languageIcon.src = "/images/favicon/thai.png";
    }
}




