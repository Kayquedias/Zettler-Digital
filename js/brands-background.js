document.addEventListener('DOMContentLoaded', function() {
  const splideConfig = {
    type: 'loop',
    perPage: 1,
    speed: 7000,
    easing: '',
    autoWidth: true,
    autoPlay: true,
    interval: 0,
    resetProgress: false
  }

  const splide = new Splide('#first', splideConfig);
  splide.mount(window.splide.Extensions);

  const reverseSplide = new Splide('#second', {
    ...splideConfig,
    direction: 'rtl'
  });
  reverseSplide.mount(window.splide.Extensions);

  const splide2 = new Splide('#third', splideConfig);
  splide2.mount(window.splide.Extensions);

  const reverseSplide2 = new Splide('#fourth', {
    ...splideConfig,
    direction: 'rtl'
  });
  reverseSplide2.mount(window.splide.Extensions);
})