import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { disconnect_socket } from '../../../actions/socketRoutingActions';
import { want_to_play_again, rematch } from '../../../actions/ticTacToeActions';

const PopUp = ({
  socketRouting: { socket, name, room },
  want_to_play_again,
  ticTacToe: { ttt_BoardData },
  rematch
}) => {
  const [playAgain, setPlayAgain] = useState(false);

  useEffect(() => {
    rematch(socket);
    return () => {
      setPlayAgain(false);
    };
  }, [ttt_BoardData]);

  const playAgain_ = () => {
    setPlayAgain(true);
    want_to_play_again(socket, name, room);
  };

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='play-again' onClick={!playAgain ? playAgain_ : null}>
          {playAgain ? (
            'Waiting on oponent...'
          ) : (
            <span>
              Play Again <i className='fas fa-redo'></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting,
  ticTacToe: state.ticTacToe
});

export default connect(
  mapStateToProps,
  { disconnect_socket, want_to_play_again, rematch }
)(PopUp);
