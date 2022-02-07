"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Lahmacun extends EIA2_Endabgabe_Döner_Trainer.Ingredient {
        constructor(_position) {
            super(_position);
        }
        draw() {
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
            EIA2_Endabgabe_Döner_Trainer.crc2.translate(this.position.x, this.position.y);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 19, 45, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#bfa290";
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            //Hackfleisch
            EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
            EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#61380B";
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 15, 20, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, 15, 20, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, 15, 20, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, 5, 20, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, 5, 20, 0, 2 * Math.PI);
            EIA2_Endabgabe_Döner_Trainer.crc2.fill();
            EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
            EIA2_Endabgabe_Döner_Trainer.crc2.restore();
            EIA2_Endabgabe_Döner_Trainer.crc2.save();
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Lahmacun = Lahmacun;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Lahmacun.js.map