const button = document.querySelectorAll('.btn'),
  filterDiv = document.querySelectorAll('.filterDiv'),
  wallpapers = document.querySelectorAll('.wallpaper'),
  bussiness = document.querySelectorAll('.bussiness'),
  stationerys = document.querySelectorAll('.stationery'),
  websites = document.querySelectorAll('.website'),
  mobiles = document.querySelectorAll('.mobile');

button.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    removeactive();
    btn.classList.add('active');
    let dataFilter = btn.getAttribute('data-filter');
     
    filterDiv.forEach(filter => {
      filter.classList.remove('displaytrue');
      filter.classList.add('displaynone');
      // condition satisfied then following class will be added and removed 
      if (filter.getAttribute('data-item') == dataFilter || dataFilter == 'all') {

        filter.classList.add('displaytrue');
        filter.classList.remove('dispalynone');
      }
    });
  })
});

//function to remove active class from nav
function removeactive() {
  button.forEach(btn => {
    btn.classList.remove('active');
  })
};






















