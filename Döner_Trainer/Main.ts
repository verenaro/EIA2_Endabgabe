namespace EIA2_Endabgabe_Döner_Trainer {
    let formData: FormData;
    // let staffAmount: number;
    // let kebap: string[] = ["flatbread", "vegan meat"];
    // let lahmacun: string[] = ["flatbread", "vegan mincemeat", "tomatosauce"];
    // let yufka: string[] = ["thin flatbread", "vegan meat", "salad", "herb"];
   

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;

    function handleLoad(): void {

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton")!;
        startButton.addEventListener("click", prepareGame);

        //drawBackground();

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


    function drawBackground(_position: Vector): void {
        //Strunk
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
    }

}