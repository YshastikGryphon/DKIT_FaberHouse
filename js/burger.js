let nav_button = document.querySelector('.navigator-mobile-button');
let nav_bar = document.querySelector('.navigator__list-mobile');

nav_button.addEventListener('click',

  function() {
    nav_button.classList.toggle('navigator-mobile-button--close');

    nav_bar.classList.toggle('navigator__list-mobile--active');
  }
)
