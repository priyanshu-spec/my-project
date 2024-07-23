
function selectCategory(category) {
    document.getElementById('search-input').value = category;
}


document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); 
        document.querySelector('.dropdown-content').style.display = 'none'; 
    });
});


document.querySelector('.dropbtn').addEventListener('click', () => {
    document.querySelector('.dropdown-content').style.display = 'block';
});
