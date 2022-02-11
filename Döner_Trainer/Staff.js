"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Staff extends EIA2_Endabgabe_Döner_Trainer.Person {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0);
        }
        draw() {
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 19, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#CD5C5C";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FBF2EF";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -43, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFEFd5";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(154, -68, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(111, -75, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(114, -65, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, -47, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, -47, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -35, 10, 0, Math.PI, false);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.lineWidth = 2;
            EIA2_Endabgabe_Döner_Trainer.crc2.strokeStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FBF2EF";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, 15, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, 15, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, 60, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, 60, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
        }
        mad() {
            //mad staff
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 19, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#CD5C5C";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FBF2EF";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -43, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFEFd5";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(154, -68, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(111, -75, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(114, -65, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, -47, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, -47, 2.5, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -25, 10, 0, Math.PI, true);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.lineWidth = 2;
            EIA2_Endabgabe_Döner_Trainer.crc2.strokeStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FBF2EF";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, 15, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, 15, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, 60, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, 60, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
        }
        sleep() {
            //staff sleeping
            //Body
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 19, 50, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#CD5C5C";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Head
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#F6D8CE";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -43, 30, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Hair
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#8B4513";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(154, -68, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -79, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(111, -75, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(114, -65, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Eyes
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "black";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(125, -47, 3, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(138, -47, 3, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Mouth
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            //zu 10,10 gehen
            EIA2_Endabgabe_Döner_Trainer.crc2.moveTo(123, -30);
            //bis 200,10 zeichnen
            EIA2_Endabgabe_Döner_Trainer.crc2.lineTo(140, -30);
            //Pfad schließen
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Linie Zeichnen
            EIA2_Endabgabe_Döner_Trainer.crc2.stroke();
            //Hands
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FBF2EF";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(168, 15, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(93, 15, 7, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            //Feet
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "grey";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(150, 60, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(110, 60, 10, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        }
        mood() {
        }
        move() {
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Staff = Staff;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Staff.js.map