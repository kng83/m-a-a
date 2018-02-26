export class SquareArea {
    public pointX: number;
    public pointY: number;

    constructor(pX: number, pY: number) {
        this.pointX = pX;
        this.pointY = pY;

    }

    getArea() {
        return this.pointX * this.pointY;
    }
    getHeight() {
        return this.pointY;
    }
    getWight() {
        return this.pointX;
    }

}

