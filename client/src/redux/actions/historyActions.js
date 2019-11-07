// @flow

export type RedirectAction = 'SET_REDIRECT' | 'SET_ADDITIVE_REDIRECT' | 'REDIRECT_ERROR' | 'GET_PERSISTED_HISTORY_STATE' | 'GO_BACK' | 'GET_PERSISTED_REDIRECT_STATE';

type Dispatch = ({
   type: RedirectAction,
   payload: any
}) => void;

export const setLoading = () =>
{
   return { type: 'SET_LOADING' };
}

export const setRedirect = (uri: string) => async (dispatch: Dispatch) =>
{
   try
   {   
      dispatch({
         type: 'SET_REDIRECT',
         payload: uri
      });
   }
   catch(err)
   {
      dispatch({
         type: 'REDIRECT_ERROR',
         payload: err.response.data
      });
   }
};

export const setAdditiveRedirect = (uriAddition: string) => async (dispatch: Dispatch) =>
{
   try
   {   
      dispatch({
         type: 'SET_ADDITIVE_REDIRECT',
         payload: uriAddition
      });
   }
   catch(err)
   {
      dispatch({
         type: 'REDIRECT_ERROR',
         payload: err.response.data
      });
   }
};

export const goBack = () => async (dispatch: Dispatch) =>
{
   try
   {   
      dispatch({
         type: 'GO_BACK',
         payload: null
      });
   }
   catch(err)
   {
      dispatch({
         type: 'REDIRECT_ERROR',
         payload: err.response.data
      });
   }
}

export const getPersistedHistoryState = () => async (dispatch: Dispatch) =>
{
   dispatch({
      type: 'GET_PERSISTED_REDIRECT_STATE',
      payload: null
   });
};
