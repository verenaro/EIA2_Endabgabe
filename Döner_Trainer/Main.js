"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    let formData;
    // let staffAmount: number;
    // let storageCapacity: number;
    // let containerCapacity: number;
    // let kebap: string[] = ["flatbread", "vegan meat"];
    // let lahmacun: string[] = ["flatbread", "vegan mincemeat", "tomatosauce"];
    // let yufka: string[] = ["thin flatbread", "vegan meat", "salad", "herb"];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", prepareGame);
        document.getElementById("gamefield").hidden = true;
        //drawBackground();
    }
    function prepareGame() {
        formData = new FormData(document.forms[0]);
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        body.removeChild(form);
        buildGamescreen();
        console.log(formData);
    }
    function buildGamescreen() {
        document.getElementById("gamefield").hidden = false;
        let canvas = document.querySelector("canvas");
        EIA2_Endabgabe_Döner_Trainer.crc2 = canvas.getContext("2d");
    }
    function drawBackground(_position) {
        //counter
        EIA2_Endabgabe_Döner_Trainer.crc2.beginPath();
        EIA2_Endabgabe_Döner_Trainer.crc2.fillStyle = "brown";
        EIA2_Endabgabe_Döner_Trainer.crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
    }
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map