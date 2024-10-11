const width = window.innerWidth

const prevButton = document.querySelector(width <= 768 ? '.carousel-prev' : '.carousel-next');
const nextButton = document.querySelector(width <= 768 ? '.carousel-next' : '.carousel-prev');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card-slide');
const slideStarContainer = document.querySelector('.slide-star');

let currentIndex = 0;
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth + 24;

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
