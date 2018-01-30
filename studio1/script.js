console.log("reading");

"use strict";

function processForm() {
document.f.onsubmit = processForm;
document.f.onreset = clearForm;
        
        var userName = document.f.userName.value;
        var userNum = document.f.userNum.value;
        var userCandy = document.f.userCandy.value;
        var userWindSpeed = document.f.userWindSpeed.value;
        var userVerb = document.f.userVerb.value;

        if (userName == "" || userNum == "" || userCandy == "" || userWindSpeed == "" || userVerb == "") {
            alert('Yikes! Looks like you missed something. This guide will be classified until you fill everything out!');
        }
        else {
            var myMsg = document.getElementById('myMsg');
            myMsg.innerHTML = 'Alright <em>' + userName + '</em>, here is your guide on how to survive Davis campus life!' +
            '<li>Before the quarter starts, you have to rub an egghead at least <em>' + userNum + '</em> times. Anything less means that you will fail your exams.</li>' +
            '<li>Trying to avoid the wrath of your professors? Bring them some <em>' + userCandy + '</em> and start your class off right. Your classmates will thank you later.</li>' +
            '<li>Try not to get too caught off guard by the winters in Davis. Rumor has it that winds can go up to <em>' + userWindSpeed + '</em> miles per hour with a 30 degree windchill. Bringing a light cardigan will do the trick.</li>' +
            '<li>Lastly, be sure to plan your trips to campus accordingly. You never know if the bus driver is <em>' + userVerb +'ing</em>.</li>' +
            '<br><em>DISCLAIMER:</em> This guide has not been properly tested and may only result in a 0.0000001% success rate. Proceed with caution.';
            myMsg.className = 'show';
          }
        return false;
    }

    function clearForm() {
        myMsg.className = 'clear';
}
