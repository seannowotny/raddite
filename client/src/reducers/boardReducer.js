// @flow

import type { BoardAction } from '../actions/types';

const initialState = {
   boards: null,
   selectedBoard: null,
   selectedPost: null,
   loading: false,
   error: null,
};

export default (state: any = initialState, action: BoardAction) =>
{
   switch(action.type)
   {
      case 'GET_BOARDS':
      {
         const { selectedBoard, selectedPost } = updateSelected(state);

         return {
            ...state,
            boards: action.payload,
            selectedBoard,
            selectedPost,
            loading: false
         };
      }
      case 'ADD_BOARD':
         return {
            ...state,
            boards: action.payload,
            loading: false
         };
      case 'SET_SELECTED_BOARD':
         {
         console.log('BOARDS ' + state.boards);
         console.log('PAYLOAD ' + action.payload);
         console.log('SELECTED_BOARD ' + state.boards.find(board => board.id === action.payload));
         return {
            ...state,
            selectedBoard: state.boards.find(board => board.id === action.payload),
            loading: false
         };
      }
      case 'SET_SELECTED_POST':
      {
         let result = null;

         if(state.selectedBoard)
         {
            result = {
               ...state,
               selectedPost: state.selectedBoard.posts.find(post => post.id === action.payload),
               loading: false
            };
         }
         else
         {
            result = {
               ...state,
               error: "SELECTED_BOARD HASN'T BEEN SET, ABORTING"
            };
         }

         return result;
      }    
      case 'SET_LOADING':
         return {
            ...state,
            loading: true
         };
      default:
         return {
            ...state,
            // error: "ACTION_TYPE DOESN'T EXIST"
         };
   }
}

const updateSelected = (state: any) =>
{
   const selectedBoard = state.selectedBoard && state.board.find(board => board.id === state.selectedBoard.id);
   const selectedPost = state.selectedPost && selectedBoard.posts.find(post => post.id === state.selectedPost.id);

   return { selectedBoard, selectedPost };
}