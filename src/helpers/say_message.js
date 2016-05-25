
const { speechSynthesis } = window;

// export function getVoices(){
//   speechSynthesis.onvoiceschanged = function() {
//     speechSynthesis.getVoices().map((voice) =>{
//       console.log(voice.name);
//     });
//   };
// }
// getVoices();

export function setVoice(msg, voice){
  const voices = speechSynthesis.getVoices();
  msg.voice = voices.find((x) =>{
    return x.name == voice
  });
  msg.volume = 1;
  msg.pitch = 1;
  msg.rate = 1;
  return msg
}

export function sayMessage(msg, input){
  msg.text = input;
  speechSynthesis.speak(msg);
}
