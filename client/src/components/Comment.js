// @flow

import * as React from 'react';
import { Fragment } from 'react';
import CommentField from './CommentField';

import type { UserType } from './User';

export type CommentType = {
   id: number,
   replyingTo: UserType,
   content: string,
   user: {
      name: string
   },
   comments: CommentType[]
};

type CommentProps = {
   id: number, 
   comment: CommentType
};

const Comment = ({ id, comment }: CommentProps): React.Node =>
{ 
   return (
      <Fragment>
         <div className="card card-body mb-4">
            <div>
               {comment.replyingTo 
            ?  <h6 className="card-title">Comment by <strong>{comment.user.name}</strong> replying to {comment.replyingTo.name}</h6>
            :  <h6 className="card-title">Comment by <strong>{comment.user.name}</strong></h6>
               }
               <p className="card-text">{comment.content}</p>
            </div>
            <div>
               <CommentField commentId={id} />
            </div>
         </div>
         <div className="ml-4">
            {comment.comments && 
               comment.comments.map(comment => (<Comment key={comment.id} id={comment.id} comment={comment}/>))
            }
         </div>
      </Fragment>
   );
}

export default Comment;