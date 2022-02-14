"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Staff extends EIA2_Endabgabe_Döner_Trainer.Person {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            if (_position)
                this.position = _position;
            else
                this.position = new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0);
        }
        draw() {
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, -200, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#CD5C5C";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -265, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "brown";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(152, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(112, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(120, -260, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, -260, 2.5, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, -250, 10, 0, Math.PI, false);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.lineWidth = 2;
            EIA2_Endabgabe_Döner_Trainer.crc2.strokeStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, -200, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, -200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, -150, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, -150, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        }
        mad() {
            //mad staff
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, -200, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#CD5C5C";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -265, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "brown";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(152, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(112, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(120, -260, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, -260, 2.5, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, -243, 10, 0, Math.PI, true);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.lineWidth = 2;
            EIA2_Endabgabe_Döner_Trainer.crc2.strokeStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, -200, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, -200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, -150, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, -150, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        }
        sleep() {
            //staff sleeping
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, -200, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#CD5C5C";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -265, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "brown";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(152, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(142, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -290, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(112, -280, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, -260, 3, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, -260, 3, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            //zu 10,10 gehen
            EIA2_Endabgabe_Döner_Trainer.crc2.moveTo(123, -250);
            //bis 200,10 zeichnen
            EIA2_Endabgabe_Döner_Trainer.crc2.lineTo(140, -250);
            //Pfad schließen
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Linie Zeichnen
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFDAB9";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, -200, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, -200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, -150, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, -150, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        }
        move() {
            console.log("move");
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Staff = Staff;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Staff.js.map