var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Four = (function (_super) {
        __extends(Four, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Four() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Four.prototype.start = function () {
            // add the PLAY label to the scene
            this._playLabel = new createjs.Text("", "20px Consolas", "#000000");
            this._playLabel.text += "You chose to take the bright lit up road. You keep \n\n";
            this._playLabel.text += "walking through the woods. It's getting dark and scary. \n\n";
            this._playLabel.text += "You are afraid but you want really want to get to the \n\n";
            this._playLabel.text += "hot chocolate. You come across another intersection. \n\n";
            this._playLabel.text += "\n\n";
            this._playLabel.text += "The road going LEFT seems nice. It is red in color. \n\n";
            this._playLabel.text += "The road going RIGHT is also nice and it is blue in \n\n";
            this._playLabel.text += "color. Do you go LEFT or do you go RIGHT? \n\n";
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
        Four.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Four.prototype._leftButtonClick = function (event) {
            // Switch to the EIGHT Scene
            scene = config.Scene.EIGHT;
            changeScene();
        };
        // BACK Button click event handler
        Four.prototype._rightButtonClick = function (event) {
            // Switch to the NINE Scene
            scene = config.Scene.NINE;
            changeScene();
        };
        return Four;
    })(objects.Scene);
    scenes.Four = Four;
})(scenes || (scenes = {}));
