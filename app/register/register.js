document.addEventListener('DOMContentLoaded', function() {

  var registerForm = document.querySelector('#register');
  var inputs = ['#username','#email','#password','#confirm-password'];

  addListener(inputs);

  checkForError(inputs, registerForm);
})
