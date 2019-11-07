// @flow

import * as React from 'react'
import { connect } from 'react-redux';
import { addBoard, setSelectedBoard } from '../../redux/actions/boardActions';
// import history from '../../helpers/history';
import { withRouter } from 'react-router';
import '../../App.css';

const AddBoardButton = ({ authState: { authenticatedAs, token }, boardState: { boards }, addBoard, setSelectedBoard, input, history, location }): React.Node =>
{
   const handleClick = async e =>
   {
      e.preventDefault();

      await addBoard({
         name: input
      }, token);
      // console.log(boards.length);
      await setSelectedBoard(boards.length + 1);
      // console.log(history);
      history.push('/' + input);
      if(location.pathname !== '/')
      {
         window.location.reload();
      }
   }

   return (
      <button type="button" className="btn btn-primary btn-sm mb-2 mr-3" onClick={handleClick}>Add</button>
   )
}

const mapStateToProps = (state: any) => (
{
   authState: state.authState,
   boardState: state.boardState,
})

export default connect(mapStateToProps, { addBoard, setSelectedBoard })(withRouter(AddBoardButton));