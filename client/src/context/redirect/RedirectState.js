// @flow
import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import reducer from '../reducer';
import RedirectContext from './redirectContext';

const RedirectState = (props: any) =>
{
   const initialState = {
      redirect: null
   };

   const[state, dispatch] = useReducer(reducer, initialState);

   const setRedirect = (redirect) =>
   {
      dispatch({ redirect: '/' + redirect });
   }

   const setAdditiveRedirect = (redirect_) =>
   {
      const redirect = state.redirect + '/' + redirect_;
      dispatch({ redirect });
   }

   return (
      <RedirectContext.Provider
         value={{ 
            setRedirect,
            setAdditiveRedirect
         }}>
         { props.children }
         
         {state.redirect && <Redirect to={state.redirect}/>}
      </RedirectContext.Provider>
   )
}

export default RedirectState;