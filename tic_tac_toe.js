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
            if(counter % 2 == 0) {
                Gameboard.setField(value, "X")
            }
            
            // if the number is odd
            else {
                Gameboard.setField(value, "O")
            }
            
            counter = counter + 1
            console.log(counter)
            
            setBoard()
            console.log(Gameboard.gameboardArr)
        })
    })

    /*set board*/
    const setBoard = () => {
        for (let i = 0; i < Gameboard.gameboardArr.length; i++) {
            let cell = document.getElementById(i);
            
            cell.textContent = Gameboard.gameboardArr[i];
        }

    }

    

    return { counter };

})();