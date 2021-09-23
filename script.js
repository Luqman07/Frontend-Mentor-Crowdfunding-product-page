const modal = document.getElementById('myModal')
const btn = document.getElementById('btn')
const clo = document.querySelector('.close')
const checker = document.querySelectorAll('.put')


btn.addEventListener('click', () => {
    modal.style.display = 'block'
});

clo.addEventListener('click', () => {
    modal.style.display = 'none'
})
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
})
// checker.addEventListener('change',)

checker.forEach(element => {
    let cardDefault;
    let pledgeEntry;
    element.addEventListener('change', () => {
        if (element.checked) {
            cardDefault = element.closest('.card-default')
            pledgeEntry = cardDefault.querySelector('.pledge-entry')
            cardDefault.classList.remove('card-border-grey')
            cardDefault.classList.add('card-border-green')
            pledgeEntry.classList.remove('d-none')
            console.log(cardDefault.classList);

        } else {
            cardDefault = element.closest('.card-default')
            cardDefault.classList.remove('card-border-green')
            cardDefault.classList.add('card-border-grey')
            pledgeEntry.classList.add('d-none')
        }
    })
});