"use strict";
let firstnameTxt;
let allesCorrectIngevuld = false
;
let lastnameTxt;
let emailTxt;
let telTxt;
let timeTxt;
let dateTxt;

let geselecteerdeLunchDiner;
let lunchDinerTxt;
let geselecteerdePersons;
let personsTxt;
let textTxt;
let checkBox;



function controleerVoorwaardenTime() {
    const inputTime = document.getElementById("time").value;
    const minTime = "12:00";
    const maxTime = "20:00";

    if (inputTime < minTime || inputTime > maxTime) {
        document.getElementById("time_error").innerHTML = "Select time between 12:00 - 20:00.";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("time_error").innerHTML = "";
    }
}

function controleerVoorwaardenDate() {
    const inputDate = document.getElementById("date").value;
    const minDate = "2000-01-01";
    const maxDate = "9999-01-01";

    if (inputDate < minDate || inputDate > maxDate) {
        document.getElementById("date_error").innerHTML = "Select a valid date.";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("date_error").innerHTML = "";
    }
}


function controleerVoorwaardenFirstname(){
if(firstnameTxt.length < 2 ){
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
        document.getElementById("email_error").innerHTML = "Invalid email!";
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
    geselecteerdePersons = document.getElementById("persons").selectedIndex;
    personsTxt = document.getElementById("persons").value;
    timeTxt = document.getElementById("time").value; 
    dateTxt = document.getElementById("date").value; 
    checkBox = document.getElementById("checkbox").checked;
    textTxt = document.getElementById("text").value;

    allesCorrectIngevuld = true;



    if(firstnameTxt.length==0){
document.getElementById("firstname_error").innerHTML="Fill in.";
	allesCorrectIngevuld = false;
}
else{
	controleerVoorwaardenFirstname()
}


if(lastnameTxt.length==0){
    document.getElementById("lastname_error").innerHTML="Fill in.";
        allesCorrectIngevuld = false;
    }
    else{
        controleerVoorwaardenLastname()
    }

if(emailTxt.length == 0) {
    document.getElementById("email_error").innerHTML = "Fill in.";
    allesCorrectIngevuld = false;
  }
  else{
    controleerVoorwaardenEmail()
  }

  if(telTxt.length == 0) {
    document.getElementById("tel_error").innerHTML = " Fill in.";
    allesCorrectIngevuld = false;
  }
  else{
    controleerVoorwaardenTel()
  }


    if (geselecteerdeLunchDiner == 0) {
    document.getElementById("lunch-diner_error").innerHTML= " Choose an option.";
    allesCorrectIngevuld = false;
    }

    else{
    document.getElementById("lunch-diner_error").innerHTML="";
    }

    if (geselecteerdePersons== 0) {
        document.getElementById("persons_error").innerHTML= " Choose an option.";
        allesCorrectIngevuld = false;
        }
    
        else{
        document.getElementById("persons_error").innerHTML="";
        }


    if(timeTxt.length == 0){
        document.getElementById("time_error").innerHTML = " Select time";
        allesCorrectIngevuld = false;
    }
    else{
        controleerVoorwaardenTime()
    }


    if(textTxt.length==0){
        document.getElementById("text_error").innerHTML="Please provide some information.";
            allesCorrectIngevuld = false;
        }
        else{
         document.getElementById("text_error").innerHTML="";
        }

    if(checkBox == 0 ) {
        document.getElementById("checkbox_error").innerHTML = "Please accept!";
        allesCorrectIngevuld= false;
    }

    if(dateTxt.length == 0){
        document.getElementById("date_error").innerHTML = " Select a date.";
        allesCorrectIngevuld = false;
    }
    else{
        controleerVoorwaardenDate()
    }



        if(allesCorrectIngevuld){
            document.write("Alles is correct ingevuld");
            let link = "mailto:" + encodeURIComponent("ferhan.96@hotmail.com")
            + "?cc=" + encodeURIComponent("ferhan.96@hotmail.com")
            + "&subject=" + encodeURIComponent("Form validation")
            + "&body=" 
            + "lunch-diner:" 
            + encodeURIComponent(lunchDinerTxt) 
            + encodeURIComponent("\r\n\n")
            + "persons:" 
            + encodeURIComponent(personsTxt) 
            + encodeURIComponent("\r\n\n") 
            + "time:"
            + encodeURIComponent(timeTxtTxt)
            + encodeURIComponent("\r\n\n")
            + "date:"
            + encodeURIComponent(dateTxtTxt)
            + "firstname:"
            + encodeURIComponent(firstnameTxt)  
            + encodeURIComponent("\r\n\n")
            + "lastname:"
            + encodeURIComponent(lastnameTxt)
            + encodeURIComponent("\r\n\n")
            + "email:"
            + encodeURIComponent(emailTxt)
            + "tel:"
            + encodeURIComponent(telTxt)  
            + encodeURIComponent("\r\n\n")
            + "text:"
            + encodeURIComponent(textTxt)
            + encodeURIComponent("\r\n\n")
            + "check:"
            + encodeURIComponent(checkBox)
            + encodeURIComponent("\r\n\n")

            


    }

}