"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Customer extends EIA2_Endabgabe_Döner_Trainer.Person {
        constructor(_position) {
            super(_position);
            this.velocity = new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0);
        }
        draw() {
            //happy customer
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 200, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "lightblue";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 135, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDEAD";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 105, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, 105, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(152, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(117, 107, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, 130, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, 130, 2.5, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 140, 10, 0, Math.PI, false);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.lineWidth = 2;
            EIA2_Endabgabe_Döner_Trainer.crc2.strokeStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, 200, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, 200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, 245, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, 245, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        }
        mad() {
            // mad customer
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 200, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "lightblue";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 135, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDEAD";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 105, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, 105, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(152, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(117, 107, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, 130, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, 130, 2.5, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 150, 10, 0, Math.PI, true);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.lineWidth = 2;
            EIA2_Endabgabe_Döner_Trainer.crc2.strokeStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, 200, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, 200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, 245, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, 245, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        }
        stressed() {
            //stressed customer
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 200, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "lightblue";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 135, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDEAD";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 105, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, 105, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(152, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, 110, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(117, 107, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, 130, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, 130, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            //zu 10,10 gehen
            EIA2_Endabgabe_Döner_Trainer.crc2.moveTo(123, 145);
            //bis 200,10 zeichnen
            EIA2_Endabgabe_Döner_Trainer.crc2.lineTo(140, 145);
            //Pfad schließen
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Linie Zeichnen
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, 200, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, 200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, 245, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, 245, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        }
        mood() {
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += EIA2_Endabgabe_Döner_Trainer.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += EIA2_Endabgabe_Döner_Trainer.crc2.canvas.height;
            if (this.position.x > EIA2_Endabgabe_Döner_Trainer.crc2.canvas.width)
                this.position.x -= EIA2_Endabgabe_Döner_Trainer.crc2.canvas.width;
            if (this.position.y > EIA2_Endabgabe_Döner_Trainer.crc2.canvas.height)
                this.position.y -= EIA2_Endabgabe_Döner_Trainer.crc2.canvas.height;
        }
        talk() {
            let kebap = ["flatbread", "vegan meat", "salad", "red cabbage"];
            let lahmacun = ["flatbread", "vegan mincemeat", "tomatosauce"];
            let yufka = ["thin flatbread", "vegan meat", "salad", "herb"];
            let toppings = ["corn", "tomatoes", "onions"];
            let sauces = ["garlic sauce", "hot sauce", "yoghurt sauce"];
            let words = ["with", "without"];
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Customer = Customer;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Customer.js.map