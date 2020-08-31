window.onload = function(){
	var loginBtn = document.getElementById("login");
	loginBtn.addEventListener("click",submitLogin);
	function submitLogin(){
		loginBtn.classList.add("active");
	}
}