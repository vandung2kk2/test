window.onload = function(){
	var username = document.getElementById("username"),
		password = document.getElementById("password");
	var showPass = document.getElementById("show-hide");
	var loginBtn = document.getElementById("login");
	loginBtn.addEventListener("click",submitLogin);
	function submitLogin(){
		loginBtn.classList.add("active");
	}

	password.addEventListener("keyup",function(){
		if(password.value != "") showPass.style.display = "block";
			else showPass.style.display = "none"
	})

	showPass.onclick = function(){
		this.classList.toggle("hide-pass");
		if(password.type == "password"){
			password.type = "text"
		}else password.type = "password"
	}
}