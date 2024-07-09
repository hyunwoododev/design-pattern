import EvenBettingPlayer from "./EvenBettingPlayer";
import FairDiceGame from "./FairDiceGame";
import NBettingPlayer from "./NBettingPlayer";
import OddBettingPlayer from "./OddBettingPlayer";

/**
 * Observer 패턴은 객체 간의 일대다 종속성을 정의하여, 한 객체의 상태 변화가 있을 때 그 변화가 다른 종속 객체들에게 자동으로 통지되고 업데이트되도록 하는 디자인 패턴입니다. 
 * 주체(Subject)와 관찰자(Observer)로 구성되며, 주체는 상태 변화를 관리하고 관찰자는 주체의 상태 변화에 따라 행동을 업데이트합니다. 
 * 이를 통해 객체 간의 결합도를 낮추고, 동적인 상호작용을 가능하게 합니다. 
 */
const diceGame = new FairDiceGame()
const players = [
    new EvenBettingPlayer("Kim"),
    new OddBettingPlayer("Lee"),
    new NBettingPlayer("Park", [2,3,4]),
]

players.forEach(player => diceGame.addPlayer(player))

function updateBoard() {
    const domPlayers = document.querySelector(".players")
    domPlayers.innerHTML = ""

    players.forEach((player) => {
        const domPlayer = document. createElement ("div")
        domPlayer. innerText = player.name
        if(player.winning) domPlayer.classList.add("win")
        domPlayers.append(domPlayer)
    })
}

updateBoard()

document.querySelector("button").addEventListener("click", () => {
    const diceNumber = diceGame.play()
    const domDice = document.querySelector(".dice") as HTMLElement
    domDice.innerText =diceNumber.toString()
})