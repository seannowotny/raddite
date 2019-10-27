// @flow

import * as React from 'react';
import { Fragment } from 'react';

function Comment({ comment }): React.Node
{ 
   return (
      <Fragment>
         <div>
            <h5>{comment.user.name}</h5>
            {comment.replyingTo && 
            <p>replying to {comment.replyingTo.name}</p>}
            <p>{comment.content}</p>
         </div>
         <div className="ml-4">
            {comment.comments && 
               comment.comments.map(comment => (<Comment key={comment.id} comment={comment}/>))
            }
         </div>
      </Fragment>
   );
}

export default Comment;