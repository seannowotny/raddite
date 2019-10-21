// @flow

import React, { Fragment, useContext, useEffect, useState } from 'react';
import BoardContext from '../context/board/boardContext';
import Home from '../components/pages/Home';
import Post from '../components/pages/Post';
import { BrowserRouter as Route, Switch, useParams, Redirect } from 'react-router-dom';

const PostRouter = (props: any) =>
{
   const { postName } = useParams();

   const { selectedBoard, SetSelectedPost } = useContext(BoardContext);

   // useEffect(() => 
   // {
   //    if(! currentPost)
   //    {
   //       SetSelectedPost(postName, selectedBoard);
   //    }
   // }, []);

   return <Fragment>{props.children}</Fragment>;
}

export default PostRouter;