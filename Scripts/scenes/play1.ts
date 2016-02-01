// PLAY1 SCENE
module scenes {
    export class Play1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _play1Label: createjs.Text;
        private _nextButton: objects.Button;
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add the PLAY1 label to the scene
            this._play1Label = new createjs.Text("Game Scene", "60px Consolas", "#000000");
            this._play1Label.regX = this._play1Label.getMeasuredWidth() * 0.5;
            this._play1Label.regY = this._play1Label.getMeasuredHeight() * 0.5;
            this._play1Label.x = config.Screen.CENTER_X;
            this._play1Label.y = config.Screen.CENTER_Y;
            this.addChild(this._play1Label);

            // add the NEXT button to the PLAY1 scene
            this._nextButton = new objects.Button(
                "NextButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
           
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add the BACK button to the PLAY1 scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY1 Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // NEXT Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.OVER;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}