document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const images = Array.from(track.children);
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  const imgWidth = images[0].getBoundingClientRect().width + 15; // 图片宽度 + 间距

  let currentIndex = 0;

  function updatePosition() {
    track.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 3; // 显示最后3张图片时停住（假设可视区3张）
    }
    updatePosition();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > images.length - 3) {
      currentIndex = 0;
    }
    updatePosition();
  });

  // 自动轮播（每4秒切换）
  setInterval(() => {
    currentIndex++;
    if (currentIndex > images.length - 3) {
      currentIndex = 0;
    }
    updatePosition();
  }, 4000);
});
