/**
 * An util to format the date of the message.
 */
const formatDate = (date) => date.slice(0, 5);

/**
 * An util to filter the user who is tipping.
 */
const filterTippingUser = (usersArray, userId) => {
  const tippingUser = usersArray.filter(user => user.id === userId);
  return tippingUser[0].name;
};

export {
  formatDate,
  filterTippingUser
};
