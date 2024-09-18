function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
  }
  
  console.log(checkForSpam("Latest technology news"));  // false
  console.log(checkForSpam("Amazing sale, only tonight!"));  // true
  