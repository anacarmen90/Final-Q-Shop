document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#submit-button').addEventListener('click', function(event) {

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if(username=="" || email=="" || password =="" || confirmPassword=="") {
      event.preventDefault();
      alert("Nu ati completat toate campurile");
    }

//onchange e triggered abia cand parasesc inputului
//trebuie sa folosesc keyup
    if(username == "") {
      document.querySelector('#username').className += " red-border";
      console.log(  document.getElementById('error-username').className);
      document.getElementById('error-username').style.display="block";
      document.querySelector('#username').addEventListener('keyup', function(){
        document.querySelector('#username').className.replace('red-border', ' ');
      })
    }

    if(password=="" ) {
      console.log(checkEmail());
      document.querySelector('#password').className += " red-border";
      document.querySelector('#password').addEventListener('keyup', function(){
        document.querySelector('#password').className.replace('red-border', ' ');
      })
    }

    if(email=="" || checkEmail()==false) {
      document.querySelector('#email').className += " red-border";
      document.querySelector('#email').addEventListener('keyup', function(){
        document.querySelector('#email').className.replace('red-border', ' ');
      })

    }

    if(confirmPassword=="") {
      document.querySelector('#confirm-password').className += " red-border";
      document.querySelector('#confirm-password').addEventListener('keyup', function(){
        document.querySelector('#confirm-password').className.replace('red-border', ' ');
      })
    }
  })

  function checkEmail() {
    var check="@";
    var email = document.getElementById('email').value;
    if(email.indexOf(check) > -1) {
      return true;
    }
    else {
      return false;
    }

  }
})
