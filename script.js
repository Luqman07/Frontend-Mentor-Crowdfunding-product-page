const modal = document.getElementById('myModal')
const btn = document.getElementById('btn')
const clo = document.querySelector('.close')
const checker = document.querySelectorAll('.put')
const navTogLabel = document.querySelector('.nav-toggle-label')
let toggleChecker = document.getElementById('nav-toggle')
const cont = document.querySelectorAll('.continue')
let funds = 89914
let moneyBacked = document.getElementById('money-backed')
let totalBackers = document.getElementById('tot-backers')
let daysLeft = document.getElementById('days-left')
const gotIt = document.getElementById('got')

btn.addEventListener('click', () => {
    modal.style.display = 'block'
});

clo.addEventListener('click', () => {
    modal.style.display = 'none'
})

gotIt.addEventListener('click', () => {
    let modalParent = gotIt.closest('.modal-custom')
    let backProject = modalParent.querySelector('.modal-body-custom')
    let modalComplete = modalParent.querySelector('.modal-completed')
    backProject.classList.remove('d-none')
    modalComplete.classList.add('d-none')
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

navTogLabel.addEventListener('click', (e) => {
    console.log(e.target.parentElement);
    let icon = navTogLabel.querySelector('.fa-lg')
    if (e.target.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')
    } else {
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')
    }
})
cont.forEach(ele => {
    ele.addEventListener('click', () => {
        let modalParent = ele.closest('.modal-custom')
        let backProject = modalParent.querySelector('.modal-body-custom')
        let modalComplete = modalParent.querySelector('.modal-completed')
        let cardDefault = ele.closest('.card-default')
        let pledgeEntry = cardDefault.querySelector('.pledge-entry')
        let getPar = ele.closest('.hey')
        let val = getPar.querySelector('.pledge-input').value
        funds += parseInt(val)
        moneyBacked.innerHTML = `$${funds.toLocaleString()}`
        backProject.classList.toggle('d-none')
        modalComplete.classList.toggle('d-none')
        pledgeEntry.classList.add('d-none')
    })
})