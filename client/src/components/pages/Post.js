// @flow

import React from 'react';
import { useParams } from 'react-router-dom';

function Post()
{
   const { id } = useParams();

   return (
      <h1>Post {id}</h1>
   );
}

export default Post;