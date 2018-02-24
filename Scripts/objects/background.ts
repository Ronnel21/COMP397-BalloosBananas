module objects {
    export class Background extends createjs.Bitmap{

        //Private Variables
        private dx: number;
        private dy: number;

        //Constructors
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager.getResult("background"));
            this.Start();
        }

        public Start():void{
            this.dx = 0;
            this.dy = 0;
        }
    }
}