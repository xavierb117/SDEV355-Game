let clickValue = 1
let totalClicks = 0
let clickPoints = 0

const upgradePrice = 5

const clickerButton = document.getElementById('clicker')
clickerButton.addEventListener('click', () => {
    totalClicks += clickValue
    clickPoints += clickValue

})

const shopButton = document.getElementById('upgrade')
shopButton.addEventListener('click', () => {
    if (clickPoints >= upgradePrice) {
        clcikPoints -= upgradePrice
        clickValue += 1
    }
})