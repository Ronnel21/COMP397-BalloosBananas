module objects{
    export class Button extends createjs.Bitmap{

        //Private Instance

        //Constructors
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0){
            super(assetManager.getResult(imageString));

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x =  x;
            this.y = y;

            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }

        //Private Methods
        
        //When mouse hovers
        private mouseOver():void{
            this.alpha = 0.5;
        }

        private mouseOut():void{
            this.alpha = 1.0;
        }
    }
}