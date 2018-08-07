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
    export class Enemy2 extends objects.GameObject {
      /**
       * Creates an instance of Plane.
       * @memberof enemy2
       */
      constructor() {
        super("level3");
        
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check right boundary
        if (this.y > config.Screen.HEIGHT - this.halfHeight) {
          this.y = config.Screen.HEIGHT - this.halfHeight;
        }
  
        // check left boundary
        if (this.y < this.halfHeight) {
          this.y = this.halfHeight;
        }
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth + 65;
        this.regY = this.halfHeight;
        this.y = 200;
        this.x = 600;
      }
  
      public Update(): void {
        //this.y = managers.Game.Stage.mouseY;
        this._checkBounds();
      }
  
      public Reset(): void {}
    }
  }
  