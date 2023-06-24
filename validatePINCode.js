// June 24, 2023
// CodeWars: Categorize New Member (7 kyu challenge)
// Description: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

function validatePIN(pin) {
  //return true or false
  
  
// ^ asserts the start of the string.
//   (?:\d{4}|\d{6}) is a non-capturing group that matches either 4 digits (\d{4}) or 6 digits (\d{6}).
//   $ asserts the end of the string.
  var regex = /^(?:\d{4}|\d{6})$/;
  
  if(regex.test(pin)){
    return "true";
    // return true;
  } else{
    return "false";
    // return false;
  }
  
}

validatePIN("1234");

// ----- Best Practices ----- //
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }

// const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);
// ----- Best Practices ----- //