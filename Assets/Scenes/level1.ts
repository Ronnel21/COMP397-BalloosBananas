module scenes{
    export class Level1Scene extends objects.Scene{

        //Private Variables
        private player: objects.Player;
        private platform: objects.Platform;
        private background: objects.Background;

        //Constructors
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }
        
        
        public Start(): void{
            this.platform = new objects.Platform(this.assetManager);
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.platform);
            this.addChild(this.player);
        }
    }
    
}