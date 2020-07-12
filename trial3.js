function validateEmail() {

    var email = document.getElementById('txtEmail');
    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var errorMsg = document.getElementById("errorMsg");
    var successMsg = document.getElementById("successMsg");

    if (email.value == "") {
        errorMsg.style.display = "block";
        document.getElementById("errorMsg").innerHTML = "  Please enter your Email Id  ";
    }
    else if (!mailFormat.test(email.value)) {
        errorMsg.style.display = "block";
        document.getElementById("errorMsg").innerHTML = "  Email Address is not valid, Please provide a valid Email ";
        email.focus;
        return false;
    }
    else {
        successMsg.style.display = "block";
        document.getElementById("successMsg").innerHTML = " Success ";
        errorMsg.style.display = "none";
    }
    
}
function Submit(){
    let T = document.getElementById("time").value;
    return T;

}


// javascript
function add(){  
    //for first number
        var firstN = document.getElementById("firstName").value;
        if (firstN == ""){
            alert("First Number is require");
            return;
        }
        firstN = parseFloat(firstN);
        if(isNaN(firstN)){
            alert("please enter a valid number in first number");
            return;
        }   
        //for second number
        var secondN = document.getElementById("secondName").value;
        if (secondN == ""){
            alert('second number is require');
            return;
        }
        secondN = parseFloat(secondN);
        if (isNaN(secondN)){
            alert('please enter valid number in Second Number');
            return;
        }
        document.getElementById("result").value = firstN + secondN;
    }

    function sub(){  
        //for first number
            var firstN = document.getElementById("firstName").value;
            if (firstN == ""){
                alert("First Number is require");
                return;
            }
            firstN = parseFloat(firstN);
            if(isNaN(firstN)){
                alert("please enter a valid number in first number");
                return;
            }   
            //for second number
            var secondN = document.getElementById("secondName").value;
            if (secondN == ""){
                alert('second number is require');
                return;
            }
            secondN = parseFloat(secondN);
            if (isNaN(secondN)){
                alert('please enter valid number in Second Number');
                return;
            }
            document.getElementById("result").value = firstN - secondN;
        }
        function multiply(){  
            //for first number
                var firstN = document.getElementById("firstName").value;
                if (firstN == ""){
                    alert("First Number is require");
                    return;
                }
                firstN = parseFloat(firstN);
                if(isNaN(firstN)){
                    alert("please enter a valid number in first number");
                    return;
                }   
                //for second number
                var secondN = document.getElementById("secondName").value;
                if (secondN == ""){
                    alert('second number is require');
                    return;
                }
                secondN = parseFloat(secondN);
                if (isNaN(secondN)){
                    alert('please enter valid number in Second Number');
                    return;
                }
                document.getElementById("result").value = firstN * secondN;
            }
            function division(){  
                //for first number
                    var firstN = document.getElementById("firstName").value;
                    if (firstN == ""){
                        alert("First Number is require");
                        return;
                    }
                    firstN = parseFloat(firstN);
                    if(isNaN(firstN)){
                        alert("please enter a valid number in first number");
                        return;
                    }   
                    //for second number
                    var secondN = document.getElementById("secondName").value;
                    if (secondN == ""){
                        alert('second number is require');
                        return;
                    }
                    secondN = parseFloat(secondN);
                    if (isNaN(secondN)){
                        alert('please enter valid number in Second Number');
                        return;
                    }
                    document.getElementById("result").value = firstN / secondN;
                }