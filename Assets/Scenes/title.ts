module scenes{
    export class TitleScene extends objects.Scene{

        //Private Variables
        private titleLabel: objects.Label;
        private startButton: objects.Button;

        //Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }

        //Private Methods
        private startButtonClick():void{
            objects.Game.currentScene = config.Scene.LEVEL1;
        }


        public Start():void{
            this.titleLabel = new objects.Label("Balloo's Bananas", "50px", "Verdant", "#000000", 400, 420, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 400, 420);
            this.Main();
        }

        public Update():void{

        }

        public Main():void{
            this.addChild(this.titleLabel);
            this.addChild(this.startButton);

            this.startButton.on("click", this.startButtonClick);
        }
    }
}