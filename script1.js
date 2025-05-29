let scrollIndex = 0;

function scrollCarousel(direction) {
  const track = document.getElementById('carousel');
  const cardWidth = 270; // 图片宽度 + margin
  scrollIndex += direction;
  const maxIndex = Math.ceil(track.children.length - (window.innerWidth / cardWidth));

  if (scrollIndex < 0) scrollIndex = 0;
  if (scrollIndex > maxIndex) scrollIndex = maxIndex;

  track.style.transform = `translateX(${-scrollIndex * cardWidth}px)`;
}

// 自动轮播（可选）
setInterval(() => {
  scrollCarousel(1);
}, 5000);
