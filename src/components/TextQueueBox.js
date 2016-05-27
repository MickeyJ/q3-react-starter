import React from 'react'

const TextQueueBox = props => (
  <section id="text-Queue-box">

    <article id="text-Queue-input">
      {props.textQueue.map((x, i) =>(
        <span
          key={i}
          onClick={() => props.removeFromQueue(i)}
          className="btn btn-primary word-to-Queue" >
          {x}
          <span className="delete">&#10060;</span>
        </span>
      ))}
    </article>

    <button
      id="say-Queue-btn"
      className="btn"
      onClick={props.sayQueue.bind(this)}>
      Speak
    </button>
    <button
      id="clear-Queue-btn"
      className="btn"
      onClick={() => props.setQueueState( [] )}>
      Clear
    </button>

  </section>
);

export default TextQueueBox
