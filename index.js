const sideMenu = document.querySelector('.side-menu');

const toggleShow = () => {
  sideMenu.classList.toggle('show');
  document.body.classList.toggle('show');
};

document.addEventListener('click', e => {
  if (e.target !== sideMenu && sideMenu.classList.contains('show')) {
    toggleShow();
  } else if (e.target.matches('[data-hamburger]')) {
    toggleShow();
  }
});
