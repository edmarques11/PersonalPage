function changeSelected(id) {
    let listElements = document.getElementsByClassName('item');
    for (let i = 0; i <= 2; i++) {
        listElements[i].classList.remove('active');
    }

    let elem = document.getElementById(`${id}`);
    elem.classList.add('active');
}