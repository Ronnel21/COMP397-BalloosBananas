module objects{
    export class GameObject extends createjs.Bitmap{

        //Private Variables (d - Dimension)
        protected dx: number;
        protected dy: number;

        //Public Properties
        public width: number;
        public height: number;
        //For boundaries
        public halfWidth: number;
        public halfHeight: number;
        
        //Constructors
        constructor(assetManager: createjs.LoadQueue, imageString:string){
            super(assetManager.getResult(imageString));
            this.name=imageString;
            this.init();
        }

        private init():void{
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
    }
        
}