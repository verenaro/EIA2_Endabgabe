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
    let imgData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let startButton = document.querySelector("#startButton");
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
    function prepareGame(_event) {
        formData = new FormData(document.forms[0]);
        console.log(formData);
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        staffAmount = Number(formData.get("staffamount"));
        customerAmount = Number(formData.get("customeramount"));
        storageCapacity = Number(formData.get("storagecapacity"));
        containerCapacity = Number(formData.get("containercapacity"));
        staffRestperiod = Number(formData.get("restperiod"));
        buildGamescreen();
        imgData = EIA2_Endabgabe_Döner_Trainer.crc2.getImageData(0, 0, EIA2_Endabgabe_Döner_Trainer.crc2.canvas.width, EIA2_Endabgabe_Döner_Trainer.crc2.canvas.height);
        console.log(staffAmount, customerAmount, storageCapacity, containerCapacity, staffRestperiod);
    }
    function buildGamescreen() {
        document.getElementById("gamefield").hidden = false;
        document.getElementById("time").hidden = false;
        document.getElementById("storage").hidden = false;
        document.getElementById("containerstorage").hidden = false;
        document.getElementById("order").hidden = false;
        document.getElementById("reorder").hidden = false;
        document.getElementById("refill").hidden = false;
        document.getElementById("finishorder").hidden = false;
        let canvas = document.querySelector("canvas");
        EIA2_Endabgabe_Döner_Trainer.crc2 = canvas.getContext("2d");
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
        window.setInterval(update, 20);
    }
    function drawCounter(_position) {
        //draw counter
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#8B4513";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y, 800, 150);
    }
    function drawCuttingboard(_position) {
        //draw cuttingboard
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#8B4513";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y, 200, 100);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#B9773A";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x + 25, _position.y + 9, 150, 80);
        //draw Knife
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#C0C0C0";
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(897, 115, 100, 0, 0.25 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.fill();
        EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
    }
    function drawContainer(_position) {
        //draw container
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#696969";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x - 100, _position.y, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x - 200, _position.y, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y + 85, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x - 100, _position.y + 85, 65, 65);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x - 200, _position.y + 85, 65, 65);
    }
    // draw Ingredients
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
        let lahmacun = new EIA2_Endabgabe_Döner_Trainer.Lahmacun(new EIA2_Endabgabe_Döner_Trainer.Vector(-100, -40), storageCapacity, containerCapacity);
        ingredients.push(lahmacun);
        for (let ingredient of ingredients) {
            ingredient.draw();
        }
    }
    // end draw Ingredients
    function update() {
        EIA2_Endabgabe_Döner_Trainer.crc2.clearRect(0, 0, EIA2_Endabgabe_Döner_Trainer.crc2.canvas.width, EIA2_Endabgabe_Döner_Trainer.crc2.canvas.height);
        EIA2_Endabgabe_Döner_Trainer.crc2.putImageData(imgData, 0, 0);
    }
    function showContainerCapacity() {
        let storageDiv = document.getElementById("storage");
        storageDiv.innerHTML = "storage:" + "<br>" + "<br>" + storageCapacity + " kg Kebap bread " + "<br>" + storageCapacity + " kg Yufka bread" + "<br>" + storageCapacity + " kg Lahmacun bread " + "<br>" + storageCapacity + " kg salad" + "<br>" + storageCapacity + " kg corn" + "<br>" + storageCapacity + " kg tomato" + "<br>" + storageCapacity + " kg sauce" + "<br>" + storageCapacity + " kg onion" + "<br>" + storageCapacity + " kg red cabbage" + "<br>";
        let containerDiv = document.getElementById("containerstorage");
        containerDiv.innerHTML = "container storage:" + "<br>" + "<br>" + containerCapacity + " g Kebap bread " + "<br>" + containerCapacity + " g Yufka bread" + "<br>" + containerCapacity + " g Lahmacun bread " + "<br>" + containerCapacity + " g salad" + "<br>" + containerCapacity + " g corn" + "<br>" + containerCapacity + " g tomato" + "<br>" + containerCapacity + " g sauce" + "<br>" + containerCapacity + " g onion" + "<br>" + containerCapacity + " g red cabbage" + "<br>";
    }
    function drawStaff() {
        let x;
        for (let i = 0; i < staffAmount; i++) {
            let staff = new EIA2_Endabgabe_Döner_Trainer.Staff(new EIA2_Endabgabe_Döner_Trainer.Vector(x - 100, 0));
            staffs.push(staff);
            for (let staff of staffs) {
                staff.draw();
                console.log(staffs);
            }
        }
    }
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map