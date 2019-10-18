// @flow
import React, { useReducer } from 'react';
import BoardRequests from '../../requests/BoardRequests';
import PostRequests from '../../requests/PostRequests';
import reducer from '../reducer';
import BoardContext from './boardContext';

const BoardState = (props: any) =>
{
   const initialState = {
      boards: [],
      errors: [],
      selectedBoardId: null
   };

   const[state, dispatch] = useReducer(reducer, initialState);

   const boardRequests = new BoardRequests(dispatch);
   const postRequests = new PostRequests(dispatch);

   const fillBoards = async () =>
   {
      const boards = await boardRequests.FetchBoards();
      dispatch({ boards });
   }

   const setCurrentBoard = async (boardName: string) =>
   {
      const board = state.boards.filter(board => board.name === boardName);

      if(board.length > 0)
      {
         const board = state.boards.filter(board => board.name === boardName)[0];
         const boardId = board.id;

         dispatch({ selectedBoardId: boardId });

         !board.posts && await fillPosts(boardId);
      }
      else
      {
         dispatch({ selectedBoardId: null });
      }
   }

   const fillPosts = async (boardId: int) =>
   {
      const boards = state.boards;
      boards.filter(board => board.id === boardId)[0].posts = await postRequests.FetchPosts(boardId);

      dispatch({ boards: boards });
   }

   return (
      <BoardContext.Provider
         value={{ 
            errors: state.errors,
            boards: state.boards,
            fillBoards,
            setCurrentBoard
          }}>
          { props.children }
      </BoardContext.Provider>
   )
}

export default BoardState;