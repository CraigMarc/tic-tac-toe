"use strict";

/*gameBoard module*/

const Gameboard = (() => {
    let gameboardArr = ["", "", "", "", "", "", "", "", ""]

    /*changes array to set player choice*/
    const setField = (index, sign) => {

        gameboardArr[index] = sign;
    };

    const resetField = () => {
        for (let i = 0; i < gameboardArr.length; i++) {
            gameboardArr[i] = ""
        }

    };


    return { gameboardArr, setField, resetField };
})();






/*gamecontroller module*/

const Gamecontroller = (() => {
    let message = document.getElementById('message')
    let counter = 0
    let player = document.getElementById('player')
    player.textContent = "X's Turn"

   



    /*event listener*/

    const number = document.querySelectorAll('.cell');

    number.forEach((cell) => {

        cell.addEventListener('click', play)
    })

    function removeListener() {
        number.forEach((cell) => {
            cell.removeEventListener('click', play)

        })
    }

    function addListener() {
        number.forEach((cell) => {

            cell.addEventListener('click', play)
        })
    }
/*play round*/

    function play(e) {
        let computerChoice = 0
        for (let i = 0; i < 25; i++) {
            computerChoice = getComputerChoice()
            if (Gameboard.gameboardArr[computerChoice] == "") {
                break;
            }
            
        }
        
        let value = e.target.id
        if (Gameboard.gameboardArr[value] == "") {
            Gameboard.setField(value, "X")
            player.textContent = "O's Turn"
        }
        for (let i = 0; i < 25; i++) {
            computerChoice = getComputerChoice()
            if (Gameboard.gameboardArr[computerChoice] == "") {
                break;
            }
            
        }


        // if the number is odd
        
            Gameboard.setField(computerChoice, "O")
            player.textContent = "X's Turn"
                   
        

        
        if (Gameboard.gameboardArr.indexOf("") == -1 && checkWinner() == "loser") {

            message.textContent = "Its a Tie"
            removeListener()
        }
        

        if (checkWinner() != "loser") {
            message.textContent = checkWinner() + "Wins"
            console.log(checkWinner())
            removeListener()
        }

       
        /*
        if (checkWinner() != "winner" && counter % 2 != 0) {
            message.textContent = "X Wins"
            removeListener()
        }*/

        setBoard()



    }

    /*set board*/
    const setBoard = () => {
        for (let i = 0; i < Gameboard.gameboardArr.length; i++) {
            let cell = document.getElementById(i);

            cell.textContent = Gameboard.gameboardArr[i];
        }

    }

    function checkWinner() {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]


        for (let i = 0; i < winner.length; i++) {


            if (Gameboard.gameboardArr[winner[i][0]] == Gameboard.gameboardArr[winner[i][1]]
                && Gameboard.gameboardArr[winner[i][1]] == Gameboard.gameboardArr[winner[i][2]]
                && Gameboard.gameboardArr[winner[i][0]] != ""
                && Gameboard.gameboardArr[winner[i][1]] != ""
                && Gameboard.gameboardArr[winner[i][2]] != "") {
                return Gameboard.gameboardArr[winner[i][0]] 
            }

        }
        return 'loser'

    }

    /*reset button listner*/

    const btn = document.getElementById('reset');

    btn.addEventListener('click', () => {
        /*
           Gameboard.gameboardArr = ["", "", "", "", "", "", "", "", ""]*/
        Gameboard.resetField()
        setBoard()
        message.textContent = ""
        player.textContent = "X's Turn"
        counter = 0
        addListener()
    })

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 9);

        return computerChoice
    }


    return { counter, setBoard };

})();

