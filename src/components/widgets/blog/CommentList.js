import  React from 'react';
import { map } from 'lodash/collection';
import CommentForm from 'components/widgets/blog/elements/CommentForm';
import PropTypes from 'prop-types';

const CommentList = ({ entries, createCommentHandler }) => (
   <div>
    <div className="ui comments">
    <h3 className="ui dividing header">Comments</h3>
    {map(entries, (entry) => (
      <Comment key={entry.id} text={entry.text} phone={entry.phone}/>
    ))}
    </div>
    <div>
      <CommentForm createCommentHandler={createCommentHandler}/>
    </div>
  </div>
);

const Comment = ({text, phone}) => (
   <div className="comment">
           <a className="avatar">
              <img
              width="64"
              height="64"
              src="http://images6.fanpop.com/image/polls/1206000/1206487_1367166820381_full.jpg?v=1367166828"/>
           </a>
           <div className="content">
             <div className="author">Anonymous</div>
             <div className="metadata">
              <span className="date">{ phone }</span>
             </div>
             <div className="text">{ text }</div>
           </div>
           <div className="actions">
              <a className="reply">Reply</a>
           </div>
         </div>
);

Comment.propTypes = {
  text: PropTypes.string,
  phone: PropTypes.string
};

CommentList.propTypes = {
  createCommentHandler: PropTypes.func,
  entries: PropTypes.array,
};

export default CommentList;
