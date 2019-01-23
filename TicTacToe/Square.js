class Square {
    constructor(index, statusArray, boardArray) {
        this.value = 'o';
        this.index = index;
        this.statusArray = statusArray;
        this.boardArray = boardArray;
    }

    // User move - first parameter checking that game is not over if not then return true
    move(start, item) {
        if (start) {
            //checking if this slot is free or not
            if (this.statusArray[this.index] === false) {
                item.textContent = this.value;
                this.boardArray[this.index] = this.value;
                this.statusArray[this.index] = true;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}