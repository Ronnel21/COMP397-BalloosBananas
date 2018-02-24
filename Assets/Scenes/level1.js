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
var scene;
(function (scene) {
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        //Constructors
        function Level1(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        Level1.prototype.Start = function () {
            this.platform = new objects.Platform(this.assetManager);
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
        };
        Level1.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.platform);
            this.addChild(this.player);
        };
        return Level1;
    }(objects.Scene));
    scene.Level1 = Level1;
})(scene || (scene = {}));
//# sourceMappingURL=level1.js.map