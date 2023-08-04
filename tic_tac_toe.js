const Gameboard = ((player, position) => {
    let gameboardArr = ["", "", "", "", "", "", "", "", ""]

    
    return { player, position, gameboardArr };
  })();

console.log(Gameboard.gameboardArr)

