/*  
    Shadow game
    Created on : 23/08/2015
    @author     : Allan Mendes, Henrique Terceiro
*/
var GAME = GAME || {};

domready(function() {
    GAME.canvas = document.getElementById("gameCanvas");
    
    GAME.c = GAME.canvas.getContext("2d");
    console.log(GAME.c);
    GAME.c.fillStyle = "green";
    GAME.c.fillRect(70,70,20,20);

});