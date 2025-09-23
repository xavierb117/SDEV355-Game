let clickValue = 1
let totalClicks = 0
let clickPoints = 0
let debt = 0

const upgradePrice = 5
const money = document.getElementById('money')
const clickerButton = document.getElementById('clicker')
const showTotal = document.getElementById('totalClicks')
clickerButton.addEventListener('click', () => {
    totalClicks += clickValue
    clickPoints += clickValue
    showTotal.innerHTML = `${totalClicks}`;
    money.innerHTML = `${clickPoints}`
})

const shopButton = document.getElementById('upgrade')
shopButton.addEventListener('click', () => {
    if (clickPoints >= upgradePrice) {
        clickPoints -= upgradePrice
        clickValue += 1
    }
    money.innerHTML = `${clickPoints}`
})

const loanButton = document.getElementById('loanButton')
loanButton.addEventListener('click', () =>{
    clickPoints += 10
    debt += 15
    money.innerHTML = `${clickPoints}`
    const debtElement = document.createElement("p")
    debtElement.innerHTML = `${debt}`
    const bank = document.getElementById('bank')
    bank.appendChild(debtElement)
})