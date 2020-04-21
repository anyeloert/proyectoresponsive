const menu = document.querySelector('.icono')
const d = document.querySelector('#hola')

const addClass = e => {
    e.preventDefault();
    const ul = document.querySelector('#lista')
    ul.classList.toggle('disappear')

}

menu.addEventListener('click', addClass, false)