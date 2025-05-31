// 轮播ID数组，多个轮播时使用
const carousels = ['carousel1', 'carousel2', 'carousel3', 'carousel4'];

// 记录每个轮播的滚动索引
const scrollIndexes = {};

// 初始化滚动索引为0
carousels.forEach(id => {
  scrollIndexes[id] = 0;
});

function getCardWidth(id) {
  const track = document.getElementById(id);
  if (!track || track.children.length === 0) return 270; // 默认值

  const firstCard = track.children[0];
  const style = window.getComputedStyle(firstCard);
  const width = firstCard.offsetWidth;
  const marginRight = parseInt(style.marginRight) || 0;

  return width + marginRight;
}

function scrollCarousel(id, direction) {
  const track = document.getElementById(id);
  if (!track) return;

  const cardWidth = getCardWidth(id);
  const visibleCards = Math.floor(track.parentElement.offsetWidth / cardWidth);
  const maxIndex = Math.max(track.children.length - visibleCards, 0);

  scrollIndexes[id] += direction;
  if (scrollIndexes[id] < 0) scrollIndexes[id] = 0;
  if (scrollIndexes[id] > maxIndex) scrollIndexes[id] = maxIndex;

  track.style.transform = `translateX(${-scrollIndexes[id] * cardWidth}px)`;
}

// 自动轮播已禁用
// let autoScrollIndex = 0;
// setInterval(() => {
//   const id = carousels[0]; // 只自动滚动第一个轮播
//   scrollCarousel(id, 1);
// }, 5000);
