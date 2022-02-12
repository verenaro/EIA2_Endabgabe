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
    let staffs: Staff[] = [];
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
        document.getElementById("reorder").hidden = true;
        document.getElementById("refill").hidden = true;
        document.getElementById("finishorder").hidden = true;



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
        document.getElementById("reorder").hidden = false;
        document.getElementById("refill").hidden = false;
        document.getElementById("finishorder").hidden = false;



        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        drawCounter(new Vector(550, 370));
        drawCuttingboard(new Vector(800, 100));
        drawContainer(new Vector(1100, 370));
        drawSalad();
        drawTomato();
        drawCorn();
        drawOnion();
        drawCabbage();
        drawSauce();
        drawKebap();
        drawYufka();
        drawLahmacun();
        showContainerCapacity();
        drawStaff();




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

    // draw Ingredients

    function drawSalad(): void {

        let salad: Salad = new Salad(new Vector(800, 470), storageCapacity, containerCapacity);
        let salad2: Salad = new Salad(new Vector(-70, -230), storageCapacity, containerCapacity);
        ingredients.push(salad, salad2);

    }

    function drawTomato(): void {

        let tomato: Tomato = new Tomato(new Vector(3, -230), storageCapacity, containerCapacity);
        let tomato2: Tomato = new Tomato(new Vector(100, 3), storageCapacity, containerCapacity);
        ingredients.push(tomato, tomato2);

    }

    function drawCorn(): void {

        let corn: Corn = new Corn(new Vector(200, -70), storageCapacity, containerCapacity);
        ingredients.push(corn);

    }

    function drawOnion(): void {

        let onion: Onion = new Onion(new Vector(100, 80), storageCapacity, containerCapacity);
        let onion2: Onion = new Onion(new Vector(-70, -270), storageCapacity, containerCapacity);
        ingredients.push(onion, onion2);

    }

    function drawCabbage(): void {

        let cabbage: Cabbage = new Cabbage(new Vector(2, 80), storageCapacity, containerCapacity);
        let cabbage2: Cabbage = new Cabbage(new Vector(5, -270), storageCapacity, containerCapacity);
        ingredients.push(cabbage, cabbage2);

    }

    function drawSauce(): void {

        let sauce: Sauce = new Sauce(new Vector(200, 7), storageCapacity, containerCapacity);
        ingredients.push(sauce);

    }

    function drawKebap(): void {
        let kebap: Kebap = new Kebap(new Vector(-320, -60), storageCapacity, containerCapacity);
        ingredients.push(kebap);

    }

    function drawYufka(): void {
        let yufka: Yufka = new Yufka(new Vector(-120, -30), storageCapacity, containerCapacity);
        ingredients.push(yufka);

    }

    function drawLahmacun(): void {
        let lahmacun: Lahmacun = new Lahmacun(new Vector(-100, -40), storageCapacity, containerCapacity);
        ingredients.push(lahmacun);

        for (let ingredient of ingredients) {

            ingredient.draw();

        }
    }

    // end draw Ingredients

    function update(): void {

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

    }

    function showContainerCapacity(): void {
        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "storage:" + "<br>" + "<br>" + storageCapacity + " kg Kebap bread " + "<br>" + storageCapacity + " kg Yufka bread" + "<br>" + storageCapacity + " kg Lahmacun bread " + "<br>" + storageCapacity + " kg salad" + "<br>" + storageCapacity + " kg corn" + "<br>" + storageCapacity + " kg tomato" + "<br>" + storageCapacity + " kg sauce" + "<br>" + storageCapacity + " kg onion" + "<br>" + storageCapacity + " kg red cabbage" + "<br>";
        let containerDiv: HTMLElement = document.getElementById("containerstorage");
        containerDiv.innerHTML = "container storage:" + "<br>" + "<br>" + containerCapacity + " g Kebap bread " + "<br>" + containerCapacity + " g Yufka bread" + "<br>" + containerCapacity + " g Lahmacun bread " + "<br>" + containerCapacity + " g salad" + "<br>" + containerCapacity + " g corn" + "<br>" + containerCapacity + " g tomato" + "<br>" + containerCapacity + " g sauce" + "<br>" + containerCapacity + " g onion" + "<br>" + containerCapacity + " g red cabbage" + "<br>";
    }

    function drawStaff(): void {


    
        for (let i: number = 0; i < staffAmount; i++) {
            let staff: Staff = new Staff(new Vector(-200, -200));


            staffs.push(staff);

           

        }
        for (let staff of staffs) {
            staff.draw();
        }
        console.log(staffs);

    }

}

