function getFormData() {
    var data= {
        firstName : document.getElementById("first-name").value,
        lastName : document.getElementById("last-name").value,
        city : document.getElementById("city").value,
        zipCode : document.getElementById("zip-code").value,
        check : document.getElementById("check").checked
    }

    return data
}

function isNumber(string){
    if(isNaN(string)) {
        return false;
    }
    else {
        return true;
    }
}

function isLength(huruf,angka) {
    if(huruf.length==angka) {
        return true;
    }
    else {
        return false;
    }
}

function checkboxIsChecked() {
    let check = document.getElementById("check").checked

    if(check==true) {
        return true;
    }
    else {
        return false;
    }
}



function validateFormData(obj) {
    if(obj!== null && isNumber(obj.zipCode) && checkboxIsChecked()){
        return true;
    }
    else{
        return false;
    }
}

function resetForm() {
    document.getElementById("first-name").value=""
    document.getElementById("last-name").value=""
    document.getElementById("city").value=""
    document.getElementById("zip-code").value=""
    document.getElementById("check").checked=""
}

function submit() {

    document.getElementById('warning').style.color='#FF0000'
    if(!validateFormData(getFormData())) {
        document.getElementById('warning').innerHTML = "Periksa form anda sekali lagi"
    }
    else {
         document.getElementById('warning').innerHTML =""
    }
    
}