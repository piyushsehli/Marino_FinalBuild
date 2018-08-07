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

namespace objects {
  export class Ocean extends createjs.Bitmap {
    // member variables
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Ocean.
     * @memberof Ocean
     */
    constructor() {
      super(managers.Game.AssetManager.getResult("ocean"));
      
      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check top boundary
      if (this.x <= -800) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this._horizontalSpeed = 5; // 5 pixels per frame
      this.Reset();
    }

    public Update(): void {
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.x = 0;
    }
  }
}
