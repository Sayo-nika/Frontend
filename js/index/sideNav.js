var elem = document.querySelector('.sidenav');
var trigger = document.getElementById('hamburger');
var instance = M.Sidenav.init(elem, {
  edge: 'left',
  preventScrolling: true
});

document.addEventListener('click', function () {
  instance.open();
},trigger);