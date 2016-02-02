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
        // public static FOUR: number = 3;
        // public static FIVE: number = 3;
        // public static SIX: number = 3;
        // public static SEVEN: number = 3;
        // public static EIGHT: number = 3;
        // public static NINE: number = 3;
        // public static TEN: number = 3;
        // public static ELEVEN: number = 3;
        // public static TWELVE: number = 3;
        // public static THIRTEEN: number = 3;
        // public static FOURTEEN: number = 3;
        // public static FIFTEEN: number = 3;
        Scene.OVER = 4;
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
