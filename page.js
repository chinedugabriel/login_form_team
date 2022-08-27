let input_password = document.getElementById("input_password");

let icon_view = document.getElementById("icon_view");

let icon_btn_toggle= document.getElementById("click_preView");

// this function help to toggle the view of input password when a user clicks on the eye icon in the login form section 
function preView (){
    if(icon_btn_toggle.hasAttribute("name")){
        console.log("working");
        icon_view.src="img/visibility_img.png";
        input_password.type = "text";
        icon_btn_toggle.removeAttribute("name")
    }else{
        icon_view.src="img/visibility_off_img.png";
        input_password.type = "password"
        icon_btn_toggle.setAttribute("name", "true")
    }
}

icon_btn_toggle.addEventListener("click", preView);

