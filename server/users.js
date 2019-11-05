const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    user => user.room === room && user.name === name
  );
  const numberOfUsersInRoom = users.filter(user => user.room === room);

  if (!name || !room) return { error: 'Both UserName and Room are required' };
  if (existingUser) return { error: 'Username taken' };
  if (numberOfUsersInRoom.length === 2)
    return { error: 'Room at full capacity' };

  // const icon = users.length === 0 ? 'x' : users.length > 0 && users[0].icon === 'x' ? 'o' : users.length > 0 && users[0].icon === 'o' ? 'x' : null;

  let icon;
  if (users.length === 0) {
    icon = 'x';
  } else if (users.length > 0 && users[0].icon === 'x') {
    icon = 'o';
  } else if (users.length > 0 && users[0].icon === 'o') {
    icon = 'x';
  }

  const user = { id, name, room, icon };

  users.push(user);

  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0]; //test this later
};

const getUser = id => {
  return users.find(user => user.id === id);
};

const getUsersInRoom = room => {
  return users.filter(user => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
