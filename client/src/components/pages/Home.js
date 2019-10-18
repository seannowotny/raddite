// @flow

import React, { useContext, useEffect, Fragment, useState } from 'react';
import BoardContext from '../../context/board/boardContext';

const Home = (props: any) =>
{
   // const { fetchPosts } = useContext(selectedBoardContext); // OVER HERE

   // useEffect(() => {
   //    if(boards.length === 0)
   //    {
   //       fetchPosts();
   //    }
   // }, []);

   return (
      <h1>Home</h1>
   );
}

export default Home;