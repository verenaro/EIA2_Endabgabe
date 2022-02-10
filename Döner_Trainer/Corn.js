"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Corn extends EIA2_Endabgabe_Döner_Trainer.Ingredient {
        constructor(_position, _amount, _containeramount) {
            super(_position, _amount, _containeramount);
        }
        draw() {
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#FFD700";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 9, 4, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, 9, 4, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, 9, 4, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -1, 4, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -1, 4, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Corn = Corn;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Corn.js.map