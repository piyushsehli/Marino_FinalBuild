/*

     
  Author’s name: Piyush Sehli, Chandni Patel, Khusboo Sakervala,
  Student Number: 300984528, 300990555, 300984318
  Last Modified by: Piyush, Khusboo and Chandni
  Date last Modified: 6 August, 2018,
  Program description: -	Marino is Bullet Hell Shooter, where tin-tin (sea-horse) want to live long by eating fish, keep it self safe from shark, water dragons and killing small fishes.
-	The Goal of this game is to pass all the levels. ,
  Revision History:
  Final Release: Last changes

@piyushsehli
piyushsehli committed 22 minutes ago
 
Final Release: Updating score system

@piyushsehli
piyushsehli committed an hour ago
 
Final Release: adding rules screen

@piyushsehli
piyushsehli committed 2 hours ago
 
Final Release: Adding level screens and actions

@piyushsehli
piyushsehli committed 2 hours ago
 
Final Release: changing characters

@piyushsehli
piyushsehli committed 3 hours ago
 

*/
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
    var Setting = /** @class */ (function (_super) {
        __extends(Setting, _super);
        // constructors
        function Setting() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Setting.prototype.Start = function () {
            this._cancleButton = new objects.Button("CancelButton", config.Screen.HALF_WIDTH, 510, false);
            this._welcomeLabel = new objects.Label("1. Tap to Shoot\n\n2. Kill some Shark to reach at Next Level." +
                "\n\n3. Eat snail to increase live\n\n4. Kill octopus to reach at Next Level.\n\n" +
                "5. Eat star fish to get bonus.\n\n6. Kill water gragen to win.\n\n7. Eat Red-fish to collect point", "20px", "Consolas", "#660066", 500, 320, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        Setting.prototype.Update = function () {
            this._ocean.Update();
        };
        Setting.prototype.Reset = function () { };
        Setting.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Setting.prototype.Main = function () {
            console.log("Starting - Setting SCENE");
            this.addChild(this._ocean);
            this.addChild(this._cancleButton);
            this.addChild(this._welcomeLabel);
            this._cancleButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                var button = createjs.Sound.play("button");
            }, this);
        };
        return Setting;
    }(objects.Scene));
    scenes.Setting = Setting;
})(scenes || (scenes = {}));
//# sourceMappingURL=setting.js.map