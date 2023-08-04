const Gameboard = ((player, position) => {
    let gameboardArr = ["x", "x", "x", "o", "x", "o", "x", "o", "x"]

    
    const setField = (index, sign) => {
        
        gameboardArr[index] = sign;
      };
    

    return { player, position, gameboardArr, setField };
})();


Gameboard.setField(0, "cra")
console.log(Gameboard.gameboardArr)

/*gamecontroller module*/
const Gamecontroller = ((player, position) => {


/*event listener*/

const number = document.querySelectorAll('.cell');

    number.forEach((cell) => {

      cell.addEventListener('click', (e) => {
        let value = cell.id
        Gameboard.setField(value, "cr")
       setBoard()
      })
    })
/*set board*/
const setBoard = () => {
    for (let i = 0; i < Gameboard.gameboardArr.length; i++) {
        let cell = document.getElementById(i);

        cell.textContent = Gameboard.gameboardArr[i];
    }

}
})()