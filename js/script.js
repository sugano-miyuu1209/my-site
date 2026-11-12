'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('reload script loaded');

  const reloadLinks = document.querySelectorAll('.js-reload');

  reloadLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.reload();
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {

  const scrollAreas = document.querySelectorAll('.image-scroll');

  scrollAreas.forEach(area => {
    const track = area.querySelector('.scroll-track');
    if (!track) return;

    // ① 中身を複製（ループ用）
    track.innerHTML += track.innerHTML;

    let scrollSpeed = 0.5; // ← 速さ（0.3〜1で調整）
    let scrollPos = 0;

    function loopScroll() {
      scrollPos += scrollSpeed;
      area.scrollLeft = scrollPos;

      // ② 半分まで行ったら戻す
      if (scrollPos >= track.scrollWidth / 2) {
        scrollPos = 0;
        area.scrollLeft = 0;
      }
    }
 loopScroll();
  });
     area.classList.add('is-looping');



});

