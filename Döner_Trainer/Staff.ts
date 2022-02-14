namespace EIA2_Endabgabe_Döner_Trainer {
    export class Staff extends Person {

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);


            this.position = new Vector(_position.x, _position.y);
            this.velocity = new Vector(0, 0);
            this.velocity.set(500, 200);
        }

        public draw(): void {
            //Body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, -200, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#CD5C5C";
            crc2.fill();
            //crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(132, -265, 30, 0, 2 * Math.PI);
            crc2.fill();
            //crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(132, -290, 10, 0, 2 * Math.PI);
            crc2.arc(142, -290, 10, 0, 2 * Math.PI);
            crc2.arc(152, -280, 10, 0, 2 * Math.PI);
            crc2.arc(142, -280, 10, 0, 2 * Math.PI);
            crc2.arc(132, -280, 10, 0, 2 * Math.PI);
            crc2.arc(122, -280, 10, 0, 2 * Math.PI);
            crc2.arc(122, -290, 10, 0, 2 * Math.PI);
            crc2.arc(112, -280, 10, 0, 2 * Math.PI);

            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(120, -260, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, -260, 2.5, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            crc2.arc(130, -250, 10, 0, Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(168, -200, 7, 0, 2 * Math.PI);
            crc2.arc(93, -200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, -150, 10, 0, 2 * Math.PI);
            crc2.arc(110, -150, 10, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
            crc2.save();
            crc2.restore();


        }
        public mad(): void {
            //mad staff
            //Body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, -200, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#CD5C5C";
            crc2.fill();
            //crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(132, -265, 30, 0, 2 * Math.PI);
            crc2.fill();
            //crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(132, -290, 10, 0, 2 * Math.PI);
            crc2.arc(142, -290, 10, 0, 2 * Math.PI);
            crc2.arc(152, -280, 10, 0, 2 * Math.PI);
            crc2.arc(142, -280, 10, 0, 2 * Math.PI);
            crc2.arc(132, -280, 10, 0, 2 * Math.PI);
            crc2.arc(122, -280, 10, 0, 2 * Math.PI);
            crc2.arc(122, -290, 10, 0, 2 * Math.PI);
            crc2.arc(112, -280, 10, 0, 2 * Math.PI);

            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(120, -260, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, -260, 2.5, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            crc2.arc(130, -243, 10, 0, Math.PI, true);
            crc2.closePath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(168, -200, 7, 0, 2 * Math.PI);
            crc2.arc(93, -200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, -150, 10, 0, 2 * Math.PI);
            crc2.arc(110, -150, 10, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
            crc2.save();
            crc2.restore();


        }

        public sleep(): void {
            //staff sleeping
            //Body
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, -200, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#CD5C5C";
            crc2.fill();
            //crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(132, -265, 30, 0, 2 * Math.PI);
            crc2.fill();
            //crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(132, -290, 10, 0, 2 * Math.PI);
            crc2.arc(142, -290, 10, 0, 2 * Math.PI);
            crc2.arc(152, -280, 10, 0, 2 * Math.PI);
            crc2.arc(142, -280, 10, 0, 2 * Math.PI);
            crc2.arc(132, -280, 10, 0, 2 * Math.PI);
            crc2.arc(122, -280, 10, 0, 2 * Math.PI);
            crc2.arc(122, -290, 10, 0, 2 * Math.PI);
            crc2.arc(112, -280, 10, 0, 2 * Math.PI);

            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, -260, 3, 0, 1 * Math.PI);
            crc2.arc(138, -260, 3, 0, 1 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            //zu 10,10 gehen
            crc2.moveTo(123, -250);
            //bis 200,10 zeichnen
            crc2.lineTo(140, -250);
            //Pfad schließen
            crc2.closePath();
            //Linie Zeichnen
            crc2.stroke();

            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FFDAB9";
            crc2.arc(168, -200, 7, 0, 2 * Math.PI);
            crc2.arc(93, -200, 7, 0, 2 * Math.PI);
            //crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, -150, 10, 0, 2 * Math.PI);
            crc2.arc(110, -150, 10, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
            crc2.save();
            crc2.restore();

        }

        public move(_position: Vector, _velocity: Vector, _timeslice: number): void {

            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }
    }
}
