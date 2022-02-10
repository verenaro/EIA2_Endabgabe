namespace EIA2_Endabgabe_Döner_Trainer {
    export class Kebap extends Ingredient {

        constructor(_position: Vector, _amount: number, _containeramount: number) {
            super(_position, _amount, _containeramount);

        }

        draw(): void {
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, 19, 45, 0, 1 * Math.PI);
            crc2.fillStyle = "#bfa290";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            crc2.save();
        }

    }
}