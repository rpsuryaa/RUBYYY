// Method 1

function formValidation (){
    console.log("Form Validation called");
    formValidationCompleted();
}
function formValidationCompleted(){
    console.log("Form validation call back successful");
}
formValidation();

//  Method 2

function formValidation (){
    setTimeout(()=> {
        console.log("Form Validation called");
        formValidationCompleted();
    },2000); // only after 2 seconds the form validation will be called.
}
function formValidationCompleted(){
    console.log("Form validation call back successful");
}
formValidation();

// Method 3

function formValidation (fVC){
    setTimeout(()=> {
        console.log("Form Validation called");
        console.log(fVC);
    },2000); // only after 2 seconds the form validation will be called.
}
function formValidationCompleted(){
    console.log("Form validation call back successful");
}
formValidation(formValidationCompleted);