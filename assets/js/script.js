const button = document.querySelectorAll('.btn'),
 filterDiv = document.querySelectorAll('.filterDiv'),
 wallpapers =document.querySelectorAll('.wallpaper'),
 bussiness = document.querySelectorAll('.bussiness'),
 stationerys = document.querySelectorAll('.stationery'),
 websites = document.querySelectorAll('.website'),
 mobiles = document.querySelectorAll('.mobile');

 button.forEach(btn => {
    btn.addEventListener('click', () => {
        removeactive();
        btn.classList.add('active');
        let dataFilter=btn.getAttribute('data-filter');
        console.log(dataFilter);
        filterDiv.forEach(filter => {
            console.log(filter.getAttribute('data-item'))
            // removedisplaytrue();
          if(filter.getAttribute('data-item') == dataFilter){
            
            filter.classList.add('displaytrue');
          }
        });
    })
});

function removedisplaytrue(){
    filterDiv.forEach(div => {
        div.classList.remove('displaytrue');
    })
};

function removeactive() {
    button.forEach(btn => {
        btn.classList.remove('active');
    })
};
// function filter(element){
//     console.log(element)
//     if(element === 'wallpaper') {
//         remove()
//         deactivate();
//      wallpapers.forEach((wallpaper) => {
//         wallpaper.classList.add('displaytrue');
//         console.log(element)
//      })
//     }
    
//     if(element === 'bussiness') {
//         console.log(element)
//         remove()
//         deactivate()
//         bussiness.forEach((bussines) => {
//             bussines.classList.add('displaytrue');
//          })
//     }
    
//     if(element === 'stationery') {
//         console.log(element)
//         remove()
//         deactivate()
//         stationerys.forEach((stationery) => {
//             stationery.classList.add('displaytrue');
//          })
//     }
   
//     if(element === 'website') {
//         console.log(element)
//         remove()
//         deactivate()
//         websites.forEach((website) => {
//             website.classList.add('displaytrue');
//          })
//     }
    
//     if(element === 'mobile') {
//         console.log(element)
//         remove()
//         deactivate()
//         mobiles.forEach((mobile) => {
//             mobile.classList.add('displaytrue');
//          })
//     }
    
//     if(element === 'all') {
//         console.log(element)
//         remove()
//         deactivate()
//         filterDiv.forEach((filter) => {
//             filter.classList.add('displaytrue')
//         })
//     }

//  };

// function remove(){
//     filterDiv.forEach((filter) => {
//         filter.classList.remove('displaynone');
//     })
// }

// function deactivate() {
//     filterDiv.forEach((filter) => {
//         filter.classList.remove('displaytrue');
//         filter.classList.add('displaynone');
//     })
// }





















