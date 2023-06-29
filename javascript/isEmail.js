var error_image = document.createElement("img");
error_image.src = "images/icon-error.svg";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate() {
    const result = document.getElementById('error-text');
    var email = document.getElementById("email-input").value;
    if (validateEmail(email)) {
        document.getElementById('error-image').removeChild(error_image);
        result.innerHTML = "";
        document.getElementById("input-and-submit").style.borderColor = "lightgray";
    }
    else{
        document.getElementById('error-image').appendChild(error_image);
        result.innerHTML = "Please provide a valid e-mail";
        document.getElementById("input-and-submit").style.borderColor = "red";
    }
    return false;
}


  function deneme(){
      alert("a")
  }



