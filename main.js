


document.getElementById("btn_1").innerHTML="we are dope";

document.querySelector('title').innerHTML='welcome to test';

 document.querySelector('body').style.backgroundColor = 'blue';

 
 
 let new_new = document.createElement("h5");
 new_new.innerHTML = "welcome user 2";

 document.getElementById("btn_2").appendChild(new_new);



 
 
 let element2 = document.getElementById("btn_3");

function convert (){
	element2.style.backgroundColor = "red";
  element2.style.color = "white";
  element2.innerHTML = "Red Button"; 
}

element2.onclick = convert;
