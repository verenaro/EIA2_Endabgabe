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
    //let staffChoice: number;

    let kebapContainer: number = containerCapacity;
    //let kebapStorage: number = storageCapacity;


    // let kebap: string[] = ["flatbread", "vegan meat"];
    // let lahmacun: string[] = ["flatbread", "vegan mincemeat", "tomatosauce"];
    // let yufka: string[] = ["thin flatbread", "vegan meat", "salad", "herb"];


    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;

    let ingredients: Ingredient[] = [];
    let staffs: Staff[] = [];
    let customers: Customer[] = [];

    let basis: string[] = ["Kebap", "Yufka", "Lahmacun"];
    let topping: string[] = ["corn", "salad", "red cabbage", "onion", "tomato"];
    let sauce: string[] = ["sauce"];
    let word: string[] = ["with", "without"];

    //let words: string[] = ["with", "without"];
    //let imgData: ImageData;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        // start Button deklarieren, prepareGame aufrufen
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton")!;
        startButton.addEventListener("click", prepareGame);

        //Elemente verstecken
        document.getElementById("gamefield").hidden = true;
        document.getElementById("storage").hidden = true;
        document.getElementById("containerstorage").hidden = true;
        document.getElementById("order").hidden = true;
        document.getElementById("reorder").hidden = true;
        document.getElementById("finishorder").hidden = true;
        document.getElementById("kebap").hidden = true;
        document.getElementById("yufka").hidden = true;
        document.getElementById("lahmacun").hidden = true;
        document.getElementById("salad").hidden = true;
        document.getElementById("tomato").hidden = true;
        document.getElementById("onion").hidden = true;
        document.getElementById("corn").hidden = true;
        document.getElementById("cabbage").hidden = true;
        document.getElementById("sauce").hidden = true;
        document.getElementById("cuttingboard").hidden = true;
        document.getElementById("happiness").hidden = true;
        document.getElementById("color").hidden = true;
        document.getElementById("progress").hidden = true;

    }

    function prepareGame(_event: Event): void {

        formData = new FormData(document.forms[0]);
        console.log(formData);

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");

        body.removeChild(form);

        //Werte aus dem FormData als Variablen speichern
        staffAmount = Number(formData.get("staffamount"));
        customerAmount = Number(formData.get("customeramount"));
        storageCapacity = Number(formData.get("storagecapacity"));
        containerCapacity = Number(formData.get("containercapacity"));
        staffRestperiod = Number(formData.get("restperiod"));




        buildGamescreen();
        //imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log(staffAmount, customerAmount, storageCapacity, containerCapacity, staffRestperiod);



    }


    function buildGamescreen(): void {

        //Elemente anzeigen
        document.getElementById("gamefield").hidden = false;
        document.getElementById("storage").hidden = false;
        document.getElementById("containerstorage").hidden = false;
        document.getElementById("order").hidden = false;
        document.getElementById("reorder").hidden = false;
        document.getElementById("finishorder").hidden = false;
        document.getElementById("kebap").hidden = false;
        document.getElementById("yufka").hidden = false;
        document.getElementById("lahmacun").hidden = false;
        document.getElementById("salad").hidden = false;
        document.getElementById("tomato").hidden = false;
        document.getElementById("onion").hidden = false;
        document.getElementById("corn").hidden = false;
        document.getElementById("cabbage").hidden = false;
        document.getElementById("sauce").hidden = false;
        document.getElementById("cuttingboard").hidden = false;
        document.getElementById("happiness").hidden = false;
        document.getElementById("color").hidden = false;
        document.getElementById("progress").hidden = false;



        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        //calls
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
        getOrder();

       


        //Button deklarieren für Ingredients
        //let finishorder: HTMLButtonElement;
        //let kuttingboard: HTMLButtonElement;
        let kebap: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#kebap");
        //let yufka: HTMLButtonElement;
        //let lahmacun: HTMLButtonElement;
        //let corn: HTMLButtonElement;
        //let sauce: HTMLButtonElement;
        //let salad: HTMLButtonElement;
        //let cabbage: HTMLButtonElement;
        //let onion: HTMLButtonElement;
        //let tomato: HTMLButtonElement;

        //click Listener installieren
        //finishorder.addEventListener("click", compareOrder);
        //kuttingboard.addEventListener("click", cutIngredients);
        kebap.addEventListener("click", collectKebap);
        //yufka.addEventListener("click", collectYufke);
        //lahmacun.addEventListener("click", collectLahmacun);
        //corn.addEventListener("click", collectCorn);
        //sauce.addEventListener("click", collectSauce);
        //salad.addEventListener("click", collectSalad);
        //cabbage.addEventListener("click", collectCabbage);
        //onion.addEventListener("click", collectOnion);
        //tomato.addEventListener("click", collectTomato);

        console.log();

        window.setInterval(update, 20);

        setInterval(drawCustomer, 60000);


    }

    function drawCounter(_position: Vector): void {
        //Theke zeichnen
        crc2.beginPath();
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(_position.x, _position.y, 800, 150);

    }

    function drawCuttingboard(_position: Vector): void {
        //Schneidebrett zeichnen
        crc2.beginPath();
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(_position.x, _position.y, 200, 100);
        crc2.fillStyle = "#B9773A";
        crc2.fillRect(_position.x + 25, _position.y + 9, 150, 80);
        //Messer zeichnen
        crc2.beginPath();
        crc2.fillStyle = "#C0C0C0";
        crc2.arc(897, 115, 100, 0, 0.25 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawContainer(_position: Vector): void {
        //Container zeichnen
        crc2.fillStyle = "#696969";
        crc2.fillRect(_position.x, _position.y, 65, 65);
        crc2.fillRect(_position.x - 100, _position.y, 65, 65);
        crc2.fillRect(_position.x - 200, _position.y, 65, 65);
        crc2.fillRect(_position.x, _position.y + 85, 65, 65);
        crc2.fillRect(_position.x - 100, _position.y + 85, 65, 65);
        crc2.fillRect(_position.x - 200, _position.y + 85, 65, 65);

    }

    //alle Zutaten zeichnen

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
        let lahmacun: Lahmacun = new Lahmacun(new Vector(-100, -55), storageCapacity, containerCapacity);
        ingredients.push(lahmacun);

        for (let ingredient of ingredients) {

            ingredient.draw();

        }
    }

    // end draw Ingredients

    function update(): void {

        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //crc2.putImageData(imgData, 0, 0);



    }

    function collectKebap(_event: Event): void {


        for (let x: number = kebapContainer = containerCapacity; x--;) {


            console.log();

        }


    }
    // Containerstand anzeigen

    function showContainerCapacity(): void {
        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "storage:" + "<br>" + "<br>" + storageCapacity + " kg Kebap bread " + "<br>" + storageCapacity + " kg Yufka bread" + "<br>" + storageCapacity + " kg Lahmacun bread " + "<br>" + storageCapacity + " kg salad" + "<br>" + storageCapacity + " kg corn" + "<br>" + storageCapacity + " kg tomato" + "<br>" + storageCapacity + " kg sauce" + "<br>" + storageCapacity + " kg onion" + "<br>" + storageCapacity + " kg red cabbage" + "<br>";
        let containerDiv: HTMLElement = document.getElementById("containerstorage");
        containerDiv.innerHTML = "container storage:" + "<br>" + "<br>" + kebapContainer + " g Kebap bread " + "<br>" + containerCapacity + " g Yufka bread" + "<br>" + containerCapacity + " g Lahmacun bread " + "<br>" + containerCapacity + " g salad" + "<br>" + containerCapacity + " g corn" + "<br>" + containerCapacity + " g tomato" + "<br>" + containerCapacity + " g sauce" + "<br>" + containerCapacity + " g onion" + "<br>" + containerCapacity + " g red cabbage" + "<br>";
    }

    // Mitarbeiter zeichnen lassen
    function drawStaff(): void {

        for (let i: number = 0; i < staffAmount; i++) {
            let staff: Staff = new Staff(new Vector(-100, 0));

            staffs.push(staff);

        }

        for (let staff of staffs) {
            staff.draw();

        }

    }


    // Kunden zeichnen lassen
    function drawCustomer(): void {

        let interval: number = setInterval(

            function (): void {



                let customer: Customer = new Customer(new Vector(-100, 0));


                customers.push(customer);
                
                customer.draw();

                if (customers.length == customerAmount) {
                    clearInterval(interval);
                    customers.length = 0;
                    
                    
                }

            }, 2000);


    }


    // Bestellung anzeigen lassen
    function getOrder(): void {

        let object1: number = Math.floor(Math.random() * basis.length);
        let object2: number = Math.floor(Math.random() * topping.length);
        let object3: number = Math.floor(Math.random() * sauce.length);
        let object4: number = Math.floor(Math.random() * word.length);


        let order: string[] = ["I would like one" + " " + basis[object1] + " " + "with" + " " + topping[object2] + " " + "and" + " " + word[object4] + " " + sauce[object3] + "." + " " + "Thank you."];

        let orderDiv: HTMLElement = document.getElementById("order");
        orderDiv.innerHTML = "order:" + "<br>" + order;

    }



}

