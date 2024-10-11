document.addEventListener('DOMContentLoaded', function() {
  const width = window.innerWidth;
  let perPage = 1;

  switch (true) {
    case (width > 400):
      perPage = 2;
      break;
    case (width > 700):
      perPage = 3;
      break;
    default:
      perPage = 1;
  }

  const splide = new Splide('.splide', {
    type: 'loop',
    perPage,
    autoScroll: {
      speed: 1,
    },
  });
  splide.mount(window.splide.Extensions);

  const reverseSplide = new Splide('.splide-reverse', {
    type: 'loop',
    perPage,
    direction: 'rtl',
    autoScroll: {
      speed: 1,
    },
  });
  reverseSplide.mount(window.splide.Extensions);
})