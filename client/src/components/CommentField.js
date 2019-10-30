// @flow

import * as React from 'react';
import { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../redux/actions/boardActions';

function CommentField({ addComment, boardState: { selectedPost }, authState: { token }, commentId }): React.Node
{
   const [isSelected, setIsSelected] = useState(false);

   const handleSelection = (e) =>
   {
      e.preventDefault();

      setIsSelected(!isSelected);
   }

   const handleSubmit = (e) =>
   {
      e.preventDefault();

      const content = e.target.content.value;

      console.log(commentId);
      console.log(token);

      if(commentId)
      {
         addComment({ commentId, content }, token, selectedPost.id);
      }
      else
      {
         addComment({ content }, token, selectedPost.id);
      }

      setIsSelected(!isSelected);
   };

   return (
      <>
         <Fragment>
            <button onClick={handleSelection}>Comment</button>
         </Fragment>
         <Fragment>
         {isSelected &&
            <form onSubmit={handleSubmit}>
               <div>
                  <input
                  type="text"
                  name="content"
                  required
                  placeholder="Enter a Comment..."
                  />
               </div>
               <input type="submit" value="Post Comment" />
            </form>
         }
         </Fragment>
      </>
   )
}

const mapStateToProps = (state: any) => (
{
   authState: state.authState,
   boardState: state.boardState,
});

export default connect(mapStateToProps, { addComment })(CommentField);
