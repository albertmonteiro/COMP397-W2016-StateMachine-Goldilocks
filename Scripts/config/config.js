var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        // public static PLAY: number = 1;
        Scene.ONE = 1;
        Scene.TWO = 2;
        Scene.THREE = 2;
        Scene.FOUR = 3;
        Scene.FIVE = 3;
        Scene.SIX = 3;
        Scene.SEVEN = 3;
        Scene.EIGHT = 3;
        Scene.NINE = 3;
        Scene.TEN = 3;
        Scene.ELEVEN = 3;
        Scene.TWELVE = 3;
        Scene.THIRTEEN = 3;
        Scene.FOURTEEN = 3;
        Scene.FIFTEEN = 3;
        Scene.OVER = 3;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
