import React from 'react'

const InputToQueue = props => (
  <div className='col-xs-12 text-center'>
    <form
      className="form-inline add-text-form"
      onSubmit={(e) => props.addToQueue(e, props.inputText.value)}>
      <input
        type="text"
        className="form-control speak-input"
        placeholder="Type Here"
        ref={(ref) => props.getInputText(ref)}
      />
      <button
        type="submit"
        className="btn btn-info">
        Add To Queue
      </button>
    </form>
  </div>
);

export default InputToQueue
