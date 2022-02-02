"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Customer extends EIA2_Endabgabe_Döner_Trainer.Person {
        constructor(_position, _velocity, _type, _size) {
            super(_position);
        }
        draw() {
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(+200 + this.position.x, 40 + this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "brown";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, -27, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(131, -19, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, 10, 3, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, 10, 3, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Hands2
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "brown";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, 45, 5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(120, 45, 5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        }
        mood() {
        }
        move() {
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