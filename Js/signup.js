function signupvalidation(){
    //phonenumber validation
    var phnum = document.getElementById("phnumber").value
    var phoneflag=false
    if(phnum.length==10){
    if((phnum[0]>='6')&&(phnum[0]<='9')){
        phoneflag=true
        }
    }
    else{
        document.getElementById("phnum_msg").innerHTML="(Check Your Number)"
    }
    //emailid validation
    var emailid = document.getElementById("mail").value
    var emailflag=false
    var attherate=false
    var uppercase=false
    for(var i=0;i<emailid.length;i++){
        if((emailid[i]=='@')){
            attherate=true
        }
        if((emailid[i]>='A')&&(emailid[i]<='Z')){
            uppercase=true
        }
    }
    if((attherate==true)&&(uppercase==false)){
        emailflag=true
    }
    else{
        document.getElementById("email_msg").innerHTML="(Check Your Email)"
    }
    //password(create password)
    var creapass=document.getElementById("createpass").value
    var creapassflag=false
    var upper=0
    var lower=0
    var number=0
    var special=0
    if((creapass.length>=8)&&(creapass.length<=16)){
        for(var i=0;i<=creapass.length;i++){
            if((creapass[i]>='A')&&(creapass[i]<='Z')){
                upper++
            }
            else if((creapass[i]>='a')&&(creapass[i]<='z')){
                lower++
            }
            else if((creapass[i]>='0')&&(creapass[i]<='9')){
                number++
            }
            else{
                special++
            }

        }
    }
    if((upper>=1)&&(lower>=1)&&(number>=1)&&(special>=1)){
        creapassflag=true
    }
    else{
        document.getElementById("creapass_msg").innerHTML="(Enter Strong Password)"
    }
    //confirmpass
    var confirmpass = document.getElementById("confirmpass").value
    var confirmpassflag=false
    if(creapass==confirmpass){
        confirmpassflag=true
    }
    else{
        document.getElementById("confirmpass_msg").innerHTML="(Password Mismatch)"
    }
    if((phoneflag==true)&&(emailflag==true)&&(creapassflag==true)&&(confirmpassflag==true)){
        alert("Successfully Signed Up")
        window.location.href="../Html/interface.html"
    }
    else{
        alert("MisMatch Credentials")
    }
    }