let email = document.getElem("email").value;
let password = document.getElementsByClassName("pass").value;
let repassword = document.getElementsByClassName("repass").value;
function dk(email, password, repassword){
    var user = {
        email: email,
        password: password,
        repasswords : repassword
    }
    let json = JSON.stringify(user);
    localStorage.setItem("user", json);
}