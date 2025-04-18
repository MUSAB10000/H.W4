// Homepage dynamic Greeting Based on Time of Day
function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greetingText;
  
    if (hours < 12) {
      greetingText = "Good morning!";
    } else if (hours < 18) {
      greetingText = "Good afternoon!";
    } else {
      greetingText = "Good evening!";
    }
    
    document.getElementById("greeting").innerText = greetingText;
  }
  updateGreeting();
  