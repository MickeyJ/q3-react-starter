import React from 'react'
import ErrorBox from '../../components/ErrorBox'
import { setVoice, sayMessage } from '../../helpers/say_message';

class MyPhrasesPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      phrases: []
    }
  }
  sayIt(e, text){
    e.persist();
    const msg = new window.SpeechSynthesisUtterance();
    setVoice(msg, 'Bad News');
    sayMessage(msg, text);
  }
  getPhraseText(ref){
    this.phrase = ref
  }
  deletePhrase(id){
    return this.props.deletePhrase(id).then(res =>{
      console.log(res);
    })
  }
  handleSubmit(e){
    e.preventDefault();
    let phrase = this.phrase.value;
    if(!phrase){
      this.setState({
        error: 'no content'
      });
      return false;
    }
    this.phrase.value = null;
    return (
      this.props.addPhrase(phrase)
        .then(res =>{
          console.log(res.payload.data);
        })
    )
  }
  render(){
    return(
      <div>
        <h2 className="phrases">My Phrases</h2>
        <form className="col-md-6 col-md-offset-3 auth-form" onSubmit={this.handleSubmit.bind(this)}>
          <ErrorBox error={this.state.error}/>
          <input
            type="text"
            placeholder="What do you like to say?"
            className="form-control register"
            ref={(ref) => this.getPhraseText(ref)}
          />
          <button className="btn btn-success" type="submit">Add Phrase</button>
        </form>
        <div className="col-xs-12 my-phrases-column">
          <table className="table table-bordered">
              <tbody>
                 {this.props.phrases.map((x, i) =>(
                   <tr key={i} className="my-phrase-item">
                     <td><button className="btn btn-warning" onClick={() => this.deletePhrase(x.id)}>X</button></td>
                     <td className="phrase-text">{x.phrase}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
        </div>
      </div>
    )
  }
}

export default MyPhrasesPage
