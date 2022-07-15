let mail=document.getElementById('email');
let phone=document.getElementById('phone');
let span=document.getElementsByTagName('span');

//Mail Validation
mail.onkeydown=function (e) {
 const regEX=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
 const regEXo=/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(regEX.test(mail.value)||(regEXo.test(mail.value))){
      span[0].innerText="valid EMail"
      span[0].style.color="lime"
	} else{
		span[0].innerText="Invalid EMai"
        span[0].style.color="red"
	}
	}

//Phone Validation
phone.onkeydown=function (e) {
 const regN=/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{8,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
	if(regN.test(phone.value)){
      span[1].innerText="valid number"
      span[1].style.color="lime"
      span[1].style.fontSize="20px";
	} else{
		span[1].innerText="Invalid number"
        span[1].style.color="red"
	}
	}