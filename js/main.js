var toggler = document.querySelector('.sitenav__btn');
var elSiteHeader = document.querySelector('.site-header');

toggler.addEventListener('click', function(){
  elSiteHeader.classList.toggle('site-header--open');
});

toggler.addEventListener('click', function() {
  toggler.classList.toggle('sitenav__btn--close');
});