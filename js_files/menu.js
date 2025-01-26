function openMenu() {
    const openmenu = document.querySelector('.mobileMenu ul');
    openmenu.style.display = 'flex';
}

function closeMenu() {
    const openmenu = document.querySelector('.mobileMenu ul');
    openmenu.classList.add('closeMenu');
    
    setTimeout(function() {
        openmenu.style.display = 'none';
        openmenu.classList.remove('closeMenu');
    }, 1000);
}
