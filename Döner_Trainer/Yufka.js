"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Yufka extends EIA2_Endabgabe_Döner_Trainer.Ingredient {
        constructor(_position, _amount, _containeramount) {
            super(_position, _amount, _containeramount);
        }
        draw() {
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#bfa290";
            EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(this.position.x, this.position.y, 80, 30);
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#A0522D";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(-120, -14.7, 15, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#bfa290";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(-43, -15, 15, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Yufka = Yufka;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Yufka.js.map