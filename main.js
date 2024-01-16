activateNavItem();

function activateNavItem() {
    const navItems = document.querySelectorAll('.navbar-element');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(item => {
                item.classList.remove('selected');
            });
            item.classList.add('selected');
        });
    });
}
