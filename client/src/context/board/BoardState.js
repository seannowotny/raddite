// @flow
import React, { useReducer, Fragment, useEffect, useContext } from 'react';
import BoardRequests from '../../requests/BoardRequests';
import PostRequests from '../../requests/PostRequests';
import BoardStateMethods from './BoardStateMethods';
import PostStateMethods from './PostStateMethods';
import reducer from '../reducer';
import BoardContext from './boardContext';
import RedirectContext from '../redirect/redirectContext';

const BoardState = ({ children }) =>
{
   const initialState = {
      errors: null,
      boards: null,
      selectedBoard: null
   };

   const[state, dispatch] = useReducer(reducer, initialState);

   const boardRequests = new BoardRequests(dispatch);
   const postRequests = new PostRequests(dispatch);
   
   const boardStateMethods = new BoardStateMethods(state, dispatch, boardRequests, postRequests);
   const postStateMethods = new PostStateMethods(state, dispatch);

   const { FillBoards, SetSelectedBoard, UpdateSelectedBoard } = boardStateMethods;
   const { SetSelectedPost } = postStateMethods;

   let errors = null;

   useEffect(() =>
   {
      if(! state.boards)
      {
         FillBoards();
      }
   }, []);

   useEffect(() =>
   {
      if(state.selectedBoard)
      {
         const boards = state.boards;
         boards.filter((board) => board.id === state.selectedBoard.id)[0] = state.selectedBoard;
         dispatch({ boards });

         if(state.selectedBoard.selectedPost)
         {
            const board = state.selectedBoard;
            board.posts.filter(post => post.id === state.selectedPost.id)[0] = state.selectedPost;
            UpdateSelectedBoard(board);
         }
      }
   }, [state.selectedBoard])

   return (
      <Fragment>
         {state.errors
         ?  state.errors.map(error => <h1>{error}</h1>)
         :  <BoardContext.Provider
               value={{ 
                  boards: state.boards,
                  selectedBoard: state.selectedBoard,
                  SetSelectedBoard,
                  UpdateSelectedBoard,
                  SetSelectedPost
               }}>
               { children }
            </BoardContext.Provider>
         }
      </Fragment>
   )
}

export default BoardState;