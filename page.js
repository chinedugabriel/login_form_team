// login var...
let input_password = document.getElementById("input_password");
let input_email = document.getElementById("email");

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




    // length of the words
    // check for special characters like @#$%!^&*()_+=><?/[]{} 
    // check how many times a character occurs
    // message(weak, medium, strong, veryStrong)
    // message_color(red, yellow, orange, green)

function passwordStrengthChecker(){
    // this display the passwordIndicatorSection when the password input change
    passwordIndicator.style.display = "flex";
    
    // this checks the characters in the password input  
    if(signUpPassword.value.length <=4){
        // console.log("it's working");
        message.innerHTML = "weak";
        level_1.style.backgroundColor ="red";
        level_2.style.backgroundColor ="";
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
        message.style.color = "#04ee81";
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
}
signUpPassword.addEventListener("change", passwordStrengthChecker);

// form var....
let registerForm = document.getElementById("register");
let loginForm = document.getElementById("login");

// makes the form section to display in flex
registerForm.style.display = "flex";

// the function validates the signup inputs
    function toggleFormSection(){
        if( registerForm.style.display == "flex" && signUpEmail.value != "" && signUpPassword.value != ""){
            registerForm.style.display = "none";
            loginForm.style.display = "flex";
            // this get and show the values from the signup form to the login form
            input_password.value = signUpPassword.value;
            input_email.value = signUpEmail.value;
        }else{
            alert("SignUp to join");
        }
    }
    document.getElementById("btn-signUp").addEventListener("click", toggleFormSection);