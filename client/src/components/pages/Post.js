// @flow

import * as React from 'react';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Comments from '../containers/Comments';

function Post({ boardState: { selectedBoard, selectedPost }}): React.Node
{
   // useEffect(() =>
   // {
   //    if(selectedPost && selectedPost.comments)
   //    {
   //       console.log(selectedPost.comments);
   //    }
   // });

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
         {(selectedPost && selectedPost.comments) &&
         <Comments comments={selectedPost.comments}/>
         }
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps)(Post);