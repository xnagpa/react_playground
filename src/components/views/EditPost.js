import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updatePost } from 'actions/UpdatePost';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const renderField = ({ input, label, type,
  meta: { touched, error, warning }}) => (
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

const EditPostView = ({ handleSubmit, pristine, submitting,
  reset, dispatch, params}) => {
  const id = params.id;
  return <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit((values) =>
      (dispatch(updatePost(id, values))))} className='ui form'>
        <Field label='Title' component={renderField} type='text'
          name='text'/>
        <Field label='Created date' component={renderField} type='text'
          name='createdAt'/>
        <Field label='Author`s name' component={renderField} type='text'
          name='authorName'/>
      {(!pristine && !submitting) && <button
        className='ui button' onClick={reset}> Clear </button>}
      <input type='submit' className='ui button primary' value='Update'/>
    </form>
  </div>;
};

renderField.propTypes = {
  input: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

EditPostView.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  dispatch: PropTypes.func,
  params: PropTypes.object,
};

export default connect(
  (state) => {
    const entry = state.post.entry;

    return {
      initialValues: {
        text: entry && entry.text,
        createdAt: entry && entry.meta.createdAt,
        authorName: entry && entry.meta.author.name
      },
      enableReinitialize: true
    };
  }

)(reduxForm({
  form: 'editPost'
})(EditPostView));
