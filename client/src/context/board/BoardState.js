// @flow
import React, { useReducer } from 'react';
import BoardRequests from './BoardRequests';
import boardReducer from './boardReducer';
import BoardContext from './boardContext';
import Board from './Board';

const BoardState = (props: any) =>
{
   const initialState = {
      boards: [],
      errors: []
   };

   const[state, dispatch] = useReducer(boardReducer, initialState);

   const boardRequests = new BoardRequests(dispatch);

   const getBoards = boardRequests.GetBoards;
   const addBoard = boardRequests.AddBoard;

   const setCurrentBoard = async (boardName: string) =>
   {
      const board = state.boards.filter(board => board.name === boardName);

      if(board)
      {
         dispatch({ currentBoard: board });
      }
   }

   return (
      <BoardContext.Provider
         value={{ 
            errors: state.errors,
            boards: state.boards,
            getBoards,
            addBoard,
            setCurrentBoard
          }}>
          { props.children }
      </BoardContext.Provider>
   )
}

export default BoardState;