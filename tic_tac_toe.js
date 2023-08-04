const Gameboard = ((player, position) => {
    let gameboardArr = ["x", "x", "x", "o", "x", "o", "x", "o", "x"]

    for (let i = 0; i < gameboardArr.length; i++) {
        let cell = document.getElementById(i);

        cell.textContent = gameboardArr[i];
    }
    return { player, position, gameboardArr };
})();

console.log(Gameboard.gameboardArr)

/*event listener*/

const number = document.querySelectorAll('.cell');

    number.forEach((cell) => {

      cell.addEventListener('click', (e) => {
        let value = cell.id

        console.log(value)
       


      })
    })

