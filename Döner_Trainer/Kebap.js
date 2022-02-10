"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Kebap extends EIA2_Endabgabe_Döner_Trainer.Ingredient {
        constructor(_position, _amount, _containeramount) {
            super(_position, _amount, _containeramount);
        }
        draw() {
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 19, 45, 0, 1 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#bfa290";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Kebap = Kebap;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Kebap.js.map