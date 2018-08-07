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
    export class Bullet extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Bullet.
       * @memberof Bullet
       */
      constructor() {
        super("bubble");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): boolean {
        if (this.x >= config.Screen.WIDTH) {
          console.info("bullet" + this.x);
          this.Reset();
          return true;
        }
        return false;
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
  
        this.Reset();
      }
  
      public Update(): boolean {
        this.x += this._horizontalSpeed;
  
        return this._checkBounds();
      }
  
      public Reset(): void {
        this._horizontalSpeed = 8;
        this.x = 0;
        this.y = 0;
  
        console.info("Reset x and y", this.x, this.y);
      }
    }
  }
  