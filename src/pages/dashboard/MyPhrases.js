import React from 'react'
import ErrorBox from '../../components/ErrorBox'
import { setVoice, sayMessage } from '../../helpers/say_message';

class MyPhrasesPage extends React.Component{
  sayIt(e, text){
    e.persist();
    const msg = new window.SpeechSynthesisUtterance();
    setVoice(msg, 'Bad News');
    sayMessage(msg, text);
  }
  getPhraseText(ref){
    this.phrase = ref
  }
  onInputChange(e) {
    // console.log(this.email.value);
  }
  handleSubmit(e){
    e.preventDefault();
    let phrase = this.phrase.value;
    if(!phrase) {
      this.setState({
        error: 'no content'
      });
      return false;
    }
    return (
        this.props.addPhrase(phrase)
            .then(res =>{
              console.log(phrase);
              if(res.payload.data){
                console.log(res.payload.data)
              } else {
                this.setState({
                  error: res.payload.data
                });
              }
            })
    )
  }
  render(){
    return(
      <div>
        <h1 className="text-center">My Phrases</h1>
        <form className="col-md-6 col-md-offset-3 auth-form" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Add Up</h2>
          <ErrorBox error={this.state}/>
          <input
              type="text"
              placeholder="phrase it"
              className="form-control register"
              ref={(ref) => this.getPhraseText(ref)}
              onChange={(e) => this.onInputChange(e)}
          />
          <button className="btn btn-success" type="submit">Add Phrase</button>
        </form>

        <div className="col-xs-6">
          {this.props.phrases.map((x, i) =>(
            <div>
              <h3 className="phrase-text" key={i}>{x.name}</h3>
              {this.props.phrases[0].phrases.map((x, i) =>(
                <p className="phrase-text" key={i}>{x.phrase}</p>
              ))}
            </div>
          ))}
        </div>

      </div>
    )
  }
}

export default MyPhrasesPage
