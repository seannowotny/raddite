// @flow

import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedPost } from '../actions/boardActions';
import { setRedirect } from '../actions/redirectActions';

const PostRouter = ({ boardState: { boards, selectedBoard }, setSelectedPost, setRedirect, children }) =>
{
   const { postTitle } = useParams();

   const [selectedPostWasSet, setSelectedPostWasSet] = useState(false);

   //eslint-disable-next-line
   useEffect(() => 
   {
      if(! selectedPostWasSet && selectedBoard && selectedBoard.posts)
      {
         console.log('selectedBoard and selectedBoard.posts exist');
         const post = selectedBoard.posts.find(post => post.title.toLowerCase() === postTitle.toLowerCase());
         if(post)
         {
            setSelectedPost(post.id);
            setSelectedPostWasSet(true);
         }
         else
         {
            setRedirect(`/${selectedBoard.name}`);
         }
      }
   });

   return <Fragment>{children}</Fragment>;
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedPost, setRedirect })(PostRouter);