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

            counter = counter + 1

            setBoard()
            console.log(Gameboard.gameboardArr)
            console.log(checkWinner())
            if (counter == 9) {
                let message = document.getElementById('message')
                message.textContent = "Tie"
            }

        })
    })

    /*set board*/
    const setBoard = () => {
        for (let i = 0; i < Gameboard.gameboardArr.length; i++) {
            let cell = document.getElementById(i);

            cell.textContent = Gameboard.gameboardArr[i];
        }

    }

    const checkWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8]
            [2, 4, 6]
        ]
       
        for (let i = 0; i < winner.length; i++) {
            if (Gameboard.gameboardArr[winner[i][0]] == Gameboard.gameboardArr[winner[i][1]]
                 && Gameboard.gameboardArr[winner[i][1]] == Gameboard.gameboardArr[winner[i][2]]) {
            return 'winner'
        }
        else {return 'loser'

    }
       

    }

    }

    return { counter };

})();