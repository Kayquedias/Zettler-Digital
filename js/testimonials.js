
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 26,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.testimonial-controls .next',
    prevEl: '.testimonial-controls .prev'
  },
  breakpoints: {
    1280: {
      slidesPerView: 3
    }
  }
})


// RATING - STARS
const ratingContainers = document.querySelectorAll('.rating')

ratingContainers.forEach((item) => {
  const stars = new Array(Number(item.dataset.ratingStars)).fill(undefined)

  stars.forEach(() => {
    const img = document.createElement('img')
    img.src = './assets/star-rate.svg'

    item.appendChild(img)
  })
})
