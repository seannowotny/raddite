// @flow

import * as React from 'react';
import { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actions/boardActions';

const CommentField = ({ addComment, boardState: { selectedPost }, authState: { token }, commentId }): React.Node =>
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

      const comment = { 
         commentId, 
         content 
      };

      // console.log(comment);

      addComment(comment, token, selectedPost.id);

      setIsSelected(!isSelected);
   };

   return (
      <>
         <Fragment>
            <button onClick={handleSelection} className="btn btn-link btn-sm no-underline ml-0 pl-0 mt-0 pt-0 text-primary text-left">comment</button>
         </Fragment>
         <Fragment>
         {isSelected &&
            <form className="form-group mt-3" onSubmit={handleSubmit} autoComplete="off">
               <div>
                  <input className="form-control"
                  type="text"
                  name="content"
                  required
                  autoFocus
                  placeholder="Enter a Comment..."
                  />
               </div>
               <input type="submit" value="Post Comment" className="btn btn-info mt-3" />
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
