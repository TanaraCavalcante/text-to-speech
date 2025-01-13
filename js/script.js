let voiceSelect = document.querySelector("select");
let speech = new SpeechSynthesisUtterance();


//! funzione per leggere quello che ho scritto sulla textarea
document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


//! opzioni di diversi lingue su select
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i]= new Option(voice.name,i)));
};

//! Cambio di voce a partire dal select
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});