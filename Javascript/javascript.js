// JavaScript Document
<!--//
/*This Script allows people to enter by using a form that asks for a
UserID and Password*/


function pasuser(form) {
if (form.txtUserName.value=="patrickquing") { 
if (form.txtPassword.value=="p@ssword") {              
location="gallery.html"

} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
//-->
