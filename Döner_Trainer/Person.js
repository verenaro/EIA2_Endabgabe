"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    class Person {
        position;
        velocity;
        type;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0);
            this.velocity = new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0);
        }
    }
    EIA2_Endabgabe_Döner_Trainer.Person = Person;
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Person.js.map