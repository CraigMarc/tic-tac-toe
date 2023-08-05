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
    

    function play(e) {
        
        let value = e.target.id
        if (counter % 2 == 0 && Gameboard.gameboardArr[value] == "") {
            Gameboard.setField(value, "X")
            player.textContent = "O's Turn"
        }

        // if the number is odd
        else if (Gameboard.gameboardArr[value] == "") {
            Gameboard.setField(value, "O")
            player.textContent = "X's Turn"
        }

        counter = counter + 1

        if (counter == 9) {

            message.textContent = "Tie"
            removeListener()
        }

        if (checkWinner() == "winner" && counter % 2 == 0) {
            message.textContent = "O Wins"
            removeListener()
        }
        if (checkWinner() == "winner" && counter % 2 != 0) {
            message.textContent = "X Wins"
            removeListener()
        }

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
                return 'winner'
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
   counter = 0
   addListener()
   })
 



    return { counter, setBoard };

})();