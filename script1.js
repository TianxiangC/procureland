// 控制多个轮播滚动状态
const carousels = ['carousel1', 'carousel2', 'carousel3', 'carousel4'];

// 初始化每个轮播的scrollIndex
const scrollIndexes = {
  carousel1: 0,
  carousel2: 0,
  carousel3: 0,
  carousel4: 0,
};

function scrollCarousel(id, direction) {
  const track = document.getElementById(id);
  const cardWidth = 270;
  const maxIndex = Math.ceil(track.children.length - (window.innerWidth / cardWidth));

  scrollIndexes[id] += direction;
  if (scrollIndexes[id] < 0) scrollIndexes[id] = 0;
  if (scrollIndexes[id] > maxIndex) scrollIndexes[id] = maxIndex;

  track.style.transform = `translateX(${-scrollIndexes[id] * cardWidth}px)`;
}

// 自动轮播，5秒切换一次，每个轮播区轮流移动
let autoScrollIndex = 0;
setInterval(() => {
  const id = carousels[autoScrollIndex % carousels.length];
  scrollCarousel(id, 1);
  autoScrollIndex++;
}, 5000);


// Lightbox放大相关
function openLightbox(img) {
  let overlay = document.getElementById('lightboxOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'lightboxOverlay';
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      overlay.innerHTML = ''; // 清空图片
    });
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = '';
  const largeImg = document.createElement('img');
  largeImg.src = img.src;
  overlay.appendChild(largeImg);
  overlay.style.display = 'flex';
}
