"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Ingredient {
        position;
        amount;
        containeramount;
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0);
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Ingredient = Ingredient;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Ingredient.js.map