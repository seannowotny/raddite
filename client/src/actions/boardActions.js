// @flow

import axios from "axios";

import type { BoardAction } from './types';

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
   try
   {
      console.log('getBoards');
      setLoading();

      const response = await axios.get('/api/boards');

      console.log(response);

      dispatch({
         type: 'GET_BOARDS',
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
   // try
   // {
      dispatch({
         type:'SET_SELECTED_BOARD',
         payload: boardId
      });
   // }
   // catch(err)
   // {
   //    dispatch({
   //       type: 'BOARDS_ERROR',
   //       payload: err.response.data
   //    });
   // }
};

export const setSelectedPost = (postId: number) => async (dispatch: Dispatch) =>
{
   // try
   // {
      dispatch({
         type:'SET_SELECTED_POST',
         payload: postId
      });
   // }
   // catch(err)
   // {
   //    dispatch({
   //       type: 'BOARDS_ERROR',
   //       payload: err.response.data
   //    });
   // }
};