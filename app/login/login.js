document.addEventListener('DOMContentLoaded', function(){

  var loginForm = document.querySelector('#login');
  var inputs = ['#username', '#password'];

  addListener(inputs);
  checkForError(inputs,loginForm);
})
