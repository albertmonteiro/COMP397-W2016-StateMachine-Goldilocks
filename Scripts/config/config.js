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
        Scene.THREE = 3;
        Scene.FOUR = 4;
        Scene.FIVE = 5;
        Scene.SIX = 6;
        Scene.SEVEN = 7;
        Scene.EIGHT = 8;
        Scene.NINE = 9;
        Scene.TEN = 10;
        Scene.ELEVEN = 11;
        Scene.TWELVE = 12;
        Scene.THIRTEEN = 13;
        Scene.FOURTEEN = 14;
        Scene.FIFTEEN = 15;
        Scene.OVER = 16;
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
