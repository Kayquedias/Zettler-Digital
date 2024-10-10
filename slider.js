const width = window.innerWidth

const prevButton = document.querySelector(width <= 768 ? '.carousel-prev' : '.carousel-next');
const nextButton = document.querySelector(width <= 768 ? '.carousel-next' : '.carousel-prev');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card-slide');
const slideStarContainer = document.querySelector('.slide-star');

let currentIndex = 0;
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth + 24;

function generateStars() {
  for (let i = 0; i < totalCards; i++) {
    const star = document.createElement('svg');
    star.setAttribute('width', '14');
    star.setAttribute('height', '15');
    star.setAttribute('viewBox', '0 0 14 15');
    star.setAttribute('fill', 'none');
    star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    star.innerHTML = `
      <path d="M7.0099 2.64339L14 0.583984L11.9604 7.59388L14 14.584L7.0099 12.5444L0 14.584L2.05941 7.59388L0 0.583984L7.0099 2.64339Z" fill="#191A23"/>
    `;
    slideStarContainer.appendChild(star);
  }
}

function updateStars() {
  const stars = slideStarContainer.querySelectorAll('svg');
  stars.forEach((star, index) => {
    if (index === currentIndex) {
      star.querySelector('path').setAttribute('fill', '#0000FF');
    } else {
      star.querySelector('path').setAttribute('fill', '#191A23');
    }
  });
}

generateStars();
updateStars();

function updateSlidePosition() {
  cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  updateStars();
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});

window.addEventListener('resize', () => {
  const updatedCardWidth = cards[0].offsetWidth + 24;
  cardContainer.style.transform = `translateX(-${currentIndex * updatedCardWidth}px)`;
});
