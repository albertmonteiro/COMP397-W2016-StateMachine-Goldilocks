// PLAY SCENE
module scenes {
    export class Thirteen extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _leftButton: objects.Button;
        private _rightButton: objects.Button;
        private _backgroundImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Adding background image with text
            this._backgroundImage = new createjs.Bitmap("../../Assets/images/backgroundSceneThirteen.png");
            this.addChild(this._backgroundImage);

            // add the LEFT button to the PLAY scene
            this._leftButton = new objects.Button(
                "SadFace",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 150);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);

            // add the RIGHT button to the PLAY scene
            this._rightButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 170);
            this.addChild(this._rightButton);
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // NEXT Button click event handler
        private _leftButtonClick(event: createjs.MouseEvent) {
            // Switch to the NULL Scene
            // scene = config.Scene.TWO;
            // changeScene();
        }
        
        // BACK Button click event handler
        private _rightButtonClick(event: createjs.MouseEvent) {
            // Switch to the ONE Scene
            scene = config.Scene.ONE;
            changeScene();
        }
    }
}