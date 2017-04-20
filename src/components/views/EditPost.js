import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import classNames from 'classnames';

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
  <div  className={classNames('ui  field', {error })}>
    <label>{label}</label>
    <input className="ui input" {...input} type={type} />
    {touched && (error && (
      <div className='ui red label'>
        {error}
      </div>
    ) || (warning && (<div className='ui yellow label'>
      {warning}
    </div>)))}
  </div>
);

const EditPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit} className='ui form'>
        <Field label='Title' component={renderField} type='text'
          name='text'/>
        <Field label='Created date' component={renderField} type='text'
          name='createdAt'/>
        <Field label='Author`s name' component={renderField} type='text'
          name='authorName'/>
      {(!pristine && !submitting) && <button className='ui button' onClick={reset}> Clear </button>}
      <input type='submit' className='ui button primary' value='Update'/>
    </form>
  </div>
);

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const submit = (values) => {
  return sleep(1000).then(() => {
    if (values.text.length < 5)
      throw new SubmissionError({text: 'Line should contain be more than 5 symbols'});
    else {
        console.log(JSON.stringify(values));
    }
  });
};

// const extract_entry = (state) => {
//   state.post.entry &&
// };

export default connect(
  (state) => {
    console.log(state.post.entry);
    return {
      initialValues: {
        text:  state.post.entry && state.post.entry.text,
        createdAt:  state.post.entry && state.post.entry.meta.createdAt,
        authorName:  state.post.entry && state.post.entry.meta.author.name
      }
    };
  }

)(reduxForm({
  form: 'editPost',
  onSubmit: submit
})(EditPostView));
