const users = [
  {
    id: 1,
    name: "Supun",
  },
  {
    id: 2,
    name: "Thiwanka",
  },
  {
    id: 3,
    name: "Jayaweera",
  },
];

const getAllUsers = (callBack) => {
  callBack(users);
};

const getUserById = (id, callBack) => {
  const user = users.find((user) => user.id == id);
  callBack(user);
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
