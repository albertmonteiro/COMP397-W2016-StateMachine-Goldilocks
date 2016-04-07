var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Seven = (function (_super) {
        __extends(Seven, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Seven() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Seven.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("", "20px Consolas", "#000000");
            this._playLabel.text = "You chose to take the wet and mucky road. This road is \n\n";
            this._playLabel.text += "filthy but all you can think of is that hot chocolate. \n\n";
            this._playLabel.text += "You continue walking until you come across another \n\n";
            this._playLabel.text += "intersection. \n\n";
            this._playLabel.text += "\n\n";
            this._playLabel.text += "The road going LEFT is black and the road going right \n\n";
            this._playLabel.text += "is white. Do you go LEFT or do you go RIGHT? \n\n";
            // this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            // this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            // this._playLabel.x = config.Screen.CENTER_X;
            // this._playLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._playLabel);
            // add the LEFT button to the PLAY scene
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 150);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the RIGHT button to the PLAY scene
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 150);
            this.addChild(this._rightButton);
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Seven.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Seven.prototype._leftButtonClick = function (event) {
            // Switch to the FOURTEEN Scene
            scene = config.Scene.FOURTEEN;
            changeScene();
        };
        // BACK Button click event handler
        Seven.prototype._rightButtonClick = function (event) {
            // Switch to the FIFTEEN Scene
            scene = config.Scene.FIFTEEN;
            changeScene();
        };
        return Seven;
    }(objects.Scene));
    scenes.Seven = Seven;
})(scenes || (scenes = {}));
//# sourceMappingURL=seven.js.map