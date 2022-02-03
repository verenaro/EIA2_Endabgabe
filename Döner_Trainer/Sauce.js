"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Sauce extends EIA2_Endabgabe_Döner_Trainer.Ingredient {
        constructor(_position, _amount, _containeramount, _type, _size) {
            super(_position, _amount, _containeramount, _type, _size);
        }
        draw() {
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#F5F5DC";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 9, 15, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, 9, 15, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, 9, 15, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -1, 15, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -1, 15, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Sauce = Sauce;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Sauce.js.map