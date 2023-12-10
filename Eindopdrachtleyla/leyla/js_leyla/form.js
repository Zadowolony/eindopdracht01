"use strict";
let firstnameTxt;
let allesCorrectIngevuld=true;
let lastnameTxt;
let emailTxt;
let telTxt;
/*let timeTxt;*/

let geselecteerdeLunchDiner;
let lunchDinerTxt;




/*function controleerVoorwaardenTime() {
    const inputTime = new Date(`01/01/2000 ${timeTxt}`);
    const minTime = new Date(`01/01/2000 12:00`);
    const maxTime = new Date(`01/01/2000 20:00`);

    if (inputTime < minTime || inputTime > maxTime || isNaN(inputTime)) {
        document.getElementById("time_error").innerHTML = "Selecteer een tijd tussen 12:00 en 20:00.";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("time_error").innerHTML = "";
    }
}*/


function controleerVoorwaardenFirstname(){
if(voornaamTxt.length < 2 ){
document.getElementById("firstname_error").innerHTML="Minstens 2 karakters lang!";
		allesCorrectIngevuld = false;
	}
	else{
document.getElementById("firstname_error").innerHTML="";
	}
}

function controleerVoorwaardenLastname(){
    if(lastnameTxt.length < 2 ){
    document.getElementById("lastname_error").innerHTML="Minstens 2 karakters lang!";
            allesCorrectIngevuld = false;
        }
        else{
    document.getElementById("lastname_error").innerHTML="";
        }
    }


function controleerEmail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(emailTxt);
}  

function controleerVoorwaardenEmail() {
    if(!controleerEmail()) {
        document.getElementById("email_error").innerHTML = "Ongeldig e-mailadres!";
        allesCorrectIngevuld = false;
    }
    else {
        document.getElementById("email_error").innerHTML = "";
    }
}

function controleerTel() {
    const telRegex = /^(0|\+32)[1-9](\d{2}){3}(\d{2})?$/;
    return telRegex.test(telTxt);
}

function controleerVoorwaardenTel(){
    if(!controleerTel()) {
        document.getElementById("tel_error").innerHTML = "Invalid number";
        allesCorrectIngevuld = false;
    }
    else {
        document.getElementById("tel_error").innerHTML = "";
    }
}




function verstuur() {


    firstnameTxt = document.getElementById("firstname").value;
    lastnameTxt = document.getElementById("lastname").value;	
    emailTxt = document.getElementById("email").value;
    telTxt = document.getElementById("tel").value;
    geselecteerdeLunchDiner = document.getElementById("lunch-diner").selectedIndex;
    lunchDinerTxt = document.getElementById("lunch-diner").value;
   /* timeTxt = document.getElementById("time").value; */

    allesCorrectIngevuld = true;



    if(firstnameTxt.length==0){
document.getElementById("firstname_error").innerHTML="Vul in a.u.b.";
	allesCorrectIngevuld = false;
}
else{
	controleerVoorwaardenFirstname()
}


if(lastnameTxt.length==0){
    document.getElementById("lastname_error").innerHTML="Vul in a.u.b.";
        allesCorrectIngevuld = false;
    }
    else{
        controleerVoorwaardenLastname()
    }

if(emailTxt.length == 0) {
    document.getElementById("email_error").innerHTML = " Vul a.u.b. uw e-mailadres in.";
    allesCorrectIngevuld = false;
  }
  else{
    controleerVoorwaardenEmail()
  }

  if(telTxt.length == 0) {
    document.getElementById("tel_error").innerHTML = " Vul a.u.b. uw tel in.";
    allesCorrectIngevuld = false;
  }
  else{
    controleerVoorwaardenTel()
  }


    if (geselecteerdeLunchDiner == 0) {
    document.getElementById("lunch-diner_error").innerHTML= " Kies een optie a.u.b.";
    allesCorrectIngevuld = false;
    }

    else{
    document.getElementById("lunch-diner_error").innerHTML="";
    }

   /* if(timeTxt.length == 0){
        document.getElementById("time_error").innerHTML = "Kies";
        allesCorrectIngevuld = false;
    }
    else{
        controleerVoorwaardenTime();
    }*/


    if(allesCorrectIngevuld){
        document.write("Alles is correct ingevuld");

    }

}