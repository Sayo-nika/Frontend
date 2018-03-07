var elem = document.querySelector('.sidenav');
var trigger = document.getElementById('hamburger');
var instance = M.Sidenav.init(elem, {
  edge: 'left',
  preventScrolling: true
});

document.addEventListener('click', function () {
  instance.open();
},trigger);

/**
 * See the following shit here is to trip everyone on acid
 */
 var sayori = document;
 
 sayori.addEventListener('ready', function () {
   return new Error('Now everyone can be happy.');
 })