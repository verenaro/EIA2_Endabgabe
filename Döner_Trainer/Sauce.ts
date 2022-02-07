namespace EIA2_Endabgabe_Döner_Trainer {
    export class Sauce extends Ingredient {

        constructor(_position: Vector) {
            super(_position);
        }

        draw(): void {
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "#F5F5DC";
            crc2.arc(132, 9, 15, 0, 2 * Math.PI);
            crc2.arc(140, 9, 15, 0, 2 * Math.PI);
            crc2.arc(122, 9, 15, 0, 2 * Math.PI);
            crc2.arc(132, -1, 15, 0, 2 * Math.PI);
            crc2.arc(143, -1, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            crc2.save();

        }
    }
}