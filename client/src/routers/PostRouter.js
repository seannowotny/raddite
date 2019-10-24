// @flow

import React, { Fragment, useEffect, useState } from 'react';
import Home from '../components/pages/Home';
import Post from '../components/pages/Post';
import { BrowserRouter as Route, Switch, useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedPost } from '../actions/boardActions';

const PostRouter = ({ boardState: { selectedBoard }, setSelectedPost, children }) =>
{
   const { postName } = useParams();

   useEffect(() => 
   {
      // if(! currentPost)
      // {
      //    SetSelectedPost(postName, selectedBoard);
      // }
      console.log('PostRouter');
   }, []);

   return <Fragment>{children}</Fragment>;
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedPost })(PostRouter);