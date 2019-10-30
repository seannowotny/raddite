// @flow

import * as React from 'react';
import { Fragment } from 'react';
import Comment from './Comment';

function Comments({ comments }): React.Node
{ 
   return (
      <Fragment>
         {comments.map(comment => (<Comment key={comment.id} comment={comment}/>))}
      </Fragment>
   );
}

export default Comments;