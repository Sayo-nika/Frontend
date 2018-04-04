M.Tooltip.init(document.querySelector('.tooltipped'));
M.Sidenav.init(document.querySelector('.sidenav'));
M.Modal.init(document.querySelector('.modal'));
M.Dropdown.init(document.querySelector('.dropdown-trigger'));
document.querySelectorAll('.carousel').forEach(el => M.Carousel.init(el, {indicators: true, dist: 0}));