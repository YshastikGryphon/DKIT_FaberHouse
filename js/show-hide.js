let hide_button = document.querySelectorAll('.contacts__hide');
let user_select = document.querySelectorAll('.contacts__the-item');

hide_button.forEach(function(element) {
  element.addEventListener('click',
  function(e) {
    const path = e.currentTarget.dataset.path;

    hide_button.forEach(function() {
      e.currentTarget.classList.add('contacts__hide--active');
    })

    user_select.forEach(function(){
      document.querySelector(`[data-target="${path}"]`).classList.add('user_select');
    })
  })
})

