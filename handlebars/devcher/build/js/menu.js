const initApp = () => {
    const burgerBtn = document.getElementById('burger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    const openMenu = () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('animate-slideIn');
        mobileMenu.classList.remove('animate-slideOut');
    }

    const closeMenu = () => {
        mobileMenu.classList.add('animate-slideOut');
        mobileMenu.classList.remove('animate-slideIn');     
    }

    burgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
}

document.addEventListener('DOMContentLoaded', initApp)