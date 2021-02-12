const togglebutton = document.getElementById('toggle-button');
const sidebar = document.getElementById('side-bar');

togglebutton.addEventListener('click', show);

function show () {
    sidebar.classList.toggle('active');
}

//remove sidebar if click on the main contnent
const contnent = document.getElementById('.content');

contnent.addEventListener('click', () => {
    sidebar.classList.remove('active');
} )