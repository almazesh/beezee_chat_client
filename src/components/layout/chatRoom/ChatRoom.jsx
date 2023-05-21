import React from 'react'
import { Providers } from '../../../providers';

const ChatRoom = () => {
  const { } = Providers.useAuth();

  return (
    <React.Fragment>
      Chat room
    </React.Fragment>
  )
};

export default ChatRoom;
