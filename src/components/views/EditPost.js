import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { updatePost } from 'actions/UpdatePost';

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

//Вопрос с передачей payload. На сервер payload не приходит совсем.
//Вроде бы в action я все задал правильно. 
const EditPostView = ({ handleSubmit, pristine, submitting, reset, dispatch}) => {
  const id = parseInt(window.location.pathname.match(/\d+/));
  return <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit(() => (dispatch(updatePost(id, {fucking: "SHIIIT"}))))} className='ui form'>
        <Field label='Title' component={renderField} type='text'
          name='text'/>
        <Field label='Created date' component={renderField} type='text'
          name='createdAt'/>
        <Field label='Author`s name' component={renderField} type='text'
          name='authorName'/>
      {(!pristine && !submitting) && <button className='ui button' onClick={reset}> Clear </button>}
      <input type='submit' className='ui button primary' value='Update'/>
    </form>
  </div>;
};

const extractEntry = (state) => {
  let entry = {};
  if (state.post.entry) {
    entry = state.post.entry;
  } else if (state.posts.entries) {
    entry = find(state.posts.entries, { editPath: window.location.pathname });
  }
  return entry;
};

export default connect(
  (state) => {
    const entry = extractEntry(state);
    return {
      initialValues: {
        text:  entry.text,
        createdAt:  entry.meta.createdAt,
        authorName:  entry.meta.author.name
      }
    };
  }

)(reduxForm({
  form: 'editPost'
})(EditPostView));
