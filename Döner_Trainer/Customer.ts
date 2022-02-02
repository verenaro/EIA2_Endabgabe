namespace EIA2_Endabgabe_Döner_Trainer {
    export class Customer extends Person {

        constructor(_position: Vector, _velocity: Vector, _type: string, _size: string) {
            super(_position);
        }

        draw(): void {
            //Body
            crc2.beginPath();
            crc2.save();
            crc2.translate(+200 + this.position.x, 40 + this.position.y);
            crc2.fillStyle = "brown";
            crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, -27, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(131, -19, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(125, 10, 3, 0, 2 * Math.PI);
            crc2.arc(142, 10, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Hands2
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(142, 45, 5, 0, 2 * Math.PI);
            crc2.arc(120, 45, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
           

            crc2.restore();
            crc2.closePath();
            crc2.beginPath();

            

        }

        mood(): void {

        }

        move(): void {

        }

        talk(): void {
            let kebap: string[] = ["flatbread", "vegan meat", "salad", "red cabbage"];
            let lahmacun: string[] = ["flatbread", "vegan mincemeat", "tomatosauce"];
            let yufka: string[] = ["thin flatbread", "vegan meat", "salad", "herb"];
            let toppings: string[] = ["corn", "tomatoes", "onions"];
            let sauces: string[] = ["garlic sauce", "hot sauce", "yoghurt sauce"];
            let words: string[] = ["with", "without"];
        }
    }
}