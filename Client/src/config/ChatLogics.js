export const getSender = (loggedUser, users) => {
  if (!users || !loggedUser) return;
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};
