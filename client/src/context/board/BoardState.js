// @flow
import React, { useReducer, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import BoardRequests from '../../requests/BoardRequests';
import PostRequests from '../../requests/PostRequests';
import reducer from '../reducer';
import BoardContext from './boardContext';

const BoardState = (props: any) =>
{
   const initialState = {
      errors: [],
      boards: [],
      selectedBoardId: null,
      redirect: null
   };

   const[state, dispatch] = useReducer(reducer, initialState);

   const boardRequests = new BoardRequests(dispatch);
   const postRequests = new PostRequests(dispatch);

   const fillBoards = async () =>
   {
      const boards = await boardRequests.FetchBoards();
      dispatch({ boards });
   }

   const setCurrentBoard = async (boardName_: string) =>
   {
      const boardName = boardName_.toLowerCase();
      const board = state.boards.filter(board => board.name.toLowerCase() === boardName);

      if(board.length > 0)
      {
         const board = state.boards.filter(board => board.name.toLowerCase() === boardName)[0];
         const boardId = board.id;

         dispatch(
         { 
            selectedBoardId: boardId,
            redirect: '/' + board.name
         });

         !board.posts && await fillPosts(boardId);
      }
      else if(boardName === '')
      {
         dispatch(
         { 
            selectedBoardId: null,
            redirect: '/'
         });
      }
   }

   const fillPosts = async (boardId: int) =>
   {
      const boards = state.boards;
      boards.filter(board => board.id === boardId)[0].posts = await postRequests.FetchPosts(boardId);

      dispatch({ boards: boards });
   }

   return (
      <Fragment>
         <BoardContext.Provider
            value={{ 
               errors: state.errors,
               boards: state.boards,
               selectedBoardId: state.selectedBoardId,
               fillBoards,
               setCurrentBoard
            }}>
            { props.children }
         </BoardContext.Provider> 
         {state.redirect && <Redirect to={state.redirect}/>}
      </Fragment>
   )
}

export default BoardState;