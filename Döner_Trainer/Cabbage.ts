namespace EIA2_Endabgabe_Döner_Trainer {
    export class Cabbage extends Ingredient {

        constructor(_position: Vector) {
            super(_position);
        }

        draw(): void {
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "#800000";
            crc2.arc(132, -69, 10, 0, 1 * Math.PI);
            crc2.arc(140, -69, 10, 0, 1 * Math.PI);
            crc2.arc(154, -68, 10, 0, 1 * Math.PI);
            crc2.arc(122, -69, 10, 0, 1 * Math.PI);
            crc2.arc(132, -79, 10, 0, 1 * Math.PI);
            crc2.arc(143, -79, 10, 0, 1 * Math.PI);
            crc2.arc(122, -79, 10, 0, 1 * Math.PI);
            crc2.arc(111, -75, 10, 0, 1 * Math.PI);
            crc2.arc(114, -65, 10, 0, 1 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            crc2.save();
        }
    }

}