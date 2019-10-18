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

   FetchPosts = async (boardId: int): Promise<any> =>
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
               boardId
            }
         }, config);

         return response.data;
      }
      catch(error)
      {
         return { errors: error.response.errors };
      }
   }

   // AddPost = async (post: Post): Promise<any>  =>
   // {
   //    const config = {
   //       headers: {
   //          'Content-Type': 'application/json'
   //       }
   //    };

   //    try
   //    {
   //       const response = await axios.post('/api/posts', post, config);

   //       this.dispatch({ posts: response.data });
   //    }
   //    catch(error)
   //    {
   //       this.dispatch({ errors: error.response.errors });
   //    }
   // }
}