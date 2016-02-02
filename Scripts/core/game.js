/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
// var play:scenes.Play;
var over;
var one;
var two;
var three;
var three;
var three;
var three;
var three;
var three;
var three;
var three;
var three;
var three;
var three;
var three;
var three;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.ONE:
            // show the PLAY scene
            stage.removeAllChildren();
            one = new scenes.One();
            currentScene = one;
            console.log("Starting ONE Scene");
            break;
        case config.Scene.TWO:
            // show the PLAY scene
            stage.removeAllChildren();
            two = new scenes.Two();
            currentScene = two;
            console.log("Starting TWO Scene");
            break;
        case config.Scene.THREE:
            // show the PLAY scene
            stage.removeAllChildren();
            three = new scenes.Three();
            currentScene = three;
            console.log("Starting THREE Scene");
            break;
        case config.Scene.FOUR:
            // show the PLAY scene
            stage.removeAllChildren();
            four = new scenes.Four();
            currentScene = four;
            console.log("Starting FOUR Scene");
            break;
        case config.Scene.FIVE:
            // show the PLAY scene
            stage.removeAllChildren();
            five = new scenes.Five();
            currentScene = five;
            console.log("Starting FIVE Scene");
            break;
        case config.Scene.SIX:
            // show the PLAY scene
            stage.removeAllChildren();
            six = new scenes.Six();
            currentScene = six;
            console.log("Starting SIX Scene");
            break;
        case config.Scene.SEVEN:
            // show the PLAY scene
            stage.removeAllChildren();
            seven = new scenes.Seven();
            currentScene = seven;
            console.log("Starting SEVEN Scene");
            break;
        case config.Scene.EIGHT:
            // show the PLAY scene
            stage.removeAllChildren();
            eight = new scenes.Eight();
            currentScene = eight;
            console.log("Starting EIGHT Scene");
            break;
        case config.Scene.NINE:
            // show the PLAY scene
            stage.removeAllChildren();
            nine = new scenes.Nine();
            currentScene = nine;
            console.log("Starting NINE Scene");
            break;
        case config.Scene.TEN:
            // show the PLAY scene
            stage.removeAllChildren();
            ten = new scenes.Ten();
            currentScene = ten;
            console.log("Starting TEN Scene");
            break;
        case config.Scene.ELEVEN:
            // show the PLAY scene
            stage.removeAllChildren();
            eleven = new scenes.Eleven();
            currentScene = eleven;
            console.log("Starting ELEVEN Scene");
            break;
        case config.Scene.TWELVE:
            // show the PLAY scene
            stage.removeAllChildren();
            twelve = new scenes.Twelve();
            currentScene = twelve;
            console.log("Starting TWELVE Scene");
            break;
        case config.Scene.THIRTEEN:
            // show the PLAY scene
            stage.removeAllChildren();
            thirteen = new scenes.Thirteen();
            currentScene = thirteen;
            console.log("Starting THIRTEEN Scene");
            break;
        case config.Scene.FOURTEEN:
            // show the PLAY scene
            stage.removeAllChildren();
            fourteen = new scenes.Fourteen();
            currentScene = fourteen;
            console.log("Starting FOURTEEN Scene");
            break;
        case config.Scene.FIFTEEN:
            // show the PLAY scene
            stage.removeAllChildren();
            fifteen = new scenes.Fifteen();
            currentScene = fifteen;
            console.log("Starting FIFTEEN Scene");
            break;
        // case config.Scene.PLAY:
        //     // show the PLAY scene
        //     stage.removeAllChildren();
        //     play = new scenes.Play();
        //     currentScene = play;
        //     console.log("Starting PLAY Scene");
        //     break;
        case config.Scene.OVER:
            // show the game OVER scene
            stage.removeAllChildren();
            over = new scenes.Over();
            currentScene = over;
            console.log("Starting OVER Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
