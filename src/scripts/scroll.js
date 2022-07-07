// menu
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  // для экранов более 900
  if (window.innerWidth > 900) {
    document.querySelectorAll('.section').forEach((el, i) => {

      if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
        document.querySelectorAll('.nav a').forEach((el) => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        });

        console.log(i);

        document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
      }
    });
  }
});
