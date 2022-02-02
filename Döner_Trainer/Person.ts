namespace EIA2_Endabgabe_Döner_Trainer {

    export abstract class Person {

        public position: Vector;
        public velocity: Vector;
        public size: Vector;
        public type: string;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
        }
        public abstract move(): void;

        public abstract draw(): void;

        public abstract mood(): void;


    }

}


