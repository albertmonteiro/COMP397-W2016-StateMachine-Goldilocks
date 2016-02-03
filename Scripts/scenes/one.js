var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var One = (function (_super) {
        __extends(One, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function One() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        One.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("", "20px Consolas", "#000000");
            this._playLabel.text += "You are Goldilocks and you are walking through the woods. \n\n";
            this._playLabel.text += "All of a sudden you get the sweet smell of some HOT CHOCOLATE. \n\n";
            this._playLabel.text += "Even though you know there are bears in the woods, you decide to follow the smell. \n\n";
            this._playLabel.text += "You have been walking for a while when you come upon an intersection. \n\n";
            this._playLabel.text += "The road going left looks darker than the road going right. \n\n";
            this._playLabel.text += "What do you do? Do you go LEFT or do you go RIGHT? \n\n";
            // this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            // this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            // this._playLabel.x = config.Screen.CENTER_X;
            // this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the LEFT button to the PLAY scene
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 170);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the RIGHT button to the PLAY scene
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 170);
            this.addChild(this._rightButton);
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        One.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        One.prototype._leftButtonClick = function (event) {
            // Switch to the TWO Scene
            scene = config.Scene.TWO;
            changeScene();
        };
        // BACK Button click event handler
        One.prototype._rightButtonClick = function (event) {
            // Switch to the THREE Scene
            scene = config.Scene.THREE;
            changeScene();
        };
        return One;
    })(objects.Scene);
    scenes.One = One;
})(scenes || (scenes = {}));
