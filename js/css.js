window.addEventListener('resize', function(){
    const header = document.querySelector('.header');
    if(header.scrollWidth > header.clientWidth){
        header.classList.add('left-aligned');
    } else {
        header.classList.remove('left-aligned');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    if(header.scrollWidth > header.clientWidth){
        header.classList.add('left-aligned');
    }
});