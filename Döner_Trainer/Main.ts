namespace EIA2_Endabgabe_Döner_Trainer {
    let formData: FormData;
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;

    function handleLoad(): void {

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton")!;
        startButton.addEventListener("click", prepareGame);
    }

    function prepareGame(): void {
        formData = new FormData(document.forms[0]);

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");

        body.removeChild(form);
        buildGamescreen();
        console.log(formData);
    }

    function buildGamescreen(): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
    }
    
}