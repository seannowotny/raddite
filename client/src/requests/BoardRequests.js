// @flow

import axios from 'axios';

export default class BoardRequests
{
   constructor(dispatch: any)
   {
      this.dispatch = dispatch;
   }

   dispatch: any;

   FetchBoards = async (): Promise<any> =>
   {
      try
      {
         const response = await axios.get('/api/boards');

         return response.data;
      }
      catch(error)
      {
         return { errors: error.response.errors };
      }
   }

   // AddBoard = async (board: Board): Promise<any>  =>
   // {
   //    const config = {
   //       headers: {
   //          'Content-Type': 'application/json'
   //       }
   //    };

   //    try
   //    {
   //       const response = await axios.post('/api/boards', board, config);

   //       this.dispatch({ boards: response.data });
   //    }
   //    catch(error)
   //    {
   //       this.dispatch({ errors: error.response.errors });
   //    }
   // }
}