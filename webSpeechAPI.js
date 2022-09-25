//"cerner_2tothe5th_2022"

// Web speech API has two parts
// 1. SpeechRecognition:- Speech to text

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition; // webkitSpeechRecognition for Chrome and SpeechRecognition for FF
const voiceRecognition = new window.SpeechRecognition();
voiceRecognition.onresult = (event) => {
  // SpeechRecognitionEvent type
  const speechToText = event.results[0][0].transcript;
  console.log(speechToText);
};
voiceRecognition.start();

// 2. SpeechSynthesis:- Text to Speech

if ("speechSynthesis" in window) {
  var voice = new SpeechSynthesisUtterance("Hi, you are part of 2-to-the-power-5 competition");
  voice.lang = "en-US";
  window.speechSynthesis.speak(voice);
}

