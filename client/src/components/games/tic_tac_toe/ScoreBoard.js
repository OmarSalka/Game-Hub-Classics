import React from 'react';
import { connect } from 'react-redux';

const ScoreBoard = ({ socketRouting: { name, oponent } }) => {
  return (
    <div className='score-board'>
      <p>
        <span className='player-name'>{name}:</span> 0
      </p>
      <p>
        <span className='player-name'>{oponent ? oponent : 'Oponent'}:</span> 0
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting
});
export default connect(mapStateToProps)(ScoreBoard);
