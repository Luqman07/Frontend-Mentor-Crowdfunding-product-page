const modal = document.getElementById('myModal')
const btn = document.getElementById('btn')
const clo = document.querySelector('.close')
const checker = document.querySelectorAll('.put')
const navTogLabel = document.querySelector('.nav-toggle-label')
let toggleChecker = document.getElementById('nav-toggle')

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

navTogLabel.addEventListener('click', (e)=>{
    let icon = navTogLabel.querySelector('.fa-lg')
    if (e.target.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')
    }else{
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')
    }
})