// @flow

import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setSelectedBoard, setSelectedPost } from '../../redux/actions/boardActions';
import { setRedirect } from '../../redux/actions/historyActions';
import history from '../../helpers/history';

export type PostType = ?{
   title: string,
   body: string
};

const Post = ({ boardState: { selectedBoard }, setSelectedPost, postId }): React.Node =>
{
   let [post, setPost]: [PostType, any] = useState(null);

   const redirect = () =>
   {
      history.push(`/${selectedBoard.name}/${post && post.title ? post.title : ''}`);
   }

   useEffect(() => 
   {
      if(selectedBoard && selectedBoard.posts)
      {
         setPost(selectedBoard.posts.find(post => post.id === postId));
      }
   });

   return (
      <Fragment>
         {post 
         ?  <Fragment>
               <div className="card card-body mb-5">
                  <button className="btn btn-link mb-2 card-title" onClick={redirect}><h3>{post.title}</h3></button>
                  <p className="card-text">{post && post.body ? post.body : ''}</p>
               </div>
            </Fragment>
         :  <h1>Loading Post...</h1>}
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, setSelectedPost, setRedirect })(Post);