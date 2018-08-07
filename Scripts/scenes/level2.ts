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
    export class Level2 extends objects.Scene {
      // member variables
      private _welcomeLabel: objects.Label;
      private _welcomeLabelby: objects.Label;
      
      private _ocean: objects.Ocean;
  
      private engineSound: createjs.AbstractSoundInstance;
  
      // constructors
      constructor() {
        super();
  
        this.Start();
      }
  
      // private methods
  
      // public methods
      public Start(): void {
        /*this.engineSound = createjs.Sound.play("background");
        this.engineSound.loop = -1;
        this.engineSound.volume = 0.1;
        */
        this._welcomeLabel = new objects.Label(
          "Level 2",
          "80px",
          "Consolas",
          "#660066",
          500,
          120,
          true
        );
        this._welcomeLabelby = new objects.Label(
          "Tap to Play!",
          "48px",
          "Consolas",
          "#ff0066",
          500,
          240,
          true
        );
        this._ocean = new objects.Ocean();
        this.Main();
      }
  
      public Update(): void {
      }
  
      public Reset(): void {}
  
      public Destroy(): void {
        this.removeAllChildren();
      }
  
      public Main(): void {
        console.log(`Starting - START SCENE`);
        // adding the ocean to the scene
        this.addChild(this._ocean);
        this.addChild(this._welcomeLabel);
        this.addChild(this._welcomeLabelby);
        
  
        
  
        this._ocean.on(
          "click",
          function() {
            managers.Game.CurrentState = config.Scene.PLAYLEVEL1;
            let buttonSound = createjs.Sound.play("button");
          },
          this
        );
  
        
      }
    }
  }
  