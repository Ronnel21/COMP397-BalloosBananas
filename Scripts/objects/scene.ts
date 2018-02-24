module objects {
    export class Scene extends createjs.Container{
        
        //Instance Variables

        //Public
        public assetManager;

        //Constructors
        constructor(assetManager: createjs.LoadQueue){
            super();

            this.assetManager = assetManager;
        }

    }
}