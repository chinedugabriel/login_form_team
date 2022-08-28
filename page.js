// login var...
let input_password = document.getElementById("input_password");

let icon_view = document.getElementById("icon_view");

let icon_btn_toggle= document.getElementById("click_preView");

// this function help to toggle the view of input password when a user clicks on the eye icon in the login form section 
function preView (){
    if(input_password.type == "password"){
        icon_view.src="img/visibility_img.png";
        input_password.type = "text";
    }else{
        icon_view.src="img/visibility_off_img.png";
        input_password.type = "password";
    }
}
// this event calls the function preView to toggle the password view
icon_btn_toggle.addEventListener("click", preView);

// signUp var
let signUpEmail = document.getElementById("email-signUp");

let signUpPassword = document.getElementById("input_signUp_password");

// passwordIndicator var..
let passwordIndicator = document.getElementById("passwordIndicator");
// indicator var.. 
let level_1 = document.getElementById("level1");
let level_2 = document.getElementById("level2");
let level_3 = document.getElementById("level3");
let level_4 = document.getElementById("level4");
let level_5 = document.getElementById("level5");
let message = document.getElementById("message");
// let specialCharacter = /@#$%!^&*()_+=><?\/[]{}/

function singUpChecker(){
    // length of the words
    // check for special characters like @#$%!^&*()_+=><?/[]{} 
    // check how many times a character occurs
    // message(weak, medium, strong, veryStrong)
    // message_color(red, yellow, orange, green)
}

function passwordStrengthChecker(){
    // this display the passwordIndicatorSection when the password input change
    passwordIndicator.style.display = "flex";
    
    // this checks the characters in the password input  
    if(signUpPassword.value.length <=4){
        // console.log("it's working");
        message.innerHTML = "weak";
        level_1.style.backgroundColor ="red";
        level_2.style.backgroundColor ="red";
        level_3.style.backgroundColor ="";
        level_4.style.backgroundColor ="";
        level_5.style.backgroundColor ="";
        message.style.color = "red";
    }else if(signUpPassword.value.length <=6 && /[0-9]/.test(signUpPassword.value)&& /[a-z]/.test(signUpPassword.value)){
        message.innerHTML = "medium";
        level_1.style.backgroundColor ="yellow";
        level_2.style.backgroundColor ="yellow";
        level_3.style.backgroundColor ="";
        level_4.style.backgroundColor ="";
        level_5.style.backgroundColor ="";
        message.style.color = "yellow";
        
    }else if(/[\d]/.test(signUpPassword.value)&& /[a-z]/.test(signUpPassword.value)&& /[A-Z]/.test(signUpPassword.value) && /[\b@#$%!^&*()_+=><?/['\]'{}]/.test(signUpPassword.value)){
        message.innerHTML = "Very strong";
        level_1.style.backgroundColor ="#04ee81";
        level_2.style.backgroundColor ="#04ee81";
        level_3.style.backgroundColor ="#04ee81";
        level_4.style.backgroundColor ="#04ee81";
        level_5.style.backgroundColor ="#04ee81";
        message.style.color = "green";
    }
    else if( /[a-z]/.test(signUpPassword.value) && /[@#$%!^&*()_+=><?/['\]'{}]/.test(signUpPassword.value)){
        message.innerHTML = "strong";
        level_1.style.backgroundColor ="orange";
        level_2.style.backgroundColor ="orange";
        level_3.style.backgroundColor ="orange";
        level_4.style.backgroundColor ="";
        level_5.style.backgroundColor ="";
        message.style.color = "orange";
        
    }
    // message.innerHTML = signUpPassword.value;

}
signUpPassword.addEventListener("change", passwordStrengthChecker);
