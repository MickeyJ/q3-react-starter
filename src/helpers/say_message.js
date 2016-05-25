
const { speechSynthesis } = window;

function getVoices(){
  speechSynthesis.onvoiceschanged = function() {
    speechSynthesis.getVoices().map((voice) =>{
      const { name, lang, voiceURI } = voice;
      const voiceData = { name, lang, voiceURI };
      console.log(voiceData);
    });
  };
}

getVoices();

export function setVoice(msg, voice){
  
  const voices = speechSynthesis.getVoices();
  let newVoice = voices.find((x) =>{
    return x.name == voice
  });
  msg.lang = newVoice.lang;
  msg.voice = newVoice;
  msg.voiceURI = newVoice.voiceURI;
  msg.volume = 1;
  msg.pitch = 1;
  msg.rate = 1;
  return msg
}

export function sayMessage(msg, input){
  msg.text = input;
  speechSynthesis.speak(msg);
}
