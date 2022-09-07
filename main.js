var speechRecognization = window.webkitSpeechRecognition;
var recognition = new speechRecognization;

function start() {
    document.getElementById("voiceoutput").innerHTML = " ";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("voiceoutput").innerHTML = content;
}