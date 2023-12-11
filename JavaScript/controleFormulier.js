"use strict"

// definitie globale variabelen: helemaal bovenaan



let firstNameTxt;
let lastNameTxt;
let emailTxt;
let telTxt;

let checkTxt;

let selectedLunchDinerTxt;
let lunchDinerTxt;

let selectedPersonsTxt;
let personsTxt;

let timeTxt;
let dateTxt;

let tableTxt;



let allesCorrectIngevuld = true;


// definitie helper functies: boven hoofdfunctie

// function controleerVoorwaardenLunchDiner(){

//     if(lunchDinerTxt !== "Lunch" && lunchDinerTxt !== "Diner") {
//         document.getElementById("lunch_diner_error").innerHTML = "Choose";
//         allesCorrectIngevuld = false;
//     }else {
//         document.getElementById("lunch_dinner_error").innerHTML = " ";
//     }

// }

// function  controleerVoorwaardenPersons(){

//     if( personsTxt !== "1" && personsTxt !== "2" && personsTxt !== "3" && personsTxt !== "4" && personsTxt !== "5" && personsTxt !== "6" ) {
//         document.getElementById("persons_error").innerHTML = "Choose how many persons."
//         allesCorrectIngevuld = false;
//     }else {
//         document.getElementById("persons_error").innerHTML = "";
//     }
// }

function controleerVoorwaardenTime(){

    if( timeTxt == ""){
        document.getElementById("time_error").innerHTML = "Invalid time";
        allesCorrectIngevuld = false;
    }else {
        document.getElementById("time_error").innerHTML = "";
    }
}

function  controleerVoorwaardenDate(){

    if(dateTxt == ""){
        document.getElementById("date_error").innerHTML =" invalid date";
        allesCorrectIngevuld = false;
    }else {
        document.getElementById("date_error").innerHTML= "";
    }
    
}

function controleerVoorwaardenTable() {
    let tableRadios = document.getElementsByName("table");
    let tableError = document.getElementById("table_error");
    let checked = false;

    for (let i = 0; i < tableRadios.length; i++) {
        if (tableRadios[i].checked) {
            checked = true;
            break;
        }
    }

    if (!checked) {
        tableError.innerHTML = "Kies een tafeloptie.";
        return false; // Geen tafeloptie geselecteerd
    } else {
        tableError.innerHTML = "";
        return true; // Tafeloptie geselecteerd
    }
}


function controleerVoorwaardenVoornaam(){

   

    if(firstNameTxt.length < 2 || lastNameTxt.lenght < 2) {
        document.getElementById("firstname_error").innerHTML="It has to be 2 or more charachters";
        document.getElementById("lastname_error").innerHTML="It has to be 2 or more charakters.";
       

        allesCorrectIngevuld = false;
    }else {
        document.getElementById("firstname_error").innerHTML="";
        document.getElementById("lastname_error").innerHTML="";
        
    }

   
    
}

function controleerVoorwaardenEmail(){

    let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
    
   

    if( regExp.test(emailTxt) == false){
        document.getElementById("email_error").innerHTML="This email is invalid";
        
        allesCorrectIngevuld = false;

    }else {
        document.getElementById("email_error").innerHTML="";
      
      

    }


}

function controleerVoorwaardenTel(){
    let regExpTel = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

    if( regExpTel.test(telTxt) == false){
        document.getElementById("tel_error").innerHTML="This number is invalid";
        allesCorrectIngevuld = false;

    }else{
        document.getElementById("tel_error").innerHTML="";

    }


}

function sendMail() {
    let link = "mailto:" + encodeURIComponent("rafal.zado92@hotmail.com")
    + encodeURIComponent(document.getElementById('rafal.zado92@hotmail.com').value)
    + "?cc=" + encodeURIComponent("hetCCadres@example.com;tweedeCCadres@example.com")
      + "&subject=" + encodeURIComponent("Dit is het onderwerp")
      + "&body="
      + "naam:"
      + encodeURIComponent(document.getElementById('firstname').value)
      + encodeURIComponent("\r\n\n")
      + "bericht:"
      + encodeURIComponent(document.getElementById('lastname').value);
      window.location.href = link;
  //zorgt voor versturing naar mail programma
      }
  






//definitie hoofdfunctie als laatste: verstuur()


function verstuur() {

    firstNameTxt=document.getElementById("firstname").value;
    lastNameTxt=document.getElementById("lastname").value;
    emailTxt=document.getElementById("email").value;
    telTxt=document.getElementById("tel").value;
    checkTxt=document.getElementById("checkbox").checked;
    
    selectedLunchDinerTxt = document.getElementById("lunch-diner").selectedIndex;
    lunchDinerTxt = document.getElementById("lunch-diner").value;

    selectedPersonsTxt = document.getElementById("persons").selectedIndex;
    personsTxt = document.getElementById("persons").value;


    timeTxt = document.getElementById("time").value;
    dateTxt = document.getElementById("date").value;

    // tableTxt = document.getElementById("table").selectedIndex;


    

    allesCorrectIngevuld = true;

    if(selectedLunchDinerTxt == 0){
        document.getElementById("lunch_diner_error").innerHTML="Choose";
        allesCorrectIngevuld= false;

    }else {
        document.getElementById("lunch-diner").innerHTML="";
  
        
    }

    if(selectedPersonsTxt == 0){
        document.getElementById("persons_error").innerHTML="How many persons?";
        allesCorrectIngevuld = false;
    }else {
        // personsTxt = document.getElementById("persons").value;
        // controleerVoorwaardenPersons();

        document.getElementById("persons").innerHTML="";
    }

    if(timeTxt == 0){
        document.getElementById("time_error").innerHTML="Choose your time";
        allesCorrectIngevuld = false;
    }else {
        controleerVoorwaardenTime();
    }

    if(dateTxt == 0){
        document.getElementById("date_error").innerHTML="Choose your date";
        allesCorrectIngevuld = false;
    }else {
        controleerVoorwaardenDate();
    }

    if(tableTxt == 0){
        document.getElementById("table_error").innerHTML = "Kies een tafeloptie.";
        allesCorrectIngevuld = false;
    } else {
        
        controleerVoorwaardenTable();
    }



    if(firstNameTxt.length==0 || lastNameTxt.lenght==0){
        document.getElementById("firstname_error").innerHTML="Your Name";
        document.getElementById("lastname_error").innerHTML="Your last Name";
       
        allesCorrectIngevuld = false;

    } else  {
       controleerVoorwaardenVoornaam();
              
    }

    if(emailTxt==0){
        document.getElementById("email_error").innerHTML="Your Email";
        allesCorrectIngevuld = false;

    }else {

        controleerVoorwaardenEmail();

    }

    if(telTxt==0){
        document.getElementById("tel_error").innerHTML="Your number";
        allesCorrectIngevuld = false;
    }else {

        controleerVoorwaardenTel();
    }

    if(checkTxt == 0){
        document.getElementById("checkbox_error").innerHTML="Pls accept the terms and conditions."
        allesCorrectIngevuld = false;
    }





        if(allesCorrectIngevuld){



            document.write("")
            let link = "mailto:" + encodeURIComponent("rafal.zado92@hotmail.com")
            + "?cc=" + encodeURIComponent("rafal.zado92@hotmail.com")
            + "&subject=" + encodeURIComponent("Form validation")
            + "&body=" 
            + "firstname:"
            + encodeURIComponent(firstNameTxt)  
            + encodeURIComponent("\r\n\n")
            + "lastname:"
            + encodeURIComponent(lastNameTxt)
            + encodeURIComponent("\r\n\n")
            + "email:"
            + encodeURIComponent(emailTxt)
            + encodeURIComponent("\r\n\n")
            + "tel:"
            + encodeURIComponent(telTxt)  
            + encodeURIComponent("\r\n\n")

            + "lunch-diner:" 
            + encodeURIComponent(lunchDinerTxt) 
            + encodeURIComponent("\r\n\n")
            + "persons:" 
            + encodeURIComponent(selectedPersonsTxt) 
            + encodeURIComponent("\r\n\n") 
            + "time:"
            + encodeURIComponent(timeTxt)
            + encodeURIComponent("\r\n\n")
            + "date:"
            + encodeURIComponent(dateTxt)
            + encodeURIComponent("\r\n\n")
            + "table:"
            + encodeURIComponent(tableTxt)  
            + encodeURIComponent("\r\n\n")
            
            
           
            // + "check:"
            // + encodeURIComponent(checkTxt)
            // + encodeURIComponent("\r\n\n")
            window.location.href = link;
            window.location.href = "index.html";

            


    

}
    }


    

