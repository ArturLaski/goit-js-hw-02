function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
      return message;
    } else {
      return message.slice(0, maxLength) + '...';
    }
  }
  
  console.log(formatMessage("Curabitur ligula sapien", 16));  // "Curabitur ligula..."
  console.log(formatMessage("Vestibulum facilisis purus nec", 30));  // "Vestibulum facilisis purus nec"
  