const toggleButton = document.getElementById('toggle-button');
const navbar  = document.getElementById('navbar');
const navbarList = document.getElementById('navbar-list');

toggleButton.onclick = () => {
    navbar.classList.toggle('active');
};
document.addEventListener('click', function(e) {
    if(!toggleButton.contains(e.target) && !navbarList.contains(e.target)) {
        navbar.classList.remove('active');
    };
});