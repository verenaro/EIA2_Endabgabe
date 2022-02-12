namespace EIA2_Endabgabe_Döner_Trainer {
    export class Staff extends Person {

        constructor(_position: Vector) {
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
        }

        draw(): void {
            //Body
            crc2.beginPath();
            //crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, 19, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#CD5C5C";
            crc2.fill();
            crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.fillStyle = "#FBF2EF";
            crc2.arc(132, -43, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(132, -69, 10, 0, 2 * Math.PI);
            crc2.arc(140, -69, 10, 0, 2 * Math.PI);
            crc2.arc(154, -68, 10, 0, 2 * Math.PI);
            crc2.arc(122, -69, 10, 0, 2 * Math.PI);
            crc2.arc(132, -79, 10, 0, 2 * Math.PI);
            crc2.arc(143, -79, 10, 0, 2 * Math.PI);
            crc2.arc(122, -79, 10, 0, 2 * Math.PI);
            crc2.arc(111, -75, 10, 0, 2 * Math.PI);
            crc2.arc(114, -65, 10, 0, 2 * Math.PI);
            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, -47, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, -47, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            crc2.arc(132, -35, 10, 0, Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FBF2EF";
            crc2.arc(168, 15, 7, 0, 2 * Math.PI);
            crc2.arc(93, 15, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, 60, 10, 0, 2 * Math.PI);
            crc2.arc(110, 60, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.closePath();

            crc2.restore();
            crc2.save();
            
        }
        mad(): void {
            //mad staff
            //Body
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, 19, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#CD5C5C";
            crc2.fill();
            crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.fillStyle = "#FBF2EF";
            crc2.arc(132, -43, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "#FFEFd5";
            crc2.arc(132, -69, 10, 0, 2 * Math.PI);
            crc2.arc(140, -69, 10, 0, 2 * Math.PI);
            crc2.arc(154, -68, 10, 0, 2 * Math.PI);
            crc2.arc(122, -69, 10, 0, 2 * Math.PI);
            crc2.arc(132, -79, 10, 0, 2 * Math.PI);
            crc2.arc(143, -79, 10, 0, 2 * Math.PI);
            crc2.arc(122, -79, 10, 0, 2 * Math.PI);
            crc2.arc(111, -75, 10, 0, 2 * Math.PI);
            crc2.arc(114, -65, 10, 0, 2 * Math.PI);
            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, -47, 2.5, 0, 2 * Math.PI);
            crc2.arc(138, -47, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            crc2.arc(132, -25, 10, 0, Math.PI, true);
            crc2.closePath();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FBF2EF";
            crc2.arc(168, 15, 7, 0, 2 * Math.PI);
            crc2.arc(93, 15, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, 60, 10, 0, 2 * Math.PI);
            crc2.arc(110, 60, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }

        sleep(): void {
            //staff sleeping
            //Body
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(130, 19, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#CD5C5C";
            crc2.fill();
            crc2.closePath();
            //Head
            crc2.beginPath();
            crc2.fillStyle = "#F6D8CE";
            crc2.arc(132, -43, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Hair
            crc2.beginPath();
            crc2.fillStyle = "#8B4513";
            crc2.arc(132, -69, 10, 0, 2 * Math.PI);
            crc2.arc(140, -69, 10, 0, 2 * Math.PI);
            crc2.arc(154, -68, 10, 0, 2 * Math.PI);
            crc2.arc(122, -69, 10, 0, 2 * Math.PI);
            crc2.arc(132, -79, 10, 0, 2 * Math.PI);
            crc2.arc(143, -79, 10, 0, 2 * Math.PI);
            crc2.arc(122, -79, 10, 0, 2 * Math.PI);
            crc2.arc(111, -75, 10, 0, 2 * Math.PI);
            crc2.arc(114, -65, 10, 0, 2 * Math.PI);
            crc2.fill();
            //Eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, -47, 3, 0, 1 * Math.PI);
            crc2.arc(138, -47, 3, 0, 1 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Mouth
            crc2.beginPath();
            //zu 10,10 gehen
            crc2.moveTo(123, -30);
            //bis 200,10 zeichnen
            crc2.lineTo(140, -30);
            //Pfad schließen
            crc2.closePath();
            //Linie Zeichnen
            crc2.stroke();
            //Hands
            crc2.beginPath();
            crc2.fillStyle = "#FBF2EF";
            crc2.arc(168, 15, 7, 0, 2 * Math.PI);
            crc2.arc(93, 15, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Feet
            crc2.beginPath();
            crc2.fillStyle = "grey";
            crc2.arc(150, 60, 10, 0, 2 * Math.PI);
            crc2.arc(110, 60, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.closePath();
        }

        mood(): void {
            console.log("mood");
        }

        move(): void {
            console.log("move");
        }
    }
}