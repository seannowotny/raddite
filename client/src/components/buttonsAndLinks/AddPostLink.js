// @flow

import * as React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AddBoardButton = ({ boardState: { selectedBoard }}): React.Node =>
{
   return (
      <>
      {selectedBoard && selectedBoard.name &&
      <div className="text-center">
         <Link className="nav-link mb-3 text-primary" to={`/${selectedBoard.name}/create`}><h5>Add Post</h5></Link>
      </div>
      }
      </>
   )
}

const mapStateToProps = (state: any) => (
{
   boardState: state.boardState,
})

export default connect(mapStateToProps)(AddBoardButton)