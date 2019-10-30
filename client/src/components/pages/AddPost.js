// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions/boardActions';

function AddPost({ boardState: { selectedBoard }, addPost, authState: { token } }): React.Node
{
   const handleSubmit = (e) =>
   {
      e.preventDefault();

      const title = e.target.title.value;
      const body = e.target.body.value;

      addPost({ title, body }, token, selectedBoard.id, selectedBoard.name);
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="title">Title</label>
               <input
               type="text"
               name="title"
               required
               autoFocus
               minLength={3}
               placeholder="Enter title..."
               />
            </div>
            <div>
               <label htmlFor="password">Body</label>
               <textarea
               type="text"
               name="body"
               required
               minLength={10}
               placeholder="Enter body..."
               />
            </div>
            <input type="submit" value="Add Post" />
         </form>
      </>
   );
}

const mapStateToProps = (state: any) => (
{
   authState: state.authState,
   boardState: state.boardState,
});

export default connect(mapStateToProps, { addPost })(AddPost);