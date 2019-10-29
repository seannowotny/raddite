// @flow

import axios from "axios";

export type AuthAction = 'LOGIN' | 'REGISTER' | 'GET_CURRENT_USER' | 'AUTH_ERROR' | 'GET_PERSISTED_AUTH_STATE';

type Dispatch = ({
   type: AuthAction,
   payload: any
}) => void;

export const login = (credentials) => async (dispatch: Dispatch) =>
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

export const getPersistedAuthState = () => async (dispatch: Dispatch) =>
{
   dispatch({
      type: 'GET_PERSISTED_AUTH_STATE',
      payload: null
   });
};
