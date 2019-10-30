// @flow

import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function AddBoardButton ({ boardState: { selectedBoard }}): React.Node
{
   return (
      <>
      {selectedBoard && selectedBoard.name &&
         <Link className="nav-link" to={`/${selectedBoard.name}/create`}>Add Post</Link>
      }
      </>
   )
}

const mapStateToProps = (state: any) => (
{
   boardState: state.boardState,
})

export default connect(mapStateToProps)(AddBoardButton)