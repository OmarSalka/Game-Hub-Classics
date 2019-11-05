const board = [];

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

  return roomBoard.boxes;
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

module.exports = { getRoomBoard, createBoard, editBox, deleteBoard };
