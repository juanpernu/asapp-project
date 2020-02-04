/** React dependencies */
import React from "react";

/** Component dependencies */
import { filterTippingUser } from '../utils';

/**
 * Stateless Component that draw a simple
 * string to know when the other user is tipping.
 * @param {Number} userId
 * @param {Array} users
 */
const Tipping = ({ userId, users }) => {
  return <span className="message-tipping">{filterTippingUser(users, userId)} is tipping...</span>
};

export default Tipping;
