// @flow

import axios from 'axios';
export type BoardAction = 'GET_BOARDS' | 'ADD_BOARD' | 'SET_SELECTED_BOARD' | 'SET_SELECTED_POST' | 'BOARDS_ERROR' | 'GET_POSTS' | 'SET_LOADING';

type Dispatch = ({
   type: BoardAction,
   payload: any
}) => void;

export const setLoading = () =>
{
   return { type: 'SET_LOADING' };
}

export const getBoards = () => async (dispatch: Dispatch) =>
{
   setLoading();

   let result = null;

   try
   {
      result = await axios.get('/api/boards');
      result = result.data;

      dispatch({
         type: 'GET_BOARDS',
         payload: result
      });
   }
   catch(err)
   {
      dispatch({
         type: 'BOARDS_ERROR',
         payload: err.response
      });
   }
};

export const addBoard = (board: any) => async (dispatch: Dispatch) =>
{
   try
   {
      setLoading();

      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      };

      const response = await axios.post('/api/boards', board, config);

      dispatch({
         type: 'ADD_BOARD',
         payload: response.data
      });
   }
   catch(err)
   {
      dispatch({
         type: 'BOARDS_ERROR',
         payload: err.response.data
      });
   }
};

export const setSelectedBoard = (boardId: number) => async (dispatch: Dispatch) =>
{
   setLoading();

   try
   {
      dispatch({
         type:'SET_SELECTED_BOARD',
         payload: boardId
      });
   }
   catch(err)
   {
      dispatch({
         type: 'BOARDS_ERROR',
         payload: err.response.data
      });
   }
};

export const setSelectedPost = (postId: number) => async (dispatch: Dispatch) =>
{
   try
   {
      dispatch({
         type:'SET_SELECTED_POST',
         payload: postId
      });
   }
   catch(err)
   {
      dispatch({
         type: 'BOARDS_ERROR',
         payload: err.response.data
      });
   }
};

export const getPosts = (boardId: number) => async (dispatch: Dispatch) =>
{
   setLoading();

   let result = null;

   try
   {
      result = await axios.get(`/api/posts/${boardId}`);
      result = result.data;

      dispatch({
         type: 'GET_POSTS',
         payload: result
      });
   }
   catch(err)
   {
      dispatch({
         type: 'BOARDS_ERROR',
         payload: err.response.data
      });
   }
};

// export const getComments = (postId: number) => async (dispatch: Dispatch) =>
// {
//    try
//    {
//       setLoading();

//       const config = {
//          headers: {
//             'Content-Type': 'application/json'
//          }
//       };

//       const response = await axios.get('/api/comments', { postId }, config);

//       dispatch({
//          type: 'GET_COMMENTS',
//          payload: response.data
//       });
//    }
//    catch(err)
//    {
//       dispatch({
//          type: 'BOARDS_ERROR',
//          payload: err.response.data
//       });
//    }
// }