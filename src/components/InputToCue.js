import React from 'react'

const InputToCue = props => (
  <div className='col-xs-6'>
    <h3 className='text-center'>Categories?</h3>
    <form 
      className="form-inline add-text-form" 
      onSubmit={(e) => props.addToCue(e, props.inputText.value)}>
      
      <input
        type="text"
        className="form-control speak-input"
        placeholder="Type Here"
        ref={(ref) => props.getInputText(ref)}
      />
      <button
        type="submit"
        className="btn btn-info">
        Add To Cue
      </button>
    </form>
  </div>
);

export default InputToCue
