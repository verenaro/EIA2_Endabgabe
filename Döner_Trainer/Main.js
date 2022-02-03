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
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", prepareGame);
        document.getElementById("gamefield").hidden = true;
        document.getElementById("time").hidden = true;
        document.getElementById("storage").hidden = true;
        document.getElementById("containerstorage").hidden = true;
        document.getElementById("order").hidden = true;
    }
    function prepareGame(_event) {
        formData = new FormData(document.forms[0]);
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        buildGamescreen();
        console.log(formData);
    }
    function buildGamescreen() {
        document.getElementById("gamefield").hidden = false;
        document.getElementById("time").hidden = false;
        document.getElementById("storage").hidden = false;
        document.getElementById("containerstorage").hidden = false;
        document.getElementById("order").hidden = false;
        let canvas = document.querySelector("canvas");
        EIA2_Endabgabe_Döner_Trainer.crc2 = canvas.getContext("2d");
        drawCounter(new EIA2_Endabgabe_Döner_Trainer.Vector(550, 370));
        drawCuttingboard(new EIA2_Endabgabe_Döner_Trainer.Vector(800, 100));
        drawContainer(new EIA2_Endabgabe_Döner_Trainer.Vector(1100, 370));
        drawSalad(new EIA2_Endabgabe_Döner_Trainer.Vector(800, 470));
        drawTomato(new EIA2_Endabgabe_Döner_Trainer.Vector(100, 0));
        drawLahmacun(new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0));
        drawCorn(new EIA2_Endabgabe_Döner_Trainer.Vector(0, 0));
    }
    function drawCounter(_position) {
        //draw counter
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#8B4513";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y, 800, 150);
    }
    function drawCuttingboard(_position) {
        //draw cuttingboard
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#8B4513";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x, _position.y, 200, 100);
        EIA2_Endabgabe_Döner_Trainer.crc2.save();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#B9773A";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x + 25, _position.y + 9, 150, 80);
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
    function drawSalad(_position) {
        EIA2_Endabgabe_Döner_Trainer.crc2.translate(_position.x, _position.y);
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "green";
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(154, -68, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(111, -75, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(114, -65, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.fill();
    }
    function drawTomato(_position) {
        EIA2_Endabgabe_Döner_Trainer.crc2.translate(_position.x - 170, _position.y - 230);
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "red";
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(154, -68, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(111, -75, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(114, -65, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.fill();
        EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
        EIA2_Endabgabe_Döner_Trainer.crc2.save();
        EIA2_Endabgabe_Döner_Trainer.crc2.restore();
        //Tomatoes Cuttingboard
        EIA2_Endabgabe_Döner_Trainer.crc2.translate(_position.x + 70, _position.y + 230);
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "red";
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(154, -68, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -79, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(111, -75, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(114, -65, 10, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.fill();
        EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
    }
    function drawLahmacun(_position) {
        EIA2_Endabgabe_Döner_Trainer.crc2.translate(_position.x - 410, _position.y - 40);
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(130, 19, 45, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#bfa290";
        EIA2_Endabgabe_Döner_Trainer.crc2.fill();
        EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
        //Hackfleisch
        EIA2_Endabgabe_Döner_Trainer.crc2.translate(_position.x, _position.y + 100);
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "#61380B";
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.fill();
        EIA2_Endabgabe_Döner_Trainer.crc2.closePath();
    }
    function drawCorn(_position) {
        EIA2_Endabgabe_Döner_Trainer.crc2.translate(_position.x, _position.y);
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "yellow";
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -69, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(140, -69, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(122, -69, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(132, -79, 5, 0, 2 * Math.PI);
        EIA2_Endabgabe_Döner_Trainer.crc2.arc(143, -79, 5, 0, 2 * Math.PI);
    }
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map