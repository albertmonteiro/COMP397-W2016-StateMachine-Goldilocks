var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Two = (function (_super) {
        __extends(Two, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Two() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Two.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("", "20px Consolas", "#000000");
            this._playLabel.text = "You continue your quest for the hot chocolate. \n\n";
            this._playLabel.text += "You have been walking for a while now. \n\n";
            this._playLabel.text += "You are faced with yet another decision. \n\n";
            this._playLabel.text += "You have to choose from between two roads again. \n\n";
            this._playLabel.text += "The road going LEFT is well lit up; however, the road going RIGHT has a strong smell of hot chocolate but you can hear the sound of a bear coming from this road. \n\n";
            this._playLabel.text += "Do you go LEFT or do you go RIGHT? \n\n";
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
        Two.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Two.prototype._leftButtonClick = function (event) {
            // Switch to the FOUR Scene
            scene = config.Scene.FOUR;
            changeScene();
        };
        // BACK Button click event handler
        Two.prototype._rightButtonClick = function (event) {
            // Switch to the FIVE Scene
            scene = config.Scene.FIVE;
            changeScene();
        };
        return Two;
    })(objects.Scene);
    scenes.Two = Two;
})(scenes || (scenes = {}));
