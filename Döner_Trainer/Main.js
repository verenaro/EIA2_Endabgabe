"use strict";
var EIA2_Endabgabe_Döner_Trainer;
(function (EIA2_Endabgabe_Döner_Trainer) {
    let formData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", prepareGame);
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
        let canvas = document.querySelector("canvas");
        EIA2_Endabgabe_Döner_Trainer.crc2 = canvas.getContext("2d");
    }
})(EIA2_Endabgabe_Döner_Trainer || (EIA2_Endabgabe_Döner_Trainer = {}));
//# sourceMappingURL=Main.js.map