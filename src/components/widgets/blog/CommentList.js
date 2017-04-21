import  React from 'react';
import { map } from 'lodash/collection';

const CommentList = ({ entries }) => {
  return <div className="ui comments">
  <h3 class="ui dividing header">Comments</h3>
  {map(entries, (entry) => (
    <Comment key={entry.id} text={entry.text} phone={entry.phone}/>
  ))}
  </div>;
};

const Comment = ({text, phone}) => {
  return <div className="comment">
           <a class="avatar">
              <img width="64" height="64" src="http://images6.fanpop.com/image/polls/1206000/1206487_1367166820381_full.jpg?v=1367166828"/>
           </a>
           <div className="content">
             <div className="author">Anonymous</div>
             <div class="metadata">
              <span class="date">{ phone }</span>
             </div>
             <div className="text">{ text }</div>
           </div>
           <div class="actions">
              <a class="reply">Reply</a>
           </div>
         </div>;
};

export default CommentList;
