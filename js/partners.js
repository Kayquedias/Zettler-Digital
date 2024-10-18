
document.addEventListener("DOMContentLoaded", function () {
  // 3D animation for partners brands
  const targetElements = gsap.utils.toArray('.partners-grid-block.is-logo')
  
  targetElements.forEach((element, index) => {
    console.log({element}, element.offsetTop)

    const animationEnd = index > 5 ? element.offsetTop : 0

    gsap.fromTo(element, {
      filter: 'blur(4px)',
      z: 600
    }, {
      filter: 'blur(0px)',
      z: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=100px`,
        end: `center center+=${animationEnd}px`,
        scrub: true,
      }
    });
  });
})