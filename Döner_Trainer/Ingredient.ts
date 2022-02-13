namespace EIA2_Endabgabe_Döner_Trainer {
    export class Ingredient {
        position: Vector;
        amount: number;
        containeramount: number;


        constructor(_position: Vector, _amount: number, _containeramount: number) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.amount = _amount;
            this.containeramount = _containeramount;


        }

        draw(): void {
            //
        }
    }
}