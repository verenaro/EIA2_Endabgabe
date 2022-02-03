/*Endabgabe EIA2_Döner_Trainer
Name: Verena Rothweiler
Matrikel: 270156
Datum: 
Quellen: Zusammenarbeit mit Neslisah Koc
*/
namespace EIA2_Endabgabe_Döner_Trainer {

    let formData: FormData;
    //let gameStart: boolean = false;
    //let gameTimer: number;
    //let countDown: number;
    //let time: HTMLDivElement;
    // let staffAmount: number;
    // let storageCapacity: number;
    // let containerCapacity: number;
    // let kebap: string[] = ["flatbread", "vegan meat"];
    // let lahmacun: string[] = ["flatbread", "vegan mincemeat", "tomatosauce"];
    // let yufka: string[] = ["thin flatbread", "vegan meat", "salad", "herb"];


    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton")!;
        startButton.addEventListener("click", prepareGame);

        document.getElementById("gamefield").hidden = true;
        document.getElementById("time").hidden = true;
        document.getElementById("storage").hidden = true;
        document.getElementById("containerstorage").hidden = true;
        document.getElementById("order").hidden = true;

    }

    function prepareGame(_event: Event): void {

        formData = new FormData(document.forms[0]);

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");

        body.removeChild(form);
        buildGamescreen();
        console.log(formData);

    }

    function buildGamescreen(): void {

        document.getElementById("gamefield").hidden = false;
        document.getElementById("time").hidden = false;
        document.getElementById("storage").hidden = false;
        document.getElementById("containerstorage").hidden = false;
        document.getElementById("order").hidden = false;



        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        drawCounter(new Vector(550, 370));
        drawCuttingboard(new Vector(800, 100));
        drawContainer(new Vector(1100, 370));
        drawSalad(new Vector(800, 470));
        drawTomato(new Vector(100, 0));
        drawLahmacun(new Vector(0, 0));
        drawCorn(new Vector(0, 0));
        

    }

    function drawCounter(_position: Vector): void {
        //draw counter
        crc2.beginPath();
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(_position.x, _position.y, 800, 150);
    }

    function drawCuttingboard(_position: Vector): void {
        //draw cuttingboard
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(_position.x, _position.y, 200, 100);
        crc2.save();
        crc2.fillStyle = "#B9773A";
        crc2.fillRect(_position.x + 25, _position.y + 9, 150, 80);
    }

    function drawContainer(_position: Vector): void {
        //draw container
        crc2.fillStyle = "#696969";
        crc2.fillRect(_position.x, _position.y, 65, 65);
        crc2.fillRect(_position.x - 100, _position.y, 65, 65);
        crc2.fillRect(_position.x - 200, _position.y, 65, 65);
        crc2.fillRect(_position.x, _position.y + 85, 65, 65);
        crc2.fillRect(_position.x - 100, _position.y + 85, 65, 65);
        crc2.fillRect(_position.x - 200, _position.y + 85, 65, 65);

    }


    function drawSalad(_position: Vector): void {
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "green";
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
    }
    function drawTomato(_position: Vector): void {
        crc2.translate(_position.x - 170, _position.y - 230);
        crc2.beginPath();
        crc2.fillStyle = "red";
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
        crc2.closePath();
        crc2.save();
        crc2.restore();
        //Tomatoes Cuttingboard
        crc2.translate(_position.x + 70, _position.y + 230);
        crc2.beginPath();
        crc2.fillStyle = "red";
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
        crc2.closePath();

    }

    function drawLahmacun(_position: Vector): void {
        crc2.translate(_position.x - 410, _position.y - 40);
        crc2.beginPath();
        crc2.arc(130, 19, 45, 0, 2 * Math.PI);
        crc2.fillStyle = "#bfa290";
        crc2.fill();
        crc2.closePath();
        //Hackfleisch
        crc2.translate(_position.x, _position.y + 100);
        crc2.beginPath();
        crc2.fillStyle = "#61380B";
        crc2.arc(132, -69, 5, 0, 2 * Math.PI);
        crc2.arc(140, -69, 5, 0, 2 * Math.PI);
        crc2.arc(122, -69, 5, 0, 2 * Math.PI);
        crc2.arc(132, -79, 5, 0, 2 * Math.PI);
        crc2.arc(143, -79, 5, 0, 2 * Math.PI);

        crc2.fill();
        crc2.closePath();
    }

    function drawCorn(_position: Vector): void {
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "yellow";
        crc2.arc(132, -69, 5, 0, 2 * Math.PI);
        crc2.arc(140, -69, 5, 0, 2 * Math.PI);
        crc2.arc(122, -69, 5, 0, 2 * Math.PI);
        crc2.arc(132, -79, 5, 0, 2 * Math.PI);
        crc2.arc(143, -79, 5, 0, 2 * Math.PI);
    }
    




}

