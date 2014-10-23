//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirm_password = $("#confirm_password");
//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
};

function arePasswordsMatching() {
  return $password.val() === $confirm_password.val();
};

function canSubmit() {
 return isPasswordValid() && arePasswordsMatching();
};

function passwordEvent() {
    //Find out if the password is valid
  if(isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
  } else {
    //else show hint
    $password.next().show();
  }
};

function confirmPasswordEvent() {
    //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirm_password.next().hide();
  } else {
    //else show hint
    $confirm_password.next().show();
  }
};

function enableSubmitEvent() {
  $('#submit').prop("disabled", !canSubmit());
};

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
