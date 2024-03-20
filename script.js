const result = document.querySelector('.result')
const machineScore = document.querySelector ('#machine-score')
const humanScore = document.querySelector ('#human-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {


    playGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playGame = (human, machine) => {
    console.log('Human: ' + human + ' Machine: ' + machine)


    if (human === machine) {
        result.innerHTML = 'Break even ! <td>&#128530; '

    } else if 
        (human === 'paper' && machine === 'stone' ||
        (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
        )  { 
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
            result.innerHTML = 'You Win ! <td>&#128515;'
        } else {
            machineScoreNumber++
            machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'You Lose !  <td>&#x1F610;   '
    }




}


/* 

pedra => pedra => tesoura

*/