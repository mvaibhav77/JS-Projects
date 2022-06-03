// Elements
const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const zip = document.getElementById('zip');
const submit = document.querySelector('#submit');

// Event listeners
Name.addEventListener('blur',validateName);
email.addEventListener('blur',validateEmail);
phone.addEventListener('blur',validatePhone);
zip.addEventListener('blur',validateZip);






// Validation functions
function validateName(){
    let value = Name.value;
    const re = /^[A-Za-z]{2,20}$/;
    console.log(re.exec(value));
    if(re.exec(value)===null){
        Name.classList.add('is-invalid');
    }else{
        Name.classList.remove('is-invalid');
    }
}

function validateEmail(){
    let value = email.value;
    const re=/^[a-zA-Z]([\w\d\-\.]+)@([\w\d\.\-]+)\.[a-zA-Z]{2,5}$/;
    if(re.exec(value)===null){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
}
function validatePhone(){
    let value = phone.value;
    const re = /^[1-9]{10}$/;
    if(re.exec(value)===null){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }
}
function validateZip(){
    let value = zip.value;
    const re = /^[1-9][0-9]{5}$/;
    if(re.exec(value)===null){
        zip.classList.add('is-invalid');
    }else{
        zip.classList.remove('is-invalid');
    }
}