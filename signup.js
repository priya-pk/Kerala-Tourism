function validation(){
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");
    let phNo = document.getElementById("phNo");

    
    let emailError = false;
    let pwdError = false;
    let phoneError = false;
    let fnameError = false;
    let lnameError = false;
    

    //email
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(!regexp.test(email.value.trim())){
        error.innerHTML = "Invalid email";
        error.style.color="red";
        emailError= true;
    }
    else{
        error.innerHTML = "Valid email";
        error.style.color = "green";
        email.style.border = "2px solid green";
    }

    //password
    let regpwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    if(regpwd.test(pwd.value)){
        if(pwd.value.length<9){
            pwdcmt1.innerHTML = "Week Password";
            pwdcmt1.style.color = "red";
            pwd.style.border = "2px solid red";
            pwdError = true;
        }
        else if(pwd.value.length<15){
            pwdcmt1.innerHTML = "Medium Strength";
            pwdcmt1.style.color = "orange";
            pwd.style.border = "2px solid orange";
        }
        else{
            pwdcmt1.innerHTML = "Strong Password";
            pwdcmt1.style.color = "green";
            pwd.style.border = "2px solid green";
        }
    }
    else{
        pwdcmt1.innerHTML = "Invalid";
        pwdcmt1.style.color = "red";
        pwd.style.border = "2px solid red";
        pwdError = true;
    }

     //phone number
    let regph = /^(\d{10})|(\d{4}-\d{3}-\d{3})|(\d{3}-\d{3}-\d{4})|(\d{3}.\d{3}.\d{4})$/
    if(!regph.test(phNo.value)){
        phno.innerHTML = "Invalid";
        phno.style.color = "red";
        phNo.style.border = "2px solid red";
        phoneError= true;
    }
    else{
        phno.innerHTML = "Valid";
        phno.style.color = "green";
        phNo.style.border = "2px solid green";
    }


    //Name
    let regfname = /^([a-z][A-z]{2,20})$/
    if(!regfname.test(fname.value.trim())){
        fName.innerHTML = "Invalid";
        fName.style.color = "red";
        fname.style.border = "2px solid red";
        fnameError = true;
    }
    else{
        fName.innerHTML = "Valid";
        fName.style.color = "green";
        fname.style.border = "2px solid green";
    }

    let reglname = /^([a-z][A-z]{2,20})$/
    if(!reglname.test(lname.value.trim())){
        lName.innerHTML = "Invalid";
        lName.style.color = "red";
        lname.style.border = "2px solid red";
        lnameError = true;
    }
    else{
        lName.innerHTML = "Valid";
        lName.style.color = "green";
        lname.style.border = "2px solid green";
    }



    if(emailError===true||pwdError===true||phoneError===true||fnameError===true||fnameError===true){
        return false;
    }
    else{
        
        return true;
    }
}