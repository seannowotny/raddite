// @flow

import axios from "axios";

export type AuthAction = 'LOGIN' | 'LOGOUT' | 'REGISTER' | 'GET_CURRENT_USER' | 'AUTH_ERROR' | 'SET_STATE';

type Dispatch = ({
   type: AuthAction,
   payload: any
}) => void;

export const setError = (error) => async (dispatch: Dispatch) =>
{
   dispatch({
      type: 'AUTH_ERROR',
      payload: error
   });
};

export const register = (credentials: any) => async (dispatch: Dispatch) =>
{
   try
   {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      };

      const response = await axios.post('/api/auth/register', credentials, config);

      dispatch({
         type: 'REGISTER',
         payload: response.data
      });
   }
   catch(err)
   {
      dispatch({
         type: 'AUTH_ERROR',
         payload: err.response.data
      });
   }
};

export const login = (credentials: any) => async (dispatch: Dispatch) =>
{
   try
   {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      };

      const response = await axios.post('/api/auth/login', credentials, config);

      dispatch({
         type: 'LOGIN',
         payload: response.data
      });
   }
   catch(err)
   {
      dispatch({
         type: 'AUTH_ERROR',
         payload: err.response.data
      });
   }
};

export const logout = () => async (dispatch: Dispatch) =>
{
   dispatch({
      type: 'LOGOUT',
      payload: null
   })
}

export const clearAuthErrors = () => async (dispatch: Dispatch) =>
{
   dispatch({
      type: 'CLEAR_ERRORS',
      payload: null
   })
}