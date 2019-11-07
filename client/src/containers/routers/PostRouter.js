// @flow

import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedPost } from '../../redux/actions/boardActions';
import { setRedirect } from '../../redux/actions/historyActions';
import history from '../../helpers/history';

const PostRouter = ({ boardState: { boards, selectedBoard, loading }, setSelectedPost, setRedirect, children }): React.Node =>
{
   const { postTitle } = useParams();

   const [selectedPostWasSet, setSelectedPostWasSet] = useState(false);

   //eslint-disable-next-line
   useEffect(() => 
   {
      if(! selectedPostWasSet && selectedBoard && selectedBoard.posts)
      {
         // console.log('selectedBoard and selectedBoard.posts exist');
         const post = selectedBoard.posts.find(post => post.title.toLowerCase() === postTitle.toLowerCase());
         if(post)
         {
            setSelectedPost(post.id);
            setSelectedPostWasSet(true);
         }
         else
         {
            history.push(`/${selectedBoard.name}`);
         }
      }
   });

   return (
      <Fragment>
         {loading 
         ? <Fragment></Fragment>
         : <Fragment>{children}</Fragment>}
      </Fragment>
      );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedPost, setRedirect })(PostRouter);