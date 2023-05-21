import React from 'react';
import { Box, useToast } from '@chakra-ui/react';

import { Providers } from '../../../providers';
import { RequestsDB } from '../../../api/api';

const ChatList = () => {
  const [loggedUser, setLoggedUser] = React.useState(false);

  const { setChats, chats } = Providers.useAuth();
  const toast = useToast();

  const fetchAllChats = async () => {
    try {
      const { data } = await RequestsDB.GetChats();
      if(data) {
        setChats(data);
      } 
      console.log(data)
    } catch(e) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats!",
        duration: 5000,
        status: "error",
        position: "top-right",
        isClosable: true
      });
    }
  };  

  React.useEffect(() => {
    fetchAllChats();
  }, []);

  return (
    <React.Fragment>
      <Box>
        
      </Box>
    </React.Fragment>
  )
};

export default ChatList;
