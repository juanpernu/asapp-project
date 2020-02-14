/** React dependencies */
import React, { useContext } from "react";

/** Component dependencies */
import Tipping from './Tipping';
import { ChatContext } from '../context/chatContext';

/**
 * Stateless Component that draw the user
 * header with is name and shows when is tipping.
 * @param {Object} user
 */
const UserHeader = ({ user }) => {
  const { users, whoIsTipping } = useContext(ChatContext);
  const { image_profile, name, id } = user;
  const showIsTipping = whoIsTipping[id];

  return (
    <div className="user-header">
      <img className="user-header--avatar" src={image_profile} alt={name} height="42" width="42" />
      <div className="user-header--data">
        <span>{name}</span>
        {showIsTipping && <Tipping userName={name} userId={id} users={users} />}
      </div>
    </div>
  )
}

export default UserHeader;
