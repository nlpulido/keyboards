
// Wait for the window to load everything
window.addEventListener('load', () => {
    const menuButton = window.document.getElementsByClassName('menu-button').item(0);
    const navbarLinks = window.document.getElementsByClassName('navbar-links').item(0);

    // When the menu button is clicked, we want the links to appear
    menuButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
})