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
    let staffAmount: number;
    let customerAmount: number;
    let storageCapacity: number;
    let containerCapacity: number;
    let staffRestperiod: number;

    // let kebap: string[] = ["flatbread", "vegan meat"];
    // let lahmacun: string[] = ["flatbread", "vegan mincemeat", "tomatosauce"];
    // let yufka: string[] = ["thin flatbread", "vegan meat", "salad", "herb"];


    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;

    let ingredients: Ingredient[] = [];
    let imgData: ImageData;

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
        console.log(formData);

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");

        body.removeChild(form);

        staffAmount = Number(formData.get("staffamount"));
        customerAmount = Number(formData.get("customeramount"));
        storageCapacity = Number(formData.get("storagecapacity"));
        containerCapacity = Number(formData.get("containercapacity"));
        staffRestperiod = Number(formData.get("restperiod"));





        buildGamescreen();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log(staffAmount, customerAmount, storageCapacity, containerCapacity, staffRestperiod);



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
        drawSalad();

        window.setInterval(update, 20);





    }

    function drawCounter(_position: Vector): void {
        //draw counter
        crc2.beginPath();
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(_position.x, _position.y, 800, 150);

    }

    function drawCuttingboard(_position: Vector): void {
        //draw cuttingboard
        crc2.beginPath();
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(_position.x, _position.y, 200, 100);
        crc2.fillStyle = "#B9773A";
        crc2.fillRect(_position.x + 25, _position.y + 9, 150, 80);
        //draw Knife
        crc2.beginPath();
        crc2.fillStyle = "#C0C0C0";
        crc2.arc(897, 115, 100, 0, 0.25 * Math.PI);
        crc2.fill();
        crc2.closePath();
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

    function drawSalad(): void {

        let salad: Salad = new Salad(new Vector(800, 470));
        ingredients.push(salad);
        //crc2.putImageData(imgData, 0, 0);
        for (let ingredient of ingredients) {

            ingredient.draw();
        }


        console.log(ingredients);

    }

    function update(): void {

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        



        


    }

}

