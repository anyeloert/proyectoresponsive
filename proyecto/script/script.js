const menu = document.querySelector('.icono')

const addClass = e => {
    e.preventDefault();
    const ul = document.querySelector('#lista')
    ul.classList.toggle('disappear')

}

menu.addEventListener('click', addClass, false)