import React from 'react'

import {
  numbers,
  punctuation,
  subjunct,
  phrases,
  words,
  pronouns,
  verbs,
  negatives,
  adjectives,
  preps
} from '../data/default'

const BankType = props =>(
  <section className='word-bank' >
    {props.bank.map((x, i) =>(
      <span
        key={i}
        onClick={(e) => props.addToQueue(e, x)}
        className='btn btn-primary text-btn'
        style={{background: props.bgColor, color: props.txtColor}} >
        {x}
      </span>
    ))}
  </section>
);

const WordPhraseBox = props => {
  const myPhrases = props.myPhrases.map(x => x.phrase);
  return (
    <div>
      <section id="word-box" >

        <BankType
          bank={punctuation}
          bgColor={'RGB(10, 12, 15)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />
        <BankType
          bank={numbers}
          bgColor={'RGB(10, 12, 15)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

        <BankType
          bank={pronouns}
          bgColor={'RGB(40, 12, 40)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

        <BankType
          bank={subjunct}
          bgColor={'RGB(10, 12, 70)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

        <BankType
          bank={negatives}
          bgColor={'RGB(130, 12, 10)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

        <BankType
          bank={verbs}
          bgColor={'rgb(0, 40, 40)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

        <BankType
          bank={preps}
          bgColor={'rgb(0, 30, 60)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

        <BankType
          bank={adjectives}
          bgColor={'rgb(20, 40, 100)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

      </section>

      <section id="word-box" className="row-fluid" >

        <BankType
          bank={words}
          bgColor={'RGB(160, 82, 45)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

        <BankType
          bank={phrases}
          bgColor={'RGB(55, 160, 100)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

        <BankType
          bank={myPhrases}
          bgColor={'RGB(0, 110, 110)'}
          txtColor={'white'}
          addToQueue={props.addToQueue.bind(this)}
        />

      </section>
    </div>
  );
};

export default WordPhraseBox
