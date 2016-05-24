
const { speechSynthesis, SpeechSynthesisUtterance } = window;

export default function sayMessage(input, voice){
  const msg = new SpeechSynthesisUtterance(input);
  msg.lang = 'en-US';
  msg.voiceURI = 'native';
  msg.volume = 1;  // 0 - 1
  msg.pitch = 1;   // 0 - 2
  msg.rate = 1;    // 0.1 - 10
  msg.voice = speechSynthesis.getVoices().find((v) =>(
    v.name == voice
  ));
  speechSynthesis.speak(msg)
}
