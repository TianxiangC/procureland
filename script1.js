const carousels = ['carousel1', 'carousel2', 'carousel3', 'carousel4'];

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

// 只对第一页的carousel1自动滚动
setInterval(() => {
  scrollCarousel('carousel1', 1);
}, 5000);


// Lightbox放大相关，保持不变
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
