var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Five = (function (_super) {
        __extends(Five, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Five() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Five.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("", "14px Consolas", "#000000");
            this._playLabel.text = "hello world \n\n";
            this._playLabel.text += "this is albert";
            this._playLabel.regX = this._playLabel.getMeasuredWidth() * 0.5;
            this._playLabel.regY = this._playLabel.getMeasuredHeight() * 0.5;
            this._playLabel.x = config.Screen.CENTER_X;
            this._playLabel.y = config.Screen.CENTER_Y;
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
        Five.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Five.prototype._leftButtonClick = function (event) {
            // Switch to the TEN Scene
            scene = config.Scene.TEN;
            changeScene();
        };
        // BACK Button click event handler
        Five.prototype._rightButtonClick = function (event) {
            // Switch to the ELEVEN Scene
            scene = config.Scene.ELEVEN;
            changeScene();
        };
        return Five;
    })(objects.Scene);
    scenes.Five = Five;
})(scenes || (scenes = {}));
