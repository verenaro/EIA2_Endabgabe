"use strict";
/*Endabgabe EIA2_Döner_Trainer
Name: Verena Rothweiler
Matrikel: 270156
Datum: 15.02.2022
Quellen: Zusammenarbeit mit Neslisah Koc
*/
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    let formData;
    let staffAmount;
    let customerAmount;
    let storageCapacity;
    let containerCapacity;
    //Arrays
    let ingredients = [];
    let staffs = [];
    let customers = [];
    //Arrays für Bestellung
    let order = [];
    let customerorder = [];
    //Strings für Bestellung
    let basis = ["Kebap with vegan meat", "Yufka with vegan meat", "Lahmacun with vegan minced meat"];
    let topping = ["corn", "salad", "red cabbage", "onion", "tomato"];
    let sauce = ["sauce"];
    let storageLeft;
    let ingredientLeft;
    //let imgData: ImageData;
    //Beim Laden der Seite wird handleLoad aufgerufen
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //start Button deklarieren, prepareGame aufrufen
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", prepareGame);
        //Div Elemente und Button Elemente verstecken
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
        document.getElementById("selectedingredients").hidden = true;
        document.getElementById("soldmeals").hidden = true;
    }
    function prepareGame(_event) {
        //neues FormData Objekt wird erzeugt und alle Schlüsselwertepaare werden mitgegeben
        formData = new FormData(document.forms[0]);
        //console.log(formData);
        //Deklariere form und body
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        //entferne form vom Body
        body.removeChild(form);
        //Werte aus dem FormData als Variablen deklarieren
        staffAmount = Number(formData.get("staffamount"));
        customerAmount = Number(formData.get("customeramount"));
        storageCapacity = Number(formData.get("storagecapacity"));
        containerCapacity = Number(formData.get("containercapacity"));
        //staffRestperiod = Number(formData.get("restperiod"));
        //Gebe allen Zutaten den Wert, der im Formular ausgewählt wurde
        //Zum updaten der Werte
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
        //console.log(staffAmount, customerAmount, storageCapacity, containerCapacity, staffRestperiod);
        //rufe Spielseite auf
        buildGamescreen();
    }
    function buildGamescreen() {
        //verteckte Divs und Button Elemente anzeigen
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
        document.getElementById("selectedingredients").hidden = false;
        document.getElementById("soldmeals").hidden = false;
        //Canvas auswählen
        let canvas = document.querySelector("canvas");
        EIA2_Endabgabe_Döner_Trainer.crc2 = canvas.getContext("2d");
        //rufe alle Funktionen auf um Hintergrud zu malen und Container sowie Storage upzudaten
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
        selectedIngredients();
        //Button deklarieren für Ingredients
        let finishorder = document.querySelector("#finishorder");
        let kebap = document.querySelector("#kebap");
        let yufka = document.querySelector("#yufka");
        let lahmacun = document.querySelector("#lahmacun");
        let corn = document.querySelector("#corn");
        let salad = document.querySelector("#salad");
        let cabbage = document.querySelector("#cabbage");
        let onion = document.querySelector("#onion");
        let tomato = document.querySelector("#tomato");
        let refill = document.querySelector("#cuttingboard");
        let reorder = document.querySelector("#reorder");
        let sauce = document.querySelector("#sauce");
        //click Listener installieren
        finishorder.addEventListener("click", compareOrder);
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
        //rufe update alle 20 ms auf
        window.setInterval(update, 20);
        //rufe drawCustomer nach einer Minte auf
        setInterval(drawCustomer, 60000);
    }
    function update() {
        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //crc2.putImageData(imgData, 0, 0);
        //hier sollen die Mitarbeiter bewegt werden
        /*for (let staff of staffs) {
            staff.move(new Vector(0, 0), new Vector(200, 300), 5);

        }*/
    }
    //Containerstand anzeigen
    function showContainerCapacity() {
        let storageDiv = document.getElementById("storage");
        storageDiv.innerHTML = "storage:" + "<br>" + "<br>" + ingredientLeft.onion + " g onions " + "<br>" + ingredientLeft.corn + " g of corn" + "<br>" + ingredientLeft.tomato + " g of tomatoes " + "<br>" + ingredientLeft.salad + " g of salad" + "<br>" + ingredientLeft.cabbage + " g of cabbage" + "<br>";
        let containerDiv = document.getElementById("containerstorage");
        containerDiv.innerHTML = "container storage:" + "<br>" + "<br>" + storageLeft.onion + " g of onion " + "<br>" + storageLeft.corn + " g of corn " + "<br>" + storageLeft.tomato + " g of tomato " + "<br>" + storageLeft.salad + " g of salad" + "<br>" + storageLeft.cabbage + " g of cabbage";
    }
    //Ingredients im Storage auffüllen
    function reorderIngredients(_event) {
        ingredientLeft = {
            salad: storageCapacity,
            cabbage: storageCapacity,
            onion: storageCapacity,
            corn: storageCapacity,
            tomato: storageCapacity
        };
        showContainerCapacity();
    }
    //Ingredients in den Containern auffüllen
    function refillContainer(_event) {
        storageLeft = {
            salad: containerCapacity,
            cabbage: containerCapacity,
            onion: containerCapacity,
            corn: containerCapacity,
            tomato: containerCapacity
        };
        showContainerCapacity();
    }
    //Update Ingredients
    function updateSalad(_event) {
        //let x: number = _event.offsetX;
        //let y: number = _event.offsetY;
        //Deklariere element 
        let element = " salad, ";
        //Pushe es in order Array
        order.push(element);
        //Ziehe 30 ab
        storageLeft.salad -= 30;
        //Wenn storageLeft.salad <= 0, Mitteilung senden 
        if (storageLeft.salad <= 0) {
            alert("please cut new salad");
        }
        //anzeigen im selectedIngredients Div
        document.getElementById("selectedingredients").innerHTML += element;
        //Ziehe ingredients.Left von storage.Left ab
        ingredientLeft.salad -= storageLeft.salad;
        //staffs[0].move(new Vector(x, y), new Vector(200, 300), 20);
        showContainerCapacity();
    }
    function updateCabbage(_event) {
        let element = " red cabbage, ";
        order.push(element);
        storageLeft.cabbage -= 30;
        if (storageLeft.cabbage <= 0) {
            alert("please cut new cabbage");
        }
        document.getElementById("selectedingredients").innerHTML += element;
        ingredientLeft.cabbage -= storageLeft.cabbage;
        showContainerCapacity();
    }
    function updateOnion(_event) {
        let element = " onion, ";
        order.push(element);
        storageLeft.onion -= 20;
        if (storageLeft.onion <= 0) {
            alert("please cut new onions");
        }
        document.getElementById("selectedingredients").innerHTML += element;
        ingredientLeft.onion -= storageLeft.onion;
        showContainerCapacity();
    }
    function updateCorn(_event) {
        let element = " corn, ";
        order.push(element);
        storageLeft.corn -= 25;
        if (storageLeft.corn <= 0) {
            alert("please refill corn");
        }
        document.getElementById("selectedingredients").innerHTML += element;
        ingredientLeft.corn -= storageLeft.corn;
        showContainerCapacity();
    }
    function updateTomato(_event) {
        let element = " tomato, ";
        order.push(element);
        storageLeft.tomato -= 40;
        if (storageLeft.tomato <= 0) {
            alert("please refill tomatoes");
        }
        document.getElementById("selectedingredients").innerHTML += element;
        ingredientLeft.tomato -= storageLeft.tomato;
        showContainerCapacity();
    }
    function updateKebap(_event) {
        let element = " Kebap with vegan meat, ";
        order.push(element);
        document.getElementById("selectedingredients").innerHTML += element;
    }
    function updateYufka(_event) {
        let element = " Yufka with vegan meat, ";
        order.push(element);
        document.getElementById("selectedingredients").innerHTML += element;
    }
    function updateLahmacun(_event) {
        let element = " Lahmacun with vegan minced meat, ";
        order.push(element);
        document.getElementById("selectedingredients").innerHTML += element;
    }
    function updateSauce(_event) {
        let element = " sauce, ";
        console.log(order);
        document.getElementById("selectedingredients").innerHTML += element;
        order.push(element);
    }
    //Ende Update Ingredients
    //Zeige die ausgewählten Ingredients an
    function selectedIngredients() {
        let selectDiv = document.getElementById("selectedingredients");
        selectDiv.innerHTML += "<br>" + " ";
    }
    //Vergleiche die Bestellung mit den eingesammelten Ingredients
    function compareOrder(_event) {
        for (let i = 0; i < customerorder.length; i++) {
            if (customerorder[i] == order[i]) {
                // Div leeren
                document.getElementById("order").innerHTML = " ";
                //customer[0] löschen
            }
            else {
                //selected Ingredients leeren
                document.getElementById("selectedingredients").innerHTML = "selected ingredients: " + "<br>";
            }
        }
        //Div mit neuer Bestellung füllen
        getOrder();
    }
    // Mitarbeiter zeichnen lassen
    function drawStaff() {
        for (let i = 0; i < staffAmount; i++) {
            let staff = new EIA2_Endabgabe_Döner_Trainer.Staff(new EIA2_Endabgabe_Döner_Trainer.Vector(-100, 0), new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0));
            //push in Staffs Array
            staffs.push(staff);
        }
        for (let staff of staffs) {
            staff.draw();
        }
    }
    // Kunden zeichnen lassen
    function drawCustomer() {
        let interval = setInterval(function () {
            let customer = new EIA2_Endabgabe_Döner_Trainer.Customer(new EIA2_Endabgabe_Döner_Trainer.Vector(-100, 0), new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0));
            customers.push(customer);
            customer.draw();
            if (customers.length == customerAmount) {
                clearInterval(interval);
                customers.length = 0;
            }
            // tslint:disable-next-line: align
        }, 2000);
    }
    //Bestellung anzeigen lassen
    function getOrder() {
        let object1 = Math.floor(Math.random() * basis.length);
        let object2 = Math.floor(Math.random() * topping.length);
        let object3 = Math.floor(Math.random() * sauce.length);
        let objects = basis[object1] + " " + topping[object2] + " " + sauce[object3];
        customerorder.push(objects);
        console.log(objects);
        let order = ["<br>" + "I would like one" + " " + basis[object1] + " " + " with " + " " + topping[object2] + " " + " and " + " " + "with" + " " + sauce[object3] + "." + " " + "Thank you."];
        let orderDiv = document.getElementById("order");
        orderDiv.innerHTML = "order:" + "<br>" + order;
    }
    //Hintergrund zeichnen
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
            console.log(ingredients);
        }
    }
    //zeichen Ende
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {})); //Ende namespace
//# sourceMappingURL=Main.js.map