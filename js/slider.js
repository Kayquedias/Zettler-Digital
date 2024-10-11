const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card-slide');
const slideStarContainer = document.querySelector('.slide-star');

let gap = 48

if (window.innerWidth <= 768) {
  gap = 24
}

let currentIndex = 0;
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth + gap;

function updateSlidePosition() {
  cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
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
  if (window.innerWidth <= 768) {
    gap = 24
  }

  const updatedCardWidth = cards[0].offsetWidth + gap;
  cardContainer.style.transform = `translateX(-${currentIndex * updatedCardWidth}px)`;
});
