const audio = new Audio("mouse.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default action (navigation)
      audio.play();
  
      setTimeout(() => {
        // Navigate to the new page after the sound has had time to play
        const href = button.parentElement.getAttribute("href");
        if (href) {
          window.location.href = href;
        }
      }, 200); // delay (in milliseconds)
    });
  });