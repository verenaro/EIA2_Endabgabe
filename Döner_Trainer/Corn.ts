namespace EIA2_Endabgabe_Döner_Trainer {
    export class Corn extends Ingredient {

        constructor(_position: Vector, _amount: number, _containeramount: number, _type: string, _size: Vector) {
            super(_position, _amount, _containeramount, _type, _size);
        }

        draw(): void {
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "#FFD700";
            crc2.arc(132, 9, 4, 0, 2 * Math.PI);
            crc2.arc(140, 9, 4, 0, 2 * Math.PI);
            crc2.arc(122, 9, 4, 0, 2 * Math.PI);
            crc2.arc(132, -1, 4, 0, 2 * Math.PI);
            crc2.arc(143, -1, 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.save();
            crc2.restore();
        }
    }
}