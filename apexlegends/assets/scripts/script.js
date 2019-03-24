var legends = [
    "Bangalore",
    "Bloodhound",
    "Caustic",
    "Gibraltar",
    "Lifeline",
    "Mirage",
    "Octane",
    "Pathfinder",
    "Wraith",
]

$(document).ready(function() {

});

function tipLoadHelp(tipHTML){
    $("#box").load(tipHTML);
}

function getTips(legend){
    legend = legend.toLowerCase();
    tipHTML = "./tips/" + legend + ".html";
    $('#box').fadeOut(0);
    $('#guide').slideUp(0);
    tipLoadHelp(tipHTML);
    $('#box').fadeIn(250);
    $('#guide').slideDown(250);
    //alert(tipHTML);
}

function inputLegendRadio(){
    var chosen = document.querySelector('input[name="legendSelect"]:checked').value;
    getTips(chosen);
}
