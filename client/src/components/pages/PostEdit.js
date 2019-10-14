// @flow

import React from 'react';
import { useParams } from 'react-router-dom';

function PostEdit()
{
   const { id } = useParams();

   return (
      <h1>Edit Post {id}</h1>
   );
}

export default PostEdit;