import React from 'react'

import { phrases, words }from '../data/default'

const WordPhraseBox = props => (
  <section id="word-box">
    <div className='col-xs-6'>
      <h3 className='text-center'>Words / Phrases</h3>
      {phrases.map((x, i) =>(
        <span
          key={i}
          onClick={(e) => props.addToCue(e, x)}
          className='btn btn-primary word-to-cue'>
              {x}
            </span>
      ))}
    </div>
  </section>
);

export default WordPhraseBox
