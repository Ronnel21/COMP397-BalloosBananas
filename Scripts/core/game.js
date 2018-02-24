//IIFE - Immediately Invoked Function Expression
(function () {
    //Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var testText; //Test text
    //For initializing
    function Init() {
        console.log("Game has started initializing."); //Displays if started initialize
        Start(); //Do Start() after.
    }
    //When it starts
    function Start() {
        console.log("Game is starting."); //Game is starting up.
        //To test
        testText = new createjs.Text("Test Text!", "36px", "#FF0000");
        testText.x = 50;
        testText.y = 50;
        stage.addChild(testText);
        //stage = new createjs.Stage(canvas);
        //createjs.Ticker.framerate=60; //For keeping updates on the stage
        //createjs.Ticker.on("tick", Update);
        //Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game has started."); //Displays if game has started.
        switch (objects.Game.currentScene) {
        }
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map