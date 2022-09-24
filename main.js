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
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    say = document.getElementById("voiceoutput").value;
    var utterthis = new SpeechSynthesisUtterance(say);
    synth.speak(utterthis);
    Webcam.attach(camera);
}
Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
var camera = document.getElementById("camera");