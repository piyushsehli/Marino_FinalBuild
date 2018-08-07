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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this._message = "";
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            if (managers.Game.ScoreBoard.Lives >= 1) {
                this._message = "You  won the game!";
            }
            else {
                this._message = "Game Over!";
            }
            this._endLabel = new objects.Label(this._message, "60px", "Consolas", "#000000", config.Screen.HALF_WIDTH, 200, true);
            this._backButton = new objects.Button("BackButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 100, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        End.prototype.Update = function () {
            this._ocean.Update();
        };
        End.prototype.Reset = function () { };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            this.addChild(this._endLabel);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map