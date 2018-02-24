module  objects {
    export class Player extends objects.GameObject{

        //Private Variables

        //Constructors
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager, "player");
            this.Start();
        }

        //Starting position
        public Start():void{
            this.y=300;
        }

        public Update():void{
            this.Movement();
            this.LimitBounds();
        }

        public Movement():void{
            this.x = objects.Game.stage.mouseX; //Temporary until WASD movement has been coded.
        }

        public LimitBounds():void{
            
        }
    }
}
