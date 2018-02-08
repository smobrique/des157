var pola01 = document.getElementById('pola01');
var pola02 = document.getElementById('pola02');
var pola03 = document.getElementById('pola03');

var desc1 = document.getElementById('desc1');
var desc2 = document.getElementById('desc2');
var desc3 = document.getElementById('desc3');

var close = document.getElementById('close');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');

pola01.addEventListener('click', function(){
  desc1.style.display="block";
})

close.addEventListener('click', function(){
  desc1.style.display="none";
})

pola02.addEventListener('click', function(){
  desc2.style.display="block";
})

close2.addEventListener('click', function(){
  desc2.style.display="none";
})

pola03.addEventListener('click', function(){
  desc3.style.display="block";
})

close3.addEventListener('click', function(){
  desc3.style.display="none";
})
