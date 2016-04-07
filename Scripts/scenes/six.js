var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Six = (function (_super) {
        __extends(Six, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Six() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Six.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("", "20px Consolas", "#000000");
            this._playLabel.text += "You decided to take the dark road. You can hear a bear. \n\n";
            this._playLabel.text += "It seems like the bear is nearby. You are very scared.\n\n";
            this._playLabel.text += "You are faced with another intersection.\n\n";
            this._playLabel.text += "\n\n";
            this._playLabel.text += "The road going LEFT is dark and purple while the road \n\n";
            this._playLabel.text += "going RIGHT is dark and orange. Do you go LEFT or RIGHT? \n\n";
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
        Six.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Six.prototype._leftButtonClick = function (event) {
            // Switch to the TWELVE Scene
            scene = config.Scene.TWELVE;
            changeScene();
        };
        // BACK Button click event handler
        Six.prototype._rightButtonClick = function (event) {
            // Switch to the THIRTEEN Scene
            scene = config.Scene.THIRTEEN;
            changeScene();
        };
        return Six;
    }(objects.Scene));
    scenes.Six = Six;
})(scenes || (scenes = {}));
//# sourceMappingURL=six.js.map