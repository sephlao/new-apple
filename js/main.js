
// toggle script for navigation menu
function toggleNav() {
    document.getElementsByClassName('mobile-nav')[0].classList.toggle('expanded');
    document.getElementsByClassName('menu-list')[0].classList.toggle('show');
    document.getElementsByClassName('icon-cancel')[0].classList.toggle('show');
    document.getElementsByClassName('icon-cart')[0].classList.toggle('hide');
    document.getElementsByClassName('humberger-menu')[0].classList.toggle('hide');
}