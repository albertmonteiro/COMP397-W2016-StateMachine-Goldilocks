// PLAY SCENE
module scenes {
    export class One extends objects.Scene {
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
            this._playLabel.text += "You are Goldilocks and you are walking through the woods. \n\n";
            this._playLabel.text += "All of a sudden you smell something very sweet. It's the \n\n";
            this._playLabel.text += "smell of some HOT CHOCOLATE. Even though you know there \n\n";
            this._playLabel.text += "are BEARS in the woods, you decide to follow the smell. \n\n";
            this._playLabel.text += "You have been walking for a while when you come upon an \n\n";
            this._playLabel.text += "intersection. \n\n";
            this._playLabel.text += "\n\n";
            this._playLabel.text += "The road going left looks darker than the one going right. \n\n";
            this._playLabel.text += "What do you do? Do you go LEFT or do you go RIGHT? \n\n";
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
            // Switch to the TWO Scene
            scene = config.Scene.TWO;
            changeScene();
        }
        
        // BACK Button click event handler
        private _rightButtonClick(event: createjs.MouseEvent) {
            // Switch to the THREE Scene
            scene = config.Scene.THREE;
            changeScene();
        }
    }
}