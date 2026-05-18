function updateMaxHeight(details) {
    if (details.classList.contains('open')) {
        details.style.maxHeight = details.scrollHeight + 'px';

        let parent = details.parentElement;
        while (parent) {
            if (parent.classList && parent.classList.contains('details') && parent.classList.contains('open')) {
                updateMaxHeight(parent);
                break;
            }
            parent = parent.parentElement;
        }
    }
}


document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const update = button.closest('.update');
        const details = update.querySelector('.details');
        const arrow = button.querySelector('.arrow');
        
        arrow.classList.toggle('rotated');
        
        if (details.classList.contains('open')) {
            details.style.maxHeight = details.scrollHeight + 'px'; // smooth transition from current height
            requestAnimationFrame(() => {
                details.style.maxHeight = '0';
            });
            details.classList.remove('open');
        } else {
            details.classList.add('open');
            updateMaxHeight(details);
        }
    });
});

const allDetails = document.querySelectorAll('.details');

const observer = new ResizeObserver(entries => {
    for (const entry of entries) {
        const details = entry.target;
        updateMaxHeight(details);
    }
});

allDetails.forEach(details => {
    observer.observe(details);
});