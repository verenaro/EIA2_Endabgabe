namespace EIA2_Endabgabe_Döner_Trainer {
    export class Yufka extends Ingredient {

        constructor(_position: Vector, _amount: number, _containeramount: number) {
            super(_position, _amount, _containeramount);
        }

        draw(): void {
            crc2.fillStyle = "#bfa290";
            crc2.fillRect(this.position.x, this.position.y, 80, 30);
            crc2.beginPath();
            crc2.fillStyle = "#A0522D";
            crc2.arc(-120, -14.7, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#bfa290";
            crc2.arc(-43, -15, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            crc2.save();
        }
    }
}