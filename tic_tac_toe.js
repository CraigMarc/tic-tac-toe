"use strict";

/*gameBoard module*/

const Gameboard = (() => {
    let gameboardArr = ["", "", "", "", "", "", "", "", ""]

    /*changes array to set player choice*/
    const setField = (index, sign) => {

        gameboardArr[index] = sign;
    };


    return { gameboardArr, setField };
})();






/*gamecontroller module*/

const Gamecontroller = (() => {
    let message = document.getElementById('message')
    let counter = 0

    /*event listener*/

    const number = document.querySelectorAll('.cell');

    number.forEach((cell) => {

        cell.addEventListener('click', (e) => {
            let value = cell.id

            if (counter % 2 == 0 && Gameboard.gameboardArr[value] == "") {
                Gameboard.setField(value, "X")
            }

            // if the number is odd
            else if (Gameboard.gameboardArr[value] == "") {
                Gameboard.setField(value, "O")
            }
console.log(checkWinner())
            
            if (checkWinner() == "winner" && counter % 2 == 0) {
                message.textContent = "X Wins" 
            }
            if (checkWinner() == "winner" && counter % 2 != 0) {
                message.textContent = "O Wins" 
            }

            setBoard()
            console.log(Gameboard.gameboardArr)

            if (counter == 9) {
                
                message.textContent = "Tie"
            }
            counter = counter + 1
        })
    })

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
                && Gameboard.gameboardArr[winner[i][0]] != "" && Gameboard.gameboardArr[winner[i][1]] != ""
                && Gameboard.gameboardArr[winner[i][2]] != "") {
            return 'winner'
        }
       
    }
    return 'loser'

    

    }

    return { counter };

})();