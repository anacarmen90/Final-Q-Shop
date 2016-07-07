document.addEventListener('DOMContentLoaded', function() {

  var contactForm = document.querySelector('#contact');
  var inputs = ['#email', '#subject', '#message'];

  addListener(inputs);
  checkForError(inputs, contactForm);
})
