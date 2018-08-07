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
var objects;
(function (objects) {
    var Shark = /** @class */ (function (_super) {
        __extends(Shark, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Shark
         */
        function Shark() {
            var _this = _super.call(this, "shark") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Shark.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < this.halfWidth) {
                this.Reset();
            }
        };
        // public methods
        Shark.prototype.Start = function () {
            this.regX = this.width;
            this.regY = this.height;
            this._horizontalSpeed = 5;
            this.Reset();
        };
        Shark.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Shark.prototype.Reset = function () {
            this._horizontalSpeed = Math.floor(Math.random() * 4 + 2); // between -2 and 2 ppf
            this.x = config.Screen.WIDTH;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height) + this.halfHeight);
            console.log(this._horizontalSpeed);
        };
        return Shark;
    }(objects.GameObject));
    objects.Shark = Shark;
})(objects || (objects = {}));
//# sourceMappingURL=shark.js.map