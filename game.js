
$(document).ready(function () 

{
    var crystalValues = {};
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    crystalValues[4] = Math.floor(Math.random()*12+1);
    
    
    function getCrystalHandler(crystalKey) {
       return function() {
        userTotal = userTotal + crystalValues[crystalKey];
        console.log("New userTotal " + userTotal);
        $("#score").text(userTotal);
    
        if (userTotal === random) {
            winner()
        }
    
        else if (userTotal > random) {
            loser()
        } 
    
    $("red").on("click", getCrystalHandler(1));
    $("blue").on("click", getCrystalHandler(2));
    $("yellow").on("click", getCrystalHandler(3));
    $("green").on("click", getCrystalHandler(4));
    