
const { speechSynthesis } = window;

export function setVoice(msg, voice){
  msg.lang = 'en-US';
  msg.voiceURI = 'native';
  msg.volume = 1;
  msg.pitch = 1;
  msg.rate = 1;
  msg.voice = speechSynthesis.getVoices().find((v) =>(
    v.name == voice
  ));
  return msg
}

export function sayMessage(msg, input){
  msg.text = input;
  speechSynthesis.speak(msg);
}
