function changeSelected(id) {
    let listElements = document.getElementsByClassName('item');
    for (let i = 0; i <= 2; i++) {
        listElements[i].classList.remove('active');
    }

    let elem = document.getElementById(`${id}`);
    elem.classList.add('active');

    /**/
    const novoCaminho = `./assets/pages/${id}.html`;
    let iframe = document.getElementsByClassName('conteudo');
    iframe[0].attributes[0].value = novoCaminho;
}