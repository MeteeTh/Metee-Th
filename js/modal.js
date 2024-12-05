document.addEventListener('DOMContentLoaded', function () {
    const videoModals = ['danceModal', 'kickoff2023Modal', 'ilissModal', 'italk6Modal', 'videoModal', 'mobilibModal'];
    const carousels = ['carouselvideoeditor1', 'carouselvideoeditor2', 'carouselvideoeditor3', 'carouselvideoeditor4', 'carouselvideoeditor5', 'carouseldance2', 'carouseldance3', 'carouseldance5'];

    // หยุดการเล่นวิดีโอเมื่อปิด modal
    videoModals.forEach(modalId => {
        const modal = document.getElementById(modalId);

        if (modal) {
            $(modal).on('hidden.bs.modal', function () {
                // หยุด video
                const videos = modal.querySelectorAll('video');
                videos.forEach(video => {
                    video.pause();
                    video.currentTime = 0;
                });

                // รีเฟรช YouTube iframe
                const iframes = modal.querySelectorAll('iframe');
                iframes.forEach(iframe => {
                    const src = iframe.src;
                    if (src.includes("youtube.com")) {  // เช็คว่าเป็น YouTube
                        iframe.src = '';
                        iframe.src = src;
                    } else if (src.includes("drive.google.com")) {  // เช็คว่าเป็น Google Drive
                        iframe.src = '';
                        iframe.src = src;
                    }
                });
            });
        }
    });

    // หยุดการเล่นวิดีโอเมื่อเปลี่ยนสไลด์ใน carousels
    carousels.forEach(carouselId => {
        const carousel = $('#' + carouselId);
        if (carousel.length) {
            carousel.on('slide.bs.carousel', function () {
                // หยุด video
                $(this).find('video').each(function () {
                    this.pause();
                });

                // รีเฟรช YouTube iframe
                $(this).find('iframe').each(function () {
                    const src = $(this).attr('src');
                    if (src.includes("youtube.com")) {  // เช็คว่าเป็น YouTube
                        $(this).attr('src', '');
                        $(this).attr('src', src);
                    } else if (src.includes("drive.google.com")) {  // เช็คว่าเป็น Google Drive
                        $(this).attr('src', '');
                        $(this).attr('src', src);
                    }
                });
            });
        }
    });
});
