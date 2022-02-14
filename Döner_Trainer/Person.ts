namespace EIA2_Endabgabe_Döner_Trainer {

    export abstract class Person {

        public velocity: Vector;
        public position: Vector;
        

        constructor(_position: Vector, _velocity: Vector) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        public abstract move(_timeslice: number): void;

        public abstract draw(): void;



    }

}


