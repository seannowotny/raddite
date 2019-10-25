// @flow

import React, { Fragment, useEffect, useState } from 'react';
import Home from '../components/pages/Home';
import Post from '../components/pages/Post';
import { BrowserRouter as Route, Switch, useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedPost } from '../actions/boardActions';
import { setRedirect } from '../actions/redirectActions';

const PostRouter = ({ boardState: { selectedBoard }, setSelectedPost, children }) =>
{
   const { postTitle } = useParams();

   useEffect(() => 
   {
      console.log(postTitle);
      if(selectedBoard && selectedBoard.posts)
      {
         console.log('EXECUTE');
         const post = selectedBoard.posts.find(post => post.title.toLowerCase() === postTitle.toLowerCase());
         console.log(post);
         if(post)
         {
            setSelectedPost(post.id);
         }
         else
         {
            setRedirect(`${selectedBoard.name}`);
         }
      }
      console.log('PostRouter');
   }, [postTitle, selectedBoard, setSelectedPost]);

   return <Fragment>{children}</Fragment>;
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedPost, setRedirect })(PostRouter);