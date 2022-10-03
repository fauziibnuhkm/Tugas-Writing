function getFormData(){
    let data={
        firstName : document.getElementById("first-name").value,
        lastName : document.getElementById("last-name").value,
        zipCode : document.getElementById("city").value,
        check : document.getElementById("check").checked,
    }
    return data
}
function isNumber(string){
    if(isNaN(string)== false){
        return true
    }else{
        return false
    }
}
function isLength(string,integer){
    if(string.length !== integer.length){
        return true
    }else{
        return false
    }
}
function (checkboxIsChecked){
    if(document.getElementById(check).checked){
        return true;
    }else{
        return false
    }
}
function validateFormData(obj){
    if(obj != null && isNumber(obj.zipCode) && checkboxIsChecked()){
        return true
    }else{
        return false
    }
}
function resetForm(){
    document.querySelector('form').reset()
}
function submit(){
    let submitButton = getFormData('warning')
    let data = validateFormData(getFormData());
    let warning = ineerHTML = 'Periksa form anda sekali lagi';

    if (data === false){
}else{
    return warning.ineerHTML = '';
}
}