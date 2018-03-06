var elem = document.getElementById('tol');
var instance = M.Tooltip.init(elem, {
  html: 'List your mod!',
  position: 'top'
});

document.addEventListener("hover", function(){
   instance.open();
}); 
