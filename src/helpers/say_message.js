const { speechSynthesis } = window;

export function setVoice(msg, voice){
  const voices = speechSynthesis.getVoices();
  msg.voice = voices.find((x) => x.name == voice);
  msg.volume = 1;
  msg.pitch = 1;
  msg.rate = 1;
  return msg
}

export function sayMessage(msg, input){
  msg.text = input;
  speechSynthesis.speak(msg);
}
