const modal = document.getElementById('myModal')
const btn = document.getElementById('btn')
const clo = document.querySelector('.close')

btn.addEventListener('click', () => {
    modal.style.display = 'block'
});

clo.addEventListener('click', () => {
        modal.style.display = 'none'
})
window.addEventListener("click", (e) => {
    if(e.target == modal){
        modal.style.display = 'none'
    }
})