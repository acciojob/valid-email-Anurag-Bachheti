function validEmail(str) {
   let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
	if(emailPattern.test(str)){
		return true;
	}else{
	return false;
	}
}	

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
