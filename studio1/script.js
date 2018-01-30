console.log("reading");

"use strict";

document.f.onsubmit = processForm;
document.f.onreset = resetForm;

var info = document.getElementById("info");
var results = document.getElementById("results");

function processForm() {
    var name = document.f.name.value;
    var number = document.f.number.value;
    var candy = document.f.candy.value;
    var wind = document.f.wind.value;
    var verb = document.f.verb.value;

    info.innerHTML = "Alright <em>" + name + "</em>, here is your guide on how to survive Davis campus life!" +
        "<li>Before the quarter starts, you have to rub an egghead at least <em>" + number + "</em> times. Anything less means that you will fail your exams.</li>" +
        "<li>Trying to avoid the wrath of your professors? Bring them some <em>" + candy + "</em> and start your class off right. Your classmates will thank you later.</li>" +
        "<li>Try not to get too caught off guard by the winters in Davis. Rumor has it that winds can go up to <em>" + wind + "</em> miles per hour with a 30 degree windchill. Bringing a light cardigan will do the trick.</li>" +
        "<li>Lastly, be sure to plan your trips to campus accordingly. You never know if the bus driver is <em>" + verb + "ing</em>.</li>" +
        "<br><em>DISCLAIMER:</em> This guide has not been properly tested and may only result in a 0.0000001% success rate. Proceed with caution.";

    results.setAttribute('class', 'show');
    return false;
}

function resetForm() {
    info.html = "";
    results.setAttribute('class', 'hide');
    container.style.marginTop = '6%';
    document.f.reset();
}
