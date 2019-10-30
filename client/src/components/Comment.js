// @flow

import * as React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import CommentField from './CommentField';

function Comment({ authState, id, comment }): React.Node
{ 
   return (
      <Fragment>
         <div>
            <h5>{comment.user.name}</h5>
            {comment.replyingTo && 
            <p>replying to {comment.replyingTo.name}</p>}
            <p>{comment.content}</p>
         </div>
         <div>
         {authState && authState.authenticatedAs &&
            <CommentField commentId={id} />
         }
         </div>
         <div className="ml-4">
            {comment.comments && 
               comment.comments.map(comment => (<Comment key={comment.id} comment={comment}/>))
            }
         </div>
      </Fragment>
   );
}

const mapStateToProps = (state: any) => (
{
   authState: state.authState,
})

export default connect(mapStateToProps)(Comment);