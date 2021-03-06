// @flow

import * as React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import CommentField from '../../../CommentField/CommentField';
import Comments from '../../../Comments/Comments';

function Post({ boardState: { selectedBoard, selectedPost }, authState: { authenticatedAs }}): React.Node
{
   return (
      <Fragment>
         <div className="card card-body my-4">
         {selectedPost 
         ?  <Fragment>
            <h1 className="card-title display-5 text-center text-info">{selectedPost.title}</h1>
            <p className="card-text">{selectedPost.body}</p>
            </Fragment>
         :  <h1>Loading Post...</h1>
         }
         {selectedPost &&
            <Fragment>
            {authenticatedAs &&
               <CommentField/>
            }
            </Fragment>
         }
         </div>
         {selectedPost &&
            <Fragment>
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