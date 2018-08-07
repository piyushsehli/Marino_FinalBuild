var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            //let thunderSound = createjs.Sound.play("thunder");
            if (math.Vec2.Distance(P1, P2) <
                object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "shark":
                            var yaySound = createjs.Sound.play("die");
                            yaySound.volume = 0.2;
                            managers.Game.ScoreBoard.Lives -= 1;
                            break;
                        /*case "red_fish":
                        case "orange_fish":
                        case "green_fish":*/
                        case "purple_fish":
                            //thunderSound.volume = 0.2;
                            managers.Game.ScoreBoard.Score += 100;
                            break;
                        case "red_fish":
                            //thunderSound.volume = 0.2;
                            managers.Game.ScoreBoard.Score += 100;
                            break;
                        case "bonus":
                            //thunderSound.volume = 0.2;
                            managers.Game.ScoreBoard.Score += 500;
                            break;
                        case "life":
                            var lifeSound = createjs.Sound.play("lifeSound");
                            //thunderSound.volume = 0.2;
                            managers.Game.ScoreBoard.Lives += 1;
                            break;
                        case "bullet":
                            var bulletSound = createjs.Sound.play("bulletsound");
                            bulletSound.volume = 0.2;
                            managers.Game.ScoreBoard.Score += 200;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
            return object2.isColliding;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map