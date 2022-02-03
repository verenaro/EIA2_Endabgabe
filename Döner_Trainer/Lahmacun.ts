namespace EIA2_Endabgabe_Döner_Trainer {
    export class Lahmacun extends Ingredient {

        constructor(_position: Vector, _amount: number, _containeramount: number, _type: string, _size: Vector) {
            super(_position, _amount, _containeramount, _type, _size);
        }

        draw(): void {
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, 19, 45, 0, 2 * Math.PI);
            crc2.fillStyle = "#bfa290";
            crc2.fill();
            crc2.closePath();
            //Hackfleisch
            crc2.beginPath();
            crc2.fillStyle = "#61380B";
            crc2.arc(132, 15, 20, 0, 2 * Math.PI);
            crc2.arc(140, 15, 20, 0, 2 * Math.PI);
            crc2.arc(122, 15, 20, 0, 2 * Math.PI);
            crc2.arc(132, 5, 20, 0, 2 * Math.PI);
            crc2.arc(143, 5, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.save();
            crc2.restore();
        }
    }
}