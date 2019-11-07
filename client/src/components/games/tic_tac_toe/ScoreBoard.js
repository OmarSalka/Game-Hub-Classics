import React from 'react';
import { connect } from 'react-redux';

const ScoreBoard = ({
  socketRouting: { name, oponent },
  ticTacToe: { playerScore, oponentScore }
}) => {
  return (
    <div className='score-board'>
      <p>
        <span className='player-name'>{name}:</span> {playerScore}
      </p>
      <p>
        <span className='player-name'>{oponent ? oponent : 'Oponent'}:</span>{' '}
        {oponentScore}
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting,
  ticTacToe: state.ticTacToe
});
export default connect(mapStateToProps)(ScoreBoard);
