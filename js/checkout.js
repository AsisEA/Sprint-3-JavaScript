// Get the input fields
// Nom
const firstName = document.querySelector('#firstName');
// Cognom
const lastName = document.querySelector('#lastName');
// Correu
const email = document.querySelector('#email');
// Contrasenya
const password = document.querySelector("#password");
// Adreça
const address = document.querySelector("#address");
// Telefon
const phone = document.querySelector('#phone');

// Get the error elements
// Nom
const errorName = document.querySelector('#errorName');
const shortName = document.querySelector('#shortName');
// Cognom
const errorLastName = document.querySelector('#errorLastName');
const shortLastName = document.querySelector('#shortLastName');
// Correu
const shortEmail = document.querySelector('#shortEmail');
const notEmail = document.querySelector('#notEmail');
// Contrasenya
const errorPassword = document.getElementById("#errorPassword");
const shortPassword = document.getElementById("#shortPassword");
// Adreça
const shortAddress = document.querySelector("#shortAddress");
const errorPhone = document.getElementById('errorPhone'); 


// Exercise 8
    // Validate fields entered by the user: name, phone, password, and email
function validate() {

    // Nom
    firstName.addEventListener("input", function (event) {
        // Comprova de que hi hagi mes de 3 caracters mirant l'atribut "minlength"
        if (firstName.validity.tooShort) {
            firstName.classList.add('is-invalid');
            shortName.style.display = 'block';
        } else {
            firstName.classList.remove('is-invalid');
            firstName.classList.add('is-valid');
            shortName.style.display = 'none';
        }
        // Comprova que no tingui números mirant l'atribut "Regex"
        if (firstName.validity.patternMismatch){
            firstName.classList.add('is-invalid');
            errorName.style.display = 'block';
        } else {
            errorName.style.display = 'none';
        }
    });

    // Cognom
    lastName.addEventListener("input", function (event) {
        // Comprova de que hi hagi mes de 3 caracters mirant l'atribut "minlength"
        if (lastName.validity.tooShort) {
            lastName.classList.add('is-invalid');
            shortLastName.style.display = 'block';
    
        } else {
            lastName.classList.remove('is-invalid');
            lastName.classList.add('is-valid');
            shortLastName.style.display = 'none';
        }
        // Comprova que no tingui números mirant l'atribut "Regex"
        if (lastName.validity.patternMismatch){
            lastName.classList.add('is-invalid');
            errorLastName.style.display = 'block';
        } else {
            errorLastName.style.display = 'none';
        }
    });

    // Email
    email.addEventListener("input", function (event) {
        // Comprova de que hi hagi mes de 3 caracters mirant l'atribut "minlength"
        if (email.validity.tooShort) {
            email.classList.add('is-invalid');
            shortEmail.style.display = 'block';
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            shortEmail.style.display = 'none';
        }
        // Comprova que tingui format d'email mirant l'atribut "Regex"
        if (email.validity.typeMismatch) {
            email.classList.add('is-invalid');
            notEmail.style.display = 'block';
        } else {
            notEmail.style.display = 'none';
        }
    });

    // Contrasenya
    password.addEventListener("input", function (event) {
        // Comprova de que hi hagi mes de 3 caracters mirant l'atribut "minlength"
        if (password.validity.tooShort) {
            password.classList.add('is-invalid');
            shortPassword.style.display = 'block';
    
        } else {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            shortPassword.style.display = 'none';
        }
        // Comprova que no tingui números i lletres mirant l'atribut "Regex"
        if (password.validity.patternMismatch){
            password.classList.add('is-invalid');
            errorPassword.style.display = 'block';
        } else {
            errorPassword.style.display = 'none';
        }
    });

    // Adreça
    address.addEventListener("input", function (event) {
        // Comprova de que hi hagi mes de 3 caracters mirant l'atribut "minlength"
        if (address.validity.tooShort) {
            address.classList.add('is-invalid');
            shortAddress.style.display = 'block';
        } else {
            address.classList.remove('is-invalid');
            address.classList.add('is-valid');
            shortAddress.style.display = 'none';
        }
    });

    // Telefon
    phone.addEventListener("input", function (event) {
        // Comprova de que hi hagi mes de 3 caracters mirant l'atribut "minlength"
        if (phone.validity.tooShort) {
            phone.classList.add('is-invalid');
            shortPhone.style.display = 'block';
        } else {
            phone.classList.remove('is-invalid');
            phone.classList.add('is-valid');
            shortPhone.style.display = 'none';
        }
        // Comprova que no tingui lletres mirant l'atribut "Regex"
        if (phone.validity.patternMismatch) {
            phone.classList.add('is-invalid');
            errorPhone.style.display = 'block';
        } else {
            errorPhone.style.display = 'none';
        }
    });

}