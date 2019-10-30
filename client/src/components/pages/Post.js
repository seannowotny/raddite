// @flow

import * as React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments';
import CommentField from '../CommentField';

function Post({ boardState: { selectedBoard, selectedPost }, authState: { authenticatedAs }}): React.Node
{
   return (
      <Fragment>
         <div>
            <h1>Post</h1>
            {selectedPost 
            ?  <Fragment>
               <h1>{selectedPost.title}</h1>
               <p>{selectedPost.body}</p>
               </Fragment>
            :  <h1>Loading Post...</h1>
            }
         </div>
         {selectedPost &&
            <Fragment>
            {authenticatedAs &&
               <CommentField/>
            }
            {selectedPost.comments &&
               <Comments comments={selectedPost.comments}/>
            }
            </Fragment>
         }
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState,
   authState: state.authState,
});

export default connect(mapStateToProps)(Post);