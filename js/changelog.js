document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.closest('.update').querySelector('.details');
        if(details.style.display === 'block'){
            details.style.display = "none";
            button.innerHTML = "&or;";
        } else{
            details.style.display = "block";
            button.innerHTML = "&and;";
        }
    });
});