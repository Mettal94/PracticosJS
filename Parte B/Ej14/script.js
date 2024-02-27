function validar(){
    let form = document.forms["login"]
    let user = form.user.value;
    let pass = form.pass.value;
    var patronu = /^[A-Z].*[0-9].*[0-9].*[0-9].{0,4}$/;
    var patronp = /^[0-9].*[A-Z].*[0-9]$/;
    var usertest = patronu.test(user);
    var passtest = patronp.test(pass);


    if(usertest && passtest){
    return true;
    }else{
        document.getElementById("error").innerHTML = "Usuario y contraseña incorrectos.";
        setTimeout(function() {
            document.getElementById("error").innerHTML = "";
        }, 1000);
        return false;
    }
  }