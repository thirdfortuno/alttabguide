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

function getTips(legend){
    legend = legend.toLowerCase();
    tipHTML = "./tips/" + legend + ".html";
    $('#guide').load(tipHTML);
    //alert(tipHTML);
}

function inputLegendRadio(){
    var chosen = document.querySelector('input[name="legendSelect"]:checked').value;
    getTips(chosen);
}
