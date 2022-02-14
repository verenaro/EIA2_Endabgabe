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



    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;

    let ingredients: Ingredient[] = [];
    let staffs: Staff[] = [];
    let customers: Customer[] = [];
    let order: string[] = [];
    let customerorder: string[] = [];


    let basis: string[] = ["Kebap with vegan meat", "Yufka with vegan meat", "Lahmacun with vegan minced meat"];
    let topping: string[] = ["corn", "salad", "red cabbage", "onion", "tomato"];
    let sauce: string[] = ["sauce"];

    //neue Containerwerte


    interface Storage {
        salad: number;
        cabbage: number;
        onion: number;
        corn: number;
        tomato: number;

    }

    let storageLeft: Storage;
    let ingredientLeft: Storage;


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
        document.getElementById("selectedingredients").hidden = true;

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

        storageLeft = {
            salad: containerCapacity,
            cabbage: containerCapacity,
            onion: containerCapacity,
            corn: containerCapacity,
            tomato: containerCapacity
        };

        ingredientLeft = {
            salad: storageCapacity,
            cabbage: storageCapacity,
            onion: storageCapacity,
            corn: storageCapacity,
            tomato: storageCapacity
        };

        //imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log(staffAmount, customerAmount, storageCapacity, containerCapacity, staffRestperiod);

        buildGamescreen();

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
        document.getElementById("selectedingredients").hidden = false;



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
        selectedIngredients();




        //Button deklarieren für Ingredients
        let finishorder: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#finishorder");
        let kebap: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#kebap");
        let yufka: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#yufka");
        let lahmacun: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#lahmacun");
        let corn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#corn");
        let salad: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#salad");
        let cabbage: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#cabbage");
        let onion: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#onion");
        let tomato: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#tomato");
        let refill: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#cuttingboard");
        let reorder: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#reorder");
        let sauce: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#sauce");




        //click Listener installieren
        finishorder.addEventListener("click", compareOrder);
        //cuttingboard.addEventListener("click", cutIngredients);
        kebap.addEventListener("click", updateKebap);
        yufka.addEventListener("click", updateYufka);
        lahmacun.addEventListener("click", updateLahmacun);
        corn.addEventListener("click", updateCorn);
        salad.addEventListener("click", updateSalad);
        cabbage.addEventListener("click", updateCabbage);
        onion.addEventListener("click", updateOnion);
        tomato.addEventListener("click", updateTomato);
        refill.addEventListener("click", refillContainer);
        reorder.addEventListener("click", reorderIngredients);
        sauce.addEventListener("click", updateSauce);

        console.log(onion);

        window.setInterval(update, 20);

        setInterval(drawCustomer, 60000);


    }
    function update(): void {

        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //crc2.putImageData(imgData, 0, 0);



    }
    // Containerstand anzeigen

    function showContainerCapacity(): void {
        let storageDiv: HTMLElement = document.getElementById("storage");
        storageDiv.innerHTML = "storage:" + "<br>" + "<br>" + ingredientLeft.onion + " g onions " + "<br>" + ingredientLeft.corn + " g of corn" + "<br>" + ingredientLeft.tomato + " g of tomatoes " + "<br>" + ingredientLeft.salad + " g of salad" + "<br>" + ingredientLeft.cabbage + " g of cabbage" + "<br>";
        let containerDiv: HTMLElement = document.getElementById("containerstorage");
        containerDiv.innerHTML = "container storage:" + "<br>" + "<br>" + storageLeft.onion + " g of onion " + "<br>" + storageLeft.corn + " g of corn " + "<br>" + storageLeft.tomato + " g of tomato " + "<br>" + storageLeft.salad + " g of salad" + "<br>" + storageLeft.cabbage + " g of cabbage";
    }

    function reorderIngredients(_event: Event): void {
        ingredientLeft = {
            salad: storageCapacity,
            cabbage: storageCapacity,
            onion: storageCapacity,
            corn: storageCapacity,
            tomato: storageCapacity
        };
        showContainerCapacity();
    }

    function refillContainer(_event: Event): void {
        storageLeft = {
            salad: containerCapacity,
            cabbage: containerCapacity,
            onion: containerCapacity,
            corn: containerCapacity,
            tomato: containerCapacity
        };
        showContainerCapacity();
    }

    function updateSalad(_event: Event): void {

        let element: string = " salad, ";

        order.push(element);

        storageLeft.salad -= 30;
        if (storageLeft.salad <= 0) {
            alert("please cut new salad");
        }

        document.getElementById("selectedingredients").innerHTML += element;

        ingredientLeft.salad -= storageLeft.salad;


        showContainerCapacity();
    }

    function updateCabbage(_event: Event): void {

        let element: string = " red cabbage, ";
        order.push(element);

        storageLeft.cabbage -= 30;

        if (storageLeft.cabbage <= 0) {
            alert("please cut new cabbage");
        }
        document.getElementById("selectedingredients").innerHTML += element;

        ingredientLeft.cabbage -= storageLeft.cabbage;

        showContainerCapacity();

    }

    function updateOnion(_event: Event): void {

        let element: string = " onion, ";
        order.push(element);

        storageLeft.onion -= 20;

        if (storageLeft.onion <= 0) {
            alert("please cut new onions");
        }

        document.getElementById("selectedingredients").innerHTML += element;

        ingredientLeft.onion -= storageLeft.onion;

        showContainerCapacity();

    }
    function updateCorn(_event: Event): void {

        let element: string = " corn, ";
        order.push(element);

        storageLeft.corn -= 25;

        if (storageLeft.corn <= 0) {
            alert("please refill corn");
        }

        document.getElementById("selectedingredients").innerHTML += element;

        ingredientLeft.corn -= storageLeft.corn;

        showContainerCapacity();
    }



    function updateTomato(_event: Event): void {

        let element: string = " tomato, ";
        order.push(element);

        storageLeft.tomato -= 40;

        if (storageLeft.tomato <= 0) {
            alert("please refill tomatoes");
        }

        document.getElementById("selectedingredients").innerHTML += element;

        ingredientLeft.tomato -= storageLeft.tomato;



        showContainerCapacity();

    }
    function updateKebap(_event: Event): void {
        let element: string = " Kebap with vegan meat, ";
        order.push(element);
        document.getElementById("selectedingredients").innerHTML += element;
    }

    function updateYufka(_event: Event): void {
        let element: string = " Yufka with vegan meat, ";
        order.push(element);
        document.getElementById("selectedingredients").innerHTML += element;
    }

    function updateLahmacun(_event: Event): void {
        let element: string = " Lahmacun with vegan minced meat, ";
        order.push(element);
        document.getElementById("selectedingredients").innerHTML += element;
    }

    function updateSauce(_event: Event): void {
        let element: string = " sauce, ";

        console.log(order);


        document.getElementById("selectedingredients").innerHTML += element;
        order.push(element);
    }

    function selectedIngredients(): void {
        let selectDiv: HTMLElement = document.getElementById("selectedingredients");
        selectDiv.innerHTML += "<br>" + " ";
    }

    function compareOrder(_event: Event): void {
        if (order.length != customerorder.length) {
            document.getElementById("order").innerHTML = " ";
            document.getElementById("selectedingredients").innerHTML = " ";

            getOrder();
        }
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

                // tslint:disable-next-line: align
            }, 2000);


    }


    // Bestellung anzeigen lassen
    function getOrder(): void {

        let object1: number = Math.floor(Math.random() * basis.length);
        let object2: number = Math.floor(Math.random() * topping.length);
        let object3: number = Math.floor(Math.random() * sauce.length);

        let objects: string = basis[object1] + " " + topping[object2] + " " + sauce[object3];

        customerorder.push(objects);
        console.log(objects);

        let order: string[] = ["<br>" + "I would like one" + " " + basis[object1] + " " + " with " + " " + topping[object2] + " " + " and " + " "  + "with" + " " + sauce[object3] + "." + " " + "Thank you."];





        let orderDiv: HTMLElement = document.getElementById("order");
        orderDiv.innerHTML = "order:" + "<br>" + order;

    }

    //draw Backgorund

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
            console.log(ingredients);

        }
    }

    // end draw Ingredients




}

