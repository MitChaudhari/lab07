function init() {
    //add your javascrip between these two lines of code
    function alertFunction() {

        var getInput = document.getElementById("entryinput").value;
        alert("Mitansh Chaudhari: " + getInput);
        document.getElementById("textoutput").innerHTML=getInput;
    }
    
    var actButton = document.getElementById("entrybutton");
    actButton.addEventListener("click", alertFunction);

}
window.addEventListener('load', init);