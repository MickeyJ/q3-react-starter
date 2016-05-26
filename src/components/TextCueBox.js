import React from 'react'

const TextCueBox = props => (
  <section id="text-cue-box">

    <article id="text-cue-input">
      {props.textCue.map((x, i) =>(
        <span
          key={i}
          onClick={() => props.removeFromCue(i)}
          className="btn btn-primary word-to-cue" >
                {x}
              </span>
      ))}
    </article>

    <button
      id="say-cue-btn"
      className="btn btn-success"
      onClick={props.sayCue.bind(this)}>
      Say It
    </button>
    <button
      id="clear-cue-btn"
      className="btn btn-warning"
      onClick={() => props.setCueState( [] )}>
      Clear Queue
    </button>

  </section>
);

export default TextCueBox
