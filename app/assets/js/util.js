
/**
 * showError - Show an error for inputId
 *
 * @param  {String} inputId The id of the input we want show the error
 */function showError(inputId) {
  var parentNode =  document.querySelector(inputId).parentNode;
  parentNode.className +=  ' has-error';
  parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden','');
}

/**
 * showError - Hide the error for the input
 *
 * @param  {String} inputId The id of the input we show the error
 */
function hideError(inputId) {
  var parentNode =  document.querySelector(inputId).parentNode;
  parentNode.className = parentNode.className.replace('has-error','');

  parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden','');
  parentNode.querySelector('.help-block').className +=' hidden';
}

/**
 * onchangeElem - ON change action helper
 *
 * @param  {String} inputId element id to check
 */
function onchangeElem(inputId) {
  isEmptyInput(inputId) ? showError(inputId) : hideError(inputId);
}

/**
 * isEmptyInput - Helper to determine if an input is empty
 *
 * @param  {String} inputId The id of the input to determine if empty
 * @return {boolean}
 */
function isEmptyInput(inputId) {
  return !document.querySelector(inputId).value
}

/**
*  @param{array} inputs
*
*/

function checkForError(inputs, formName) {
  formName.addEventListener('submit', function(event){
      var hasError = false;
      for(var i=0;i<inputs.length;i++) {
        if(isEmptyInput(inputs[i])) {
           hasError = true;
           showError(inputs[i]);
        } else {
          hideError(inputs[i]);
        }
      }
      //if at least one element had errors prevent default submit action
      if(hasError) {
        event.preventDefault();
      }
  })
}

/**
* function to addEventListener on all the inputs
*/

function addListener(inputs) {
  for(var i=0;i<inputs.length;i++) {
     document.querySelector(inputs[i]).addEventListener("keyup",function() {
       onchangeElem('#' + this.id);
     })
   }
}

//
function getParent(node, className) {
  if(node.parentNode.className.indexOf('control-label') > -1)
  

}
