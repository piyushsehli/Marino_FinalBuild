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

module objects {
    export class Button extends objects.GameObject {
        // member variables
        public isCentered:boolean;

        // constructors

        /**
         * Creates an instance of Button.
         * @param {string} imagePath
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor(imagePath:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            super(imagePath);

            this.isCentered = isCentered;

            if(isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover", this._MouseOver);
            this.on("mouseout", this._MouseOut);
        }

        // private methods
        private _MouseOver():void {
            this.alpha = 0.7; // change alpha transparency to 70%
        }

        private _MouseOut():void {
            this.alpha = 1.0; // change alpha transparency to 100%
        }


        // public methods

        /**
         * The Start Method performs object initialization
         * 
         * @returns {void}
         */
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }
    }
}