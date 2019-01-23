class Ai extends Square {

    constructor(index, statusArray, boardArray, boards) {
        super(index, statusArray, boardArray)
        this.value = 'x';
        this.boards = boards;
    }

    // parameter that checking if the game is not over yet
    aiCheck(start) {
        if (start) {
            //checking first user move
            var firstMove = this.boardArray.filter(result => result === 'o');
            if (firstMove.length === 1 && this.boardArray[4] === 'o') {
                return 0;
            } else if (firstMove.length === 1 && this.boardArray[4] !== 'o') {
                return 4;
            }

            //Ai try blocking this combination
            if (this.boardArray[0] === 'o' && this.boardArray[1] === 'o' && this.boardArray[2] === '') {
                return 2;
            } else if (this.boardArray[0] === 'o' && this.boardArray[2] === 'o' && this.boardArray[1] === '') {
                return 1;
            } else if (this.boardArray[0] === 'o' && this.boardArray[3] === 'o' && this.boardArray[6] === '') {
                return 6;
            } else if (this.boardArray[0] === 'o' && this.boardArray[4] === 'o' && this.boardArray[8] === '') {
                return 8;
            } else if (this.boardArray[0] === 'o' && this.boardArray[6] === 'o' && this.boardArray[3] === '') {
                return 3;
            } else if (this.boardArray[1] === 'o' && this.boardArray[2] === 'o' && this.boardArray[0] === '') {
                return 0;
            } else if (this.boardArray[1] === 'o' && this.boardArray[4] === 'o' && this.boardArray[7] === '') {
                return 7;
            } else if (this.boardArray[1] === 'o' && this.boardArray[7] === 'o' && this.boardArray[5] === '') {
                return 5;
            } else if (this.boardArray[2] === 'o' && this.boardArray[4] === 'o' && this.boardArray[6] === '') {
                return 6;
            } else if (this.boardArray[2] === 'o' && this.boardArray[6] === 'o' && this.boardArray[4] === '') {
                return 4;
            } else if (this.boardArray[2] === 'o' && this.boardArray[8] === 'o' && this.boardArray[5] === '') {
                return 5;
            } else if (this.boardArray[2] === 'o' && this.boardArray[5] === 'o' && this.boardArray[8] === '') {
                return 8;
            } else if (this.boardArray[3] === 'o' && this.boardArray[6] === 'o' && this.boardArray[0] === '') {
                return 0;
            } else if (this.boardArray[3] === 'o' && this.boardArray[4] === 'o' && this.boardArray[5] === '') {
                return 5;
            } else if (this.boardArray[3] === 'o' && this.boardArray[5] === 'o' && this.boardArray[3] === '') {
                return 3;
            } else if (this.boardArray[4] === 'o' && this.boardArray[5] === 'o' && this.boardArray[3] === '') {
                return 3;
            } else if (this.boardArray[4] === 'o' && this.boardArray[6] === 'o' && this.boardArray[2] === '') {
                return 2;
            } else if (this.boardArray[4] === 'o' && this.boardArray[7] === 'o' && this.boardArray[1] === '') {
                return 1;
            } else if (this.boardArray[4] === 'o' && this.boardArray[8] === 'o' && this.boardArray[0] === '') {
                return 0;
            } else if (this.boardArray[5] === 'o' && this.boardArray[8] === 'o' && this.boardArray[2] === '') {
                return 2;
            } else if (this.boardArray[6] === 'o' && this.boardArray[7] === 'o' && this.boardArray[8] === '') {
                return 8;
            } else if (this.boardArray[6] === 'o' && this.boardArray[8] === 'o' && this.boardArray[7] === '') {
                return 7;
            } else if (this.boardArray[7] === 'o' && this.boardArray[8] === 'o' && this.boardArray[6] === '') {
                return 6;
            } else if (this.boardArray[4] === 'o' && this.boardArray[8] === 'o' && this.boardArray[5] === '') {
                return 5;
            }
            //If user dont have chance to win in one move then choose first free slot on board
            else {
                var freeSlot = this.boardArray.indexOf('');
                return freeSlot;
            }
        } else {
            return -1;
        }
    }

    // ai move - if game is not over then ai make moves
    aiMove(start, user, chooseSqr) {
        if (start && user && chooseSqr >= 0) {
            this.statusArray[chooseSqr] = true;
            this.boards[chooseSqr].textContent = this.value;
            this.boardArray[chooseSqr] = this.value;
            return true;
        } else {
            return false;
        }


    }
}