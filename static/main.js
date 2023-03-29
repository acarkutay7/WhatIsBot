const askButton = document.getElementById("ask-button");
var recognition = new webkitSpeechRecognition();

      // Set the language for recognition
      recognition.lang = 'en-US';

askButton.addEventListener("click", () => {
    console.log("Ask button clicked!");
    recognition.start();
});
recognition.onresult = function(event) {
    // Get the transcript from the event results
    var transcript = event.results[0][0].transcript;

    document.getElementById("transcript").textContent = transcript;

    // Do something with the transcript (e.g., send it to the server)
    console.log('Transcript:', transcript);
  };