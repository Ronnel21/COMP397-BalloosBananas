module objects{
    export class Platform extends createjs.Bitmap{
        
        //Private Variables
        private dx: number;
        private dy: number;

        //Constructors
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager.getResult("platform"));
            this.Start();
        }

        public Start(): void{
            this.dx = 10;
            this.dy = 20;
        }
    }
}