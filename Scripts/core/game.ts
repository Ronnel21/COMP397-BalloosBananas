/// <reference path="reference.ts"/>

//IIFE - Immediately Invoked Function Expression
(function(){

    //Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let testText: createjs.Text; //Test text
    let startButton: objects.Button;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];
    let currentScene: objects.Scene;
    let currentState: number;

    assetManifest = [
        {id: "startButton", src:"./Assets/Images/startButton.png"},
        {id: "background", src:"./Assets/Background/background.png"},
        {id: "player", src:"./Assets/Player/plyaerRight.png"},
        {id: "platform", src:"./Assets/Platform/testPlatform.png"},
    ]

    //For initializing
    function Init():void{
        console.log("Game has started initializing."); //Displays if started initialize
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start); //Do Start when finished
    }

    //When it starts
    function Start():void{
        console.log("Game is starting.") //Game is starting up.

        //To test
        testText = new createjs.Text("Test Text!", "36px", "#FF0000");
        testText.x=50;
        testText.y=50;

        stage.addChild(testText);
        
        //stage = new createjs.Stage(canvas);
        //stage.enableMouseOver(25); //Enable buttons
        //createjs.Ticker.framerate=60; //For keeping updates on the stage
        //createjs.Ticker.on("tick", Update);
        //Main();
    }
    
    function Update():void{
        stage.update();
    }


    function Main():void{
        console.log("Game has started."); //Displays if game has started.

        switch(objects.Game.currentScene){
            case config.Scene.TITLE:
                currentScene = new scenes.TitleScene(assetManager);
                break;
            case config.Scene.LEVEL1:
                currentScene = new scenes.Level1Scene(assetManager);
                break;
        }

        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }

    window.onload = Init;
})();