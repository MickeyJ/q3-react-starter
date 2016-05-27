import React from 'react'

import { phrases, words, pronouns, verbs, negatives, adjectives, preps }from '../data/default'

const WordPhraseBox = props => (
  <section id="word-box" className="row-fluid">
    <div className='col-xs-2 word-bank-1'>
      {pronouns.map((x, i) =>(
        <span
          key={i}
          onClick={(e) => props.addToQueue(e, x)}
          className='btn btn-primary pronouns'>
          {x}
        </span>
      ))}
    </div>
    <div className='col-xs-1 word-bank-2'>
      {negatives.map((x, i) =>(
        <span
          key={i}
          onClick={(e) => props.addToQueue(e, x)}
          className='btn btn-primary negatives'>
          {x}
       </span>
    ))}
    </div>
    <div className='col-xs-3 word-bank-3'>
      {verbs.map((x, i) =>(
        <span
          key={i}
          onClick={(e) => props.addToQueue(e, x)}
          className='btn btn-primary verbs'>
          {x}
        </span>
      ))}
    </div>
    <div className='col-xs-2 word-bank-4'>
      {preps.map((x, i) =>(
        <span
          key={i}
          onClick={(e) => props.addToQueue(e, x)}
          className='btn btn-primary preps'>
          {x}
        </span>
      ))}
    </div>
    <div className='col-xs-2 word-bank-5'>
      {adjectives.map((x, i) =>(
        <span
          key={i}
          onClick={(e) => props.addToQueue(e, x)}
          className='btn btn-primary adjectives'>
          {x}
        </span>
      ))}
    </div>
    <div className='col-xs-2 word-bank-1'>
      {props.myPhrases.map((x, i) =>(
        <span
          key={i}
          onClick={(e) => props.addToQueue(e, x.phrase)}
          className='btn btn-primary'>
          {x.phrase}
        </span>
      ))}
    </div>
  </section>
);

export default WordPhraseBox
