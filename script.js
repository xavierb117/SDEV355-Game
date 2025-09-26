let clickValue = 1
let totalClicks = 0
let clickPoints = 0
let debt = 0
let highClickerEnabler = true
let highestClicks = true
let gambleEnabler = true
let bankEnabler = true

const upgradePrice = 5
const money = document.getElementById('money')
const clickerButton = document.getElementById('clicker')
const showTotal = document.getElementById('totalClicks')
clickerButton.addEventListener('click', () => {
    totalClicks += clickValue
    clickPoints += clickValue
    showTotal.innerHTML = `Number of total clicks: ${totalClicks}`;
    money.innerHTML = `$${clickPoints}`

    if (totalClicks == 1) {
        const achievement = document.getElementById("achievements")
        let firstClick = document.createElement("p")
        firstClick.innerHTML = "First Steps: Make your first click"
        achievement.appendChild(firstClick)
    }

    if (totalClicks >= 100 && highClickerEnabler) {
        const achievement = document.getElementById("achievements")
        let highClicks = document.createElement("p")
        highClicks.innerHTML = "Moving up!: You've reached 100 clicks"
        achievement.appendChild(highClicks)
        highClickerEnabler = false
    }

    if (totalClicks >= 1000 && highestClicks) {
        const achievement = document.getElementById("achievements")
        let congrats = document.createElement("p")
        congrats.innerHTML = "Master: 1000 clicks have been made! Congratulations!"
        achievement.appendChild(congrats)
        highestClicks = false
    }
})

const shopButton = document.getElementById('upgrade')
shopButton.addEventListener('click', () => {
    if (clickPoints >= upgradePrice) {
        clickPoints -= upgradePrice
        clickValue += 1
    }
    money.innerHTML = `$${clickPoints}`
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
    money.innerHTML = `$${clickPoints}`

    if (gambleEnabler) {
        const achievement = document.getElementById("achievements")
        let firstGamble = document.createElement("p")
        firstGamble.innerHTML = "Did you win?: Make your first profit/loss from gambling"
        achievement.appendChild(firstGamble)
        gambleEnabler = false
    }
})

const loanButton = document.getElementById('loanButton')
loanButton.addEventListener('click', () => {
    clickPoints += 10
    debt += 15
    money.innerHTML = `$${clickPoints}`
    const debtElement = document.createElement("p")
    debtElement.id = "showDebt"
    debtElement.innerHTML = `Amount owed: $${debt}`
    const bank = document.getElementById('bank')
    bank.appendChild(debtElement)

    const payLoan = document.createElement("button")
    payLoan.setAttribute('type', 'button')
    payLoan.id = "debtButton"
    payLoan.innerHTML = "PAY YOUR DEBT!!!!!"
    bank.appendChild(payLoan)
    loanButton.remove()

    payLoan.addEventListener('click', () => {
        if (clickPoints >= 15) {
            debtElement.remove()

            clickPoints -= 15
            money.innerHTML = `$${clickPoints}`

            payLoan.remove();
            bank.appendChild(loanButton)

            debt = 0
        }

        if (bankEnabler) {
            const achievement = document.getElementById("achievements")
            let firstDebtPayment = document.createElement("p")
            firstDebtPayment.innerHTML = "Responsible: Paid off your first loan"
            achievement.appendChild(firstDebtPayment)
            bankEnabler = false
        }
    })
})