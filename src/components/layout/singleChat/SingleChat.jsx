import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

import { Providers } from '../../../providers';
import { ICONS } from '../../../icons/icons';
import { getSender, getSenderInfo } from '../../../helpers/ChatLogics';
import ProfileModal from '../profileModal/ProfileModal';

const SingleChat = () => {
  const { 
    setRender, 
    render, 
    selectedChat, 
    setSelectedChat,
    currentUser
  } = Providers.useAuth();
  
  console.log(selectedChat)

  return (
    <React.Fragment>
      {
        selectedChat ? (
          <>
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              pb={3}
              px={2}
              w={"100%"}
              display={"flex"}
              justifyContent={{base: "space-between"}}
              alignItems={"center"}
            >
              <Button
                display={{base: "flex" , md: "none"}}
                onClick={() => setSelectedChat(null)}
              >
                <ICONS.BsArrowBarLeft />
              </Button>
              {
                !selectedChat?.isGroupChat && 
                  <>
                    {getSender(currentUser, selectedChat?.users)}
                    <ProfileModal user={getSenderInfo(currentUser, selectedChat?.users)}/>
                  </>
              }

              { 
                selectedChat?.isGroupChat && 
                  <>
                    {selectedChat?.chatName.toUpperCase()}
                  </>
              }
            </Text>
          </>
        ) : (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            height={"100%"}
          >
            <Text
              fontSize={"3xl"}
              pb={3}
            >
              Click on a user to start chatting!
            </Text>
          </Box>
        )
      }
    </React.Fragment>
  )
}

export default SingleChat;
