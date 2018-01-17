var confirmed = false;
//var locId = "";
var loc="";

function confirmfinish(locId){
    loc = document.getElementById(locId);
    //window.alert(loc);
    if(!confirmed){
        document.getElementById('container-confirmation').style.display='block';
        document.getElementById('confirmationDiv').style.display='block';
        return false;
    } else {
        return true;
    }
}

function locFunction(){
    return loc;
}