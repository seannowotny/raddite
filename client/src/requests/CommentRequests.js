// @flow

import axios from 'axios';
import Post from '../structs/Post';

export default class PostRequests
{
   constructor(dispatch: any)
   {
      this.dispatch = dispatch;
   }

   dispatch: any;

   FetchComments = async (postId: int): Promise<any> =>
   {
      const config = {
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      };
      try
      {
         const response = await axios.get('/api/posts', 
         { 
            params: {
               postId
            }
         }, config);

         return response.data;
      }
      catch(error)
      {
         return { errors: error.response.errors };
      }
   }
}