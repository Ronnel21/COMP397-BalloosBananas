var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var TitleScene = /** @class */ (function (_super) {
        __extends(TitleScene, _super);
        //Constructor
        function TitleScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        TitleScene.prototype.startButtonClick = function () {
            objects.Game.currentScene = config.Scene.LEVEL1;
        };
        TitleScene.prototype.Start = function () {
            this.titleLabel = new objects.Label("Balloo's Bananas", "50px", "Verdant", "#000000", 400, 420, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 400, 420);
            this.Main();
        };
        TitleScene.prototype.Update = function () {
        };
        TitleScene.prototype.Main = function () {
            this.addChild(this.titleLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        return TitleScene;
    }(objects.Scene));
    scenes.TitleScene = TitleScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=title.js.map