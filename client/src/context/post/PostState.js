// @flow
import React, { useReducer, Fragment, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import CommentRequests from '../../requests/CommentRequests';
import reducer from '../reducer';
import PostContext from './postContext';
import RedirectContext from '../../context/redirect/redirectContext';
import BoardContext from '../../context/board/boardContext';

const PostState = (props: any) =>
{
   const { setRedirect, setAdditiveRedirect } = useContext(RedirectContext);
   const { selectedBoard, setSelectedBoard, boards } = useContext(BoardContext);

   const initialState = {
      errors: null,
      selectedPost: null
   };

   const [state, dispatch] = useReducer(reducer, initialState);

   const commentRequests = new CommentRequests(dispatch);

   const setSelectedPost = (postTitle) =>
   {
      console.log(selectedBoard.posts);
      let selectedPost = selectedBoard.posts.filter(
         post => post.title.toLowerCase() === postTitle.toLowerCase()
      );

      if(selectedPost.length > 0)
      {
         selectedPost = selectedPost[0];

         dispatch({ selectedPost });
         setAdditiveRedirect(postTitle);

         // !selectedPost.comments && fillComments(selectedPost.id);
      }
      else
      {
         dispatch({ selectedPost: null });
      }
   }

   // const fillComments = async (postId: int) =>
   // {
   //    const lboards = boards;
   //    lboards.filter(board => board.id === selectedBoard.id)[0].posts.filter(post => post.id === postId)[0].comments = await commentRequests.FetchComments(postId);

   //    ({ boards: lboards });
   // }

   return (
      <Fragment>
         {state.errors 
         ?  state.errors.map(error => <h1>{error}</h1>)
         :  <PostContext.Provider
               value={{ 
                  selectedPost: state.selectedPost,
                  setSelectedPost
               }}>
               { props.children }
            </PostContext.Provider>
         }
      </Fragment>
   )
}

export default PostState;