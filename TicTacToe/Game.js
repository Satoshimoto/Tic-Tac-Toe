let boardElements = document.querySelectorAll('.square');
let boardStatus = [false, false, false, false, false, false, false, false, false];
let boardResults = ['', '', '', '', '', '', '', '', ''];
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');
let draw = document.querySelector('.draw');



//function checking that game is win, lose or draw
const checkWin = function () {

    // variable checking if there is free spot
    var results = boardResults.filter(result => result === '');

    // Win combination
    if (boardResults[0] === 'o' && boardResults[1] === 'o' && boardResults[2] === 'o' ||
        boardResults[0] === 'o' && boardResults[3] === 'o' && boardResults[6] === 'o' ||
        boardResults[0] === 'o' && boardResults[3] === 'o' && boardResults[6] === 'o' ||
        boardResults[0] === 'o' && boardResults[4] === 'o' && boardResults[8] === 'o' ||
        boardResults[1] === 'o' && boardResults[4] === 'o' && boardResults[7] === 'o' ||
        boardResults[2] === 'o' && boardResults[5] === 'o' && boardResults[8] === 'o' ||
        boardResults[2] === 'o' && boardResults[4] === 'o' && boardResults[6] === 'o' ||
        boardResults[3] === 'o' && boardResults[4] === 'o' && boardResults[5] === 'o' ||
        boardResults[6] === 'o' && boardResults[7] === 'o' && boardResults[8] === 'o') {
        win.style.display = 'block';
        return undefined;
    }
    // Lose combination 
    else if (
        boardResults[0] === 'x' && boardResults[1] === 'x' && boardResults[2] === 'x' ||
        boardResults[0] === 'x' && boardResults[3] === 'x' && boardResults[6] === 'x' ||
        boardResults[0] === 'x' && boardResults[3] === 'x' && boardResults[6] === 'x' ||
        boardResults[0] === 'x' && boardResults[4] === 'x' && boardResults[8] === 'x' ||
        boardResults[1] === 'x' && boardResults[4] === 'x' && boardResults[7] === 'x' ||
        boardResults[2] === 'x' && boardResults[5] === 'x' && boardResults[8] === 'x' ||
        boardResults[2] === 'x' && boardResults[4] === 'x' && boardResults[6] === 'x' ||
        boardResults[3] === 'x' && boardResults[4] === 'x' && boardResults[5] === 'x' ||
        boardResults[6] === 'x' && boardResults[7] === 'x' && boardResults[8] === 'x') {
        lose.style.display = 'block';
        return false;
    }
    // Draw 
    else if (results.length === 0) {
        draw.style.display = 'block';
        return false;
    }
    // Nothing or error
    else {
        return true;
    }
}



class Game {
    constructor() {
        Array.prototype.forEach.call(boardElements, function (item, index) {
            item.addEventListener('click', () => {
                var sqr = new Square(index, boardStatus, boardResults);
                var ai = new Ai(index, boardStatus, boardResults, boardElements);
                ai.aiMove(checkWin(), sqr.move(checkWin(), item), ai.aiCheck(checkWin()));
                checkWin();
            });
        });

        document.getElementById('reset').addEventListener('click', this.reset);
    }



    // resetting game results
    reset() {
        boardStatus = [false, false, false, false, false, false, false, false, false];
        boardResults = ['', '', '', '', '', '', '', '', ''];

        Array.prototype.forEach.call(boardElements, function (element, index) {
            element.textContent = '';
        })

        win.style.display = 'none';
        lose.style.display = 'none';
        draw.style.display = 'none';

    }

}