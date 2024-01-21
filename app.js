const randomNRfeedback = document.querySelector("#randomNumber");
const generateRandomBtn = document.querySelector("#generateRandomBtn");

generateRandomBtn.addEventListener("click", () => {
  
    const randomNumber = Math.floor(Math.random() * 20) + 1; //1 - 10 - Math.random() * (max - min) + min;
    
    const feedbackMessage = `Random Number: ${randomNumber}`;
    console.log(feedbackMessage);

    randomNRfeedback.innerHTML = feedbackMessage;
});