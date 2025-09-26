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

const gambleButton = document.getElementById('gamble')
gambleButton.addEventListener('click', () => {
    if (clickPoints >= 20) {
        let getPoor = 4
        let lose = 3;
        let even = 2;
        let win = 1;
        let getRich = 0;
        let outcome = Math.floor(Math.random() * 5);
        if(outcome == lose){clickPoints += (-20)}
        if(outcome == even){}
        if(outcome == win){clickPoints += 10}
        if(outcome == getRich){clickPoints += 50}
        if(outcome == getPoor){clickPoints -= 50}
        }   
    money.innerHTML = `${clickPoints}`
})

const loanButton = document.getElementById('loanButton')
loanButton.addEventListener('click', () => {
    clickPoints += 10
    debt += 15
    money.innerHTML = `${clickPoints}`
    const debtElement = document.createElement("p")
    debtElement.id = "showDebt"
    debtElement.innerHTML = `${debt}`
    const bank = document.getElementById('bank')
    bank.appendChild(debtElement)

    const payLoan = document.createElement("button")
    payLoan.setAttribute('type', 'button')
    payLoan.id = "debtButton"
    payLoan.innerHTML = "PAY YOUR DEBT!!!!!"
    bank.appendChild(payLoan)
    loanButton.remove()

    payLoan.addEventListener('click', () => {
        console.log("Button Clicked")
        if (clickPoints >= 15) {
            debtElement.remove()

            clickPoints -= 15
            money.innerHTML = `${clickPoints}`

            payLoan.remove();
            bank.appendChild(loanButton)

            debt = 0
        }
    })
})