import React from 'react';
import FriendsList from './FriendsList';

const Protected = () => {
  return (
    <div>
      Welcome USER!
      <FriendsList />
    </div>
  )
}

export default Protected;
