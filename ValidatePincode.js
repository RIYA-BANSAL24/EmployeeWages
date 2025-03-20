const validatePinCode = (pinCode) => {
    const pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pinCode);
};

// Test Cases
console.log(validatePinCode("110001"));  
console.log(validatePinCode("560102"));  
console.log(validatePinCode("000123"));  
console.log(validatePinCode("281403"));   
console.log(validatePinCode("281406")); 
console.log(validatePinCode("12A456")); 