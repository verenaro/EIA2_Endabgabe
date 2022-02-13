"use strict";
/*Endabgabe EIA2_Döner_Trainer
Name: Verena Rothweiler
Matrikel: 270156
Datum:
Quellen: Zusammenarbeit mit Neslisah Koc
*/
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    let formData;
    //let gameStart: boolean = false;
    //let gameTimer: number;
    //let countDown: number;
    //let time: HTMLDivElement;
    let staffAmount;
    let customerAmount;
    let storageCapacity;
    let containerCapacity;
    let staffRestperiod;
    let ingredients = [];
    let staffs = [];
    let customers = [];
    let basis = ["Kebap", "Yufka", "Lahmacun"];
    let topping = ["corn", "salad", "red cabbage", "onion", "tomato"];
    let sauce = ["sauce"];
    let word = ["with", "without"];
    //let words: string[] = ["with", "without"];
    //let imgData: ImageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // start Button deklarieren, prepareGame aufrufen
        let startButton = document.querySelector("#startButton");
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
    function prepareGame(_event) {
        formData = new FormData(document.forms[0]);
        console.log(formData);
        let form = document.querySelector("form");
        let body = document.querySelector("body");
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
    function buildGamescreen() {
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
        let canvas = document.querySelector("canvas");
        EIA2_Endabgabe_Döner_Trainer.crc2 = canvas.getContext("2d");
        //calls
        drawCounter(new EIA2_Endabgabe_Döner_Trainer.Vector(550, 370));
        drawCuttingboard(new EIA2_Endabgabe_Döner_Trainer.Vector(800, 100));
        drawContainer(new EIA2_Endabgabe_Döner_Trainer.Vector(1100, 370));
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
        //let kebap: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#kebap");
        //let yufka: HTMLButtonElement;
        //let lahmacun: HTMLButtonElement;
        //let corn: HTMLButtonElement;
        //let sauce: HTMLButtonElement;
        let salad = document.querySelector("#salad");
        //let cabbage: HTMLButtonElement;
        //let onion: HTMLButtonElement;
        //let tomato: HTMLButtonElement;
        //click Listener installieren
        //finishorder.addEventListener("click", compareOrder);
        //kuttingboard.addEventListener("click", cutIngredients);
        //kebap.addEventListener("click", collectKebap);
        //yufka.addEventListener("click", collectYufke);
        //lahmacun.addEventListener("click", collectLahmacun);
        //corn.addEventListener("click", collectCorn);
        //sauce.addEventListener("click", collectSauce);
        salad.addEventListener("click", updateSalad);
        //cabbage.addEventListener("click", collectCabbage);
        //onion.addEventListener("click", collectOnion);
        //tomato.addEventListener("click", collectTomato);
        console.log();
        window.setInterval(update, 20);
        setInterval(drawCustomer, 60000);
    }
    function drawCounter(_position) {
        //Theke zeichnen
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#8B4513";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y, 800, 150);
    }
    function drawCuttingboard(_position) {
        //Schneidebrett zeichnen
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#8B4513";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y, 200, 100);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#B9773A";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x + 25, _position.y + 9, 150, 80);
        //Messer zeichnen
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#C0C0C0";
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(897, 115, 100, 0, 0.25 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.fill();
        EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
    }
    function drawContainer(_position) {
        //Container zeichnen
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#696969";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x - 100, _position.y, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x - 200, _position.y, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y + 85, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x - 100, _position.y + 85, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x - 200, _position.y + 85, 65, 65);
    }
    //alle Zutaten zeichnen
    function drawSalad() {
        let salad = new EIA2_Endabgabe_Döner_Trainer.Salad(new EIA2_Endabgabe_Döner_Trainer.Vector(800, 470), storageCapacity, containerCapacity);
        let salad2 = new EIA2_Endabgabe_Döner_Trainer.Salad(new EIA2_Endabgabe_Döner_Trainer.Vector(-70, -230), storageCapacity, containerCapacity);
        ingredients.push(salad, salad2);
    }
    function drawTomato() {
        let tomato = new EIA2_Endabgabe_Döner_Trainer.Tomato(new EIA2_Endabgabe_Döner_Trainer.Vector(3, -230), storageCapacity, containerCapacity);
        let tomato2 = new EIA2_Endabgabe_Döner_Trainer.Tomato(new EIA2_Endabgabe_Döner_Trainer.Vector(100, 3), storageCapacity, containerCapacity);
        ingredients.push(tomato, tomato2);
    }
    function drawCorn() {
        let corn = new EIA2_Endabgabe_Döner_Trainer.Corn(new EIA2_Endabgabe_Döner_Trainer.Vector(200, -70), storageCapacity, containerCapacity);
        ingredients.push(corn);
    }
    function drawOnion() {
        let onion = new EIA2_Endabgabe_Döner_Trainer.Onion(new EIA2_Endabgabe_Döner_Trainer.Vector(100, 80), storageCapacity, containerCapacity);
        let onion2 = new EIA2_Endabgabe_Döner_Trainer.Onion(new EIA2_Endabgabe_Döner_Trainer.Vector(-70, -270), storageCapacity, containerCapacity);
        ingredients.push(onion, onion2);
    }
    function drawCabbage() {
        let cabbage = new EIA2_Endabgabe_Döner_Trainer.Cabbage(new EIA2_Endabgabe_Döner_Trainer.Vector(2, 80), storageCapacity, containerCapacity);
        let cabbage2 = new EIA2_Endabgabe_Döner_Trainer.Cabbage(new EIA2_Endabgabe_Döner_Trainer.Vector(5, -270), storageCapacity, containerCapacity);
        ingredients.push(cabbage, cabbage2);
    }
    function drawSauce() {
        let sauce = new EIA2_Endabgabe_Döner_Trainer.Sauce(new EIA2_Endabgabe_Döner_Trainer.Vector(200, 7), storageCapacity, containerCapacity);
        ingredients.push(sauce);
    }
    function drawKebap() {
        let kebap = new EIA2_Endabgabe_Döner_Trainer.Kebap(new EIA2_Endabgabe_Döner_Trainer.Vector(-320, -60), storageCapacity, containerCapacity);
        ingredients.push(kebap);
    }
    function drawYufka() {
        let yufka = new EIA2_Endabgabe_Döner_Trainer.Yufka(new EIA2_Endabgabe_Döner_Trainer.Vector(-120, -30), storageCapacity, containerCapacity);
        ingredients.push(yufka);
    }
    function drawLahmacun() {
        let lahmacun = new EIA2_Endabgabe_Döner_Trainer.Lahmacun(new EIA2_Endabgabe_Döner_Trainer.Vector(-100, -55), storageCapacity, containerCapacity);
        ingredients.push(lahmacun);
        for (let ingredient of ingredients) {
            ingredient.draw();
        }
    }
    // end draw Ingredients
    function update() {
        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //crc2.putImageData(imgData, 0, 0);
    }
    // Containerstand anzeigen
    function showContainerCapacity() {
        let storageDiv = document.getElementById("storage");
        storageDiv.innerHTML = "storage:" + "<br>" + "<br>" + storageCapacity + " kg Kebap bread " + "<br>" + storageCapacity + " kg Yufka bread" + "<br>" + storageCapacity + " kg Lahmacun bread " + "<br>" + storageCapacity + " kg salad" + "<br>" + storageCapacity + " kg corn" + "<br>" + storageCapacity + " kg tomato" + "<br>" + storageCapacity + " kg sauce" + "<br>" + storageCapacity + " kg onion" + "<br>" + storageCapacity + " kg red cabbage" + "<br>";
        let containerDiv = document.getElementById("containerstorage");
        containerDiv.innerHTML = "container-Storage" + "<br>" + " This is what you have left:" + "<br>" + containerCapacity + " g of onion " + "<br>" + containerCapacity + " g of corn " + "<br>" + containerCapacity + " g of tomato " + "<br>" + containerCapacity + " g of salad" + "<br>" + containerCapacity + " g of cabbage";
    }
    function updateSalad(_event) {
        let storageLeft = {
            salad: containerCapacity,
            cabbage: containerCapacity,
            onion: containerCapacity,
            corn: containerCapacity,
            tomato: containerCapacity
        };
        storageLeft.salad -= 30;
        storageLeft.onion -= 0;
        storageLeft.corn -= 0;
        let containerDiv = document.getElementById("containerstorage");
        containerDiv.innerHTML = "container-Storage" + "<br>" + " This is what you have left:" + "<br>" + storageLeft.onion + " g of onion " + "<br>" + storageLeft.corn + " g of corn " + "<br>" + storageLeft.tomato + " g of tomato " + "<br>" + storageLeft.salad + " g of salad" + "<br>" + storageLeft.cabbage + " g of cabbage";
    }
    // Mitarbeiter zeichnen lassen
    function drawStaff() {
        for (let i = 0; i < staffAmount; i++) {
            let staff = new EIA2_Endabgabe_Döner_Trainer.Staff(new EIA2_Endabgabe_Döner_Trainer.Vector(-100, 0));
            staffs.push(staff);
        }
        for (let staff of staffs) {
            staff.draw();
        }
    }
    // Kunden zeichnen lassen
    function drawCustomer() {
        let interval = setInterval(function () {
            let customer = new EIA2_Endabgabe_Döner_Trainer.Customer(new EIA2_Endabgabe_Döner_Trainer.Vector(-100, 0));
            customers.push(customer);
            customer.draw();
            if (customers.length == customerAmount) {
                clearInterval(interval);
                customers.length = 0;
            }
        }, 2000);
    }
    // Bestellung anzeigen lassen
    function getOrder() {
        let object1 = Math.floor(Math.random() * basis.length);
        let object2 = Math.floor(Math.random() * topping.length);
        let object3 = Math.floor(Math.random() * sauce.length);
        let object4 = Math.floor(Math.random() * word.length);
        let order = ["I would like one" + " " + basis[object1] + " " + "with" + " " + topping[object2] + " " + "and" + " " + word[object4] + " " + sauce[object3] + "." + " " + "Thank you."];
        let orderDiv = document.getElementById("order");
        orderDiv.innerHTML = "order:" + "<br>" + order;
    }
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map