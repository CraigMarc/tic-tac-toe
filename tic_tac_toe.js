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


    /*event listener*/

    const number = document.querySelectorAll('.cell');

    number.forEach((cell) => {

        cell.addEventListener('click', (e) => {
            let value = cell.id
            Gameboard.setField(value, "cr")
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

    



})();