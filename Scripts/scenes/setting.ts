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

namespace scenes {
  export class Setting extends objects.Scene {
    // member variables
    private _avtarButton: objects.Button;
    private _welcomeLabel: objects.Label;
    private _rulesButton: objects.Button;
    private _cancleButton: objects.Button;
    private _ocean: objects.Ocean;
    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._cancleButton = new objects.Button("CancelButton", config.Screen.HALF_WIDTH, 510, false);
      this._welcomeLabel = new objects.Label(
        "1. Tap to Shoot\n\n2. Kill some Shark to reach at Next Level."+
        "\n\n3. Eat snail to increase live\n\n4. Kill octopus to reach at Next Level.\n\n"+
        "5. Eat star fish to get bonus.\n\n6. Kill water gragen to win.\n\n7. Eat Red-fish to collect point",
        "20px",
        "Consolas",
        "#660066",
        500,
        320,
        true
      );
      
      this._ocean = new objects.Ocean();
      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - Setting SCENE`);
      this.addChild(this._ocean);
      this.addChild(this._cancleButton);
      this.addChild(this._welcomeLabel);

      this._cancleButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.START;
          let button = createjs.Sound.play("button");
        },
        this
      );

     
    }
  }
}
