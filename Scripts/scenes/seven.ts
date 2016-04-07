// PLAY SCENE
module scenes {
    export class Seven extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _leftButton: objects.Button;
        private _rightButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

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
            this._leftButton = new objects.Button(
                "LeftButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 150);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);

            // add the RIGHT button to the PLAY scene
            this._rightButton = new objects.Button(
                "RightButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 150);
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
            // Switch to the FOURTEEN Scene
            scene = config.Scene.FOURTEEN;
            changeScene();
        }
        
        // BACK Button click event handler
        private _rightButtonClick(event: createjs.MouseEvent) {
            // Switch to the FIFTEEN Scene
            scene = config.Scene.FIFTEEN;
            changeScene();
        }
    }
}