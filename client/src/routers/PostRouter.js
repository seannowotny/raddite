// @flow

import React, { Fragment, useContext, useEffect, useState } from 'react';
import PostContext from '../context/post/postContext';
import Home from '../components/pages/Home';
import Post from '../components/pages/Post';
import { BrowserRouter as Route, Switch, useParams, Redirect } from 'react-router-dom';

const PostRouter = (props: any) =>
{
   const { postName } = useParams();

   const { currentPost, setSelectedPost } = useContext(PostContext);

   // useEffect(() => 
   // {
   //    if(! currentPost)
   //    {
   //       setSelectedPost(postName);
   //    }
   // }, []);

   return <Fragment>{props.children}</Fragment>;
}

export default PostRouter;