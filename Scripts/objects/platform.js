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
var objects;
(function (objects) {
    var Platform = /** @class */ (function (_super) {
        __extends(Platform, _super);
        //Constructors
        function Platform(assetManager) {
            var _this = _super.call(this, assetManager.getResult("platform")) || this;
            _this.Start();
            return _this;
        }
        Platform.prototype.Start = function () {
            this.dx = 10;
            this.dy = 20;
        };
        return Platform;
    }(createjs.Bitmap));
    objects.Platform = Platform;
})(objects || (objects = {}));
//# sourceMappingURL=platform.js.map