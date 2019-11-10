const board = [];
const playAgainPlayers = [];

const addToPlayAgainList = ({ name, room }) => {
  const playerExists = playAgainPlayers.find(
    arrayItem => arrayItem.name === name && arrayItem.room === room
  );
  if (!playerExists) playAgainPlayers.push({ name, room });
  return playAgainPlayers.filter(player => player.room === room);
};

const cleanPlayAgainList = ({ room }) => {
  let num_of_players = playAgainPlayers.length;
  let i = 0;
  while (i <= num_of_players) {
    let index = playAgainPlayers.find(arrayItem => arrayItem.room === room);
    if (index !== -1) playAgainPlayers.splice(index, 1);
    ++i;
  }
};

const resetBoard = room => {
  const roomBoard = board.find(roomBoard => roomBoard.room === room);
  if (roomBoard) {
    const newBoard = [
      { id: 1, icon: null, user: null },
      { id: 2, icon: null, user: null },
      { id: 3, icon: null, user: null },
      { id: 4, icon: null, user: null },
      { id: 5, icon: null, user: null },
      { id: 6, icon: null, user: null },
      { id: 7, icon: null, user: null },
      { id: 8, icon: null, user: null },
      { id: 9, icon: null, user: null }
    ];
    board.find(roomBoard => roomBoard.room === room).boxes = newBoard;
    return board.find(roomBoard => roomBoard.room === room).boxes;
  }
};

const createBoard = room => {
  const roomBoard = board.find(roomBoard => roomBoard.room === room);
  if (!roomBoard) {
    const intialBoard = {
      room: room,
      boxes: [
        { id: 1, icon: null, user: null },
        { id: 2, icon: null, user: null },
        { id: 3, icon: null, user: null },
        { id: 4, icon: null, user: null },
        { id: 5, icon: null, user: null },
        { id: 6, icon: null, user: null },
        { id: 7, icon: null, user: null },
        { id: 8, icon: null, user: null },
        { id: 9, icon: null, user: null }
      ]
    };
    board.push(intialBoard);
    return intialBoard.boxes;
  }
};

const getRoomBoard = room => {
  const roomBoard = board.find(roomBoard => roomBoard.room === room);

  if (roomBoard) return roomBoard.boxes;
  if (!roomBoard) return 'empty!';
};

const editBox = ({ id, icon, user, room }) => {
  const roomBoard = board.find(roomBoard => roomBoard.room === room);
  const boxClicked = roomBoard.boxes.find(box => box.id === id).icon;
  if (!boxClicked) {
    board.find(roomBoard => roomBoard.room === room).boxes[id - 1].icon = icon;
    board.find(roomBoard => roomBoard.room === room).boxes[id - 1].user = user;
  }
  return board.find(roomBoard => roomBoard.room === room).boxes;
};

const deleteBoard = room => {
  const index = board.find(roomBoard => roomBoard.room === room);
  console.log(index);
  if (index !== -1) return board.splice(index, 1)[0];
};

module.exports = {
  addToPlayAgainList,
  cleanPlayAgainList,
  getRoomBoard,
  createBoard,
  editBox,
  resetBoard,
  deleteBoard
};
