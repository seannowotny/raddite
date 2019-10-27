// @flow

export type RedirectAction = 'SET_REDIRECT' | 'SET_ADDITIVE_REDIRECT' | 'REDIRECT_ERROR';

type Dispatch = {
   type: RedirectAction,
   payload: any
}

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
