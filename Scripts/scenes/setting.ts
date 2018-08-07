namespace scenes {
  export class Setting extends objects.Scene {
    // member variables
    private _avtarButton: objects.Button;
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
      this._cancleButton = new objects.Button("CancelButton", 0, 0, false);
      this._avtarButton = new objects.Button("avtarButton", 350, 100, false);
      this._rulesButton = new objects.Button("rulesButton", 350, 300, false);
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
      this.addChild(this._rulesButton);
      this.addChild(this._avtarButton);

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
