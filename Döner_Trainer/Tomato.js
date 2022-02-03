"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Tomato extends EIA2_Endabgabe_Döner_Trainer.Ingredient {
        constructor(_position, _amount, _containeramount, _type, _size) {
            super(_position, _amount, _containeramount);
        }
        draw() {
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "red";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(154, -68, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -79, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(111, -75, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(114, -65, 10, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Tomato = Tomato;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Tomato.js.map