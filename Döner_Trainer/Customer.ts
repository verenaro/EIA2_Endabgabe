namespace EIA2_Endabgabe_Döner_Trainer {
    export class Customer extends Person {

        constructor(_position: Vector) {
            super(_position);
            this.velocity = new Vector(0, 0);
        }

        draw(): void {
            //happy customer
            //Body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, 200, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.fill();
            //crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(132, 135, 30, 0, 2 * Math.PI);
            crc2.fill();
            //crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "#FFDEAD";
            crc2.arc(132, 105, 10, 0, 2 * Math.PI);
            crc2.arc(142, 105, 10, 0, 2 * Math.PI);
            crc2.arc(152, 110, 10, 0, 2 * Math.PI);
            crc2.arc(142, 110, 10, 0, 2 * Math.PI);
            crc2.arc(132, 110, 10, 0, 2 * Math.PI);
            crc2.arc(122, 110, 10, 0, 2 * Math.PI);
            crc2.arc(117, 107, 10, 0, 2 * Math.PI);

            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, 130, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, 130, 2.5, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            crc2.arc(132, 140, 10, 0, Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(168, 200, 7, 0, 2 * Math.PI);
            crc2.arc(93, 200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, 245, 10, 0, 2 * Math.PI);
            crc2.arc(110, 245, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.save();
            crc2.restore();



        }

        mad(): void {
            // mad customer
            //Body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, 200, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.fill();
            //crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(132, 135, 30, 0, 2 * Math.PI);
            crc2.fill();
            //crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "#FFDEAD";
            crc2.arc(132, 105, 10, 0, 2 * Math.PI);
            crc2.arc(142, 105, 10, 0, 2 * Math.PI);
            crc2.arc(152, 110, 10, 0, 2 * Math.PI);
            crc2.arc(142, 110, 10, 0, 2 * Math.PI);
            crc2.arc(132, 110, 10, 0, 2 * Math.PI);
            crc2.arc(122, 110, 10, 0, 2 * Math.PI);
            crc2.arc(117, 107, 10, 0, 2 * Math.PI);

            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, 130, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, 130, 2.5, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            crc2.arc(132, 150, 10, 0, Math.PI, true);
            crc2.closePath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(168, 200, 7, 0, 2 * Math.PI);
            crc2.arc(93, 200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, 245, 10, 0, 2 * Math.PI);
            crc2.arc(110, 245, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.save();
            crc2.restore();

        }

        stressed(): void {
            //stressed customer
            //Body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, 200, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "lightblue";
            crc2.fill();
            //crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(132, 135, 30, 0, 2 * Math.PI);
            crc2.fill();
            //crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "#FFDEAD";
            crc2.arc(132, 105, 10, 0, 2 * Math.PI);
            crc2.arc(142, 105, 10, 0, 2 * Math.PI);
            crc2.arc(152, 110, 10, 0, 2 * Math.PI);
            crc2.arc(142, 110, 10, 0, 2 * Math.PI);
            crc2.arc(132, 110, 10, 0, 2 * Math.PI);
            crc2.arc(122, 110, 10, 0, 2 * Math.PI);
            crc2.arc(117, 107, 10, 0, 2 * Math.PI);

            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, 130, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, 130, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            //zu 10,10 gehen
            crc2.moveTo(123, 145);
            //bis 200,10 zeichnen
            crc2.lineTo(140, 145);
            //Pfad schließen
            crc2.closePath();
            //Linie Zeichnen
            crc2.stroke();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(168, 200, 7, 0, 2 * Math.PI);
            crc2.arc(93, 200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, 245, 10, 0, 2 * Math.PI);
            crc2.arc(110, 245, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.save();
            crc2.restore();
        }

        mood(): void {

        }

        public move(_timeslice: number): void {
            
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        /*talk(): void {
            let kebap: string[] = ["flatbread", "vegan meat", "salad", "red cabbage"];
            let lahmacun: string[] = ["flatbread", "vegan mincemeat", "tomatosauce"];
            let yufka: string[] = ["thin flatbread", "vegan meat", "salad", "herb"];
            let toppings: string[] = ["corn", "tomatoes", "onions"];
            let sauces: string[] = ["garlic sauce", "hot sauce", "yoghurt sauce"];
            let words: string[] = ["with", "without"];
        } */
    }
}