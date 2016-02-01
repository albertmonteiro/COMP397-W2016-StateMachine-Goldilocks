var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY1 SCENE
var scenes;
(function (scenes) {
    var Play1 = (function (_super) {
        __extends(Play1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play1.prototype.start = function () {
            // add the PLAY1 label to the scene
            this._play1Label = new createjs.Text("Game Scene", "60px Consolas", "#000000");
            this._play1Label.regX = this._play1Label.getMeasuredWidth() * 0.5;
            this._play1Label.regY = this._play1Label.getMeasuredHeight() * 0.5;
            this._play1Label.x = config.Screen.CENTER_X;
            this._play1Label.y = config.Screen.CENTER_Y;
            this.addChild(this._play1Label);
            // add the NEXT button to the PLAY1 scene
            this._nextButton = new objects.Button("NextButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add the BACK button to the PLAY1 scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY1 Scene updates here
        Play1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // NEXT Button click event handler
        Play1.prototype._nextButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        };
        // BACK Button click event handler
        Play1.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Play1;
    })(objects.Scene);
    scenes.Play1 = Play1;
})(scenes || (scenes = {}));
