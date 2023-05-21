import React from 'react'
import { 
  Avatar,
  Box, 
  Button, 
  Drawer, 
  DrawerBody, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  Input, 
  Menu, 
  MenuButton, 
  MenuDivider, 
  MenuItem, 
  MenuList, 
  Text, 
  Tooltip, 
  useDisclosure,
  useToast
} from '@chakra-ui/react';

import { ICONS } from '../../../icons/icons';
import { Providers } from '../../../providers';
import * as Components from "../../../components";
import { RequestsDB } from '../../../api/api';

const SideDrawer = () => {
  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingChat, setIsLoadingChat] = React.useState(false);
  
  const { currentUser, logOut } = Providers.useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSearch = () => {
    setIsLoading(true);
    if(!search) {
      toast({
        title: "Please Enter something in search!",
        duration: 5000,
        status: "warning",
        position: "top-left",
        isClosable: true
      });
      setIsLoading(false);
      return;
    };

    try {
      const request = RequestsDB.SearchUser(search);
      request.then(res => {
        console.log(res)
        setSearchResult(res.data);
        setIsLoading(false);
      });
    } catch(e) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        duration: 5000,
        status: "error",
        position: "top-left",
        isClosable: true
      });
      setIsLoading(false);
    };
  }; 

  const accessChat = (userId) => {

  };

  return (
    <React.Fragment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        padding={"5px 10px"}
        borderWidth={"5px"}
        background={"white"}
      >
        <Tooltip
          label={"Search Users"}
          hasArrow
          placement='bottom-end'
        > 
          <Button
            variant={"ghost"}
            onClick={onOpen}
          > 
            <ICONS.RiSearchLine />
            <Text 
              display={{base: "none", md: "flex"}}
              px={"3"}
            >
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text
          fontSize={"2xl"}
        >
          My Chat
        </Text>

        <section 
          style={{display:"flex", alignItems: "center", gap:"20px"}}
        >
          <Menu>
            <MenuButton
              p={1}
            >
              <ICONS.AiFillBell style={{fontSize:"20px"}}/>
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              p={1}
              as={Button}
              display={"flex"}
              alignItems={"center"}
            >
              <Avatar 
                size={"sm"} 
                cursor={"pointer"} 
                name={currentUser?.name}
                src={currentUser?.avatar}
              />
              <ICONS.BiChevronDown />
            </MenuButton>
            <MenuList>
              <Components.ProfileModal user={currentUser}>
                <MenuItem> My Profile</MenuItem>
              </Components.ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logOut}>Log out</MenuItem>
            </MenuList>
          </Menu>
        </section>
      </Box>

      <Drawer 
        placement='left' 
        onClose={onClose} 
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"2px"}>
            Search Users
          </DrawerHeader>
          <DrawerBody>
            <Box display={"flex"} pb={2}>
              <Input 
                placeholder='Seach by Name or Email'
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button isLoading={isLoading} onClick={handleSearch}>Go</Button>
            </Box>

            {
              isLoading ? <Components.ChatLoading /> : (
                searchResult?.map(i => (
                  <Components.UserListItem 
                    key={i._id}
                    user={i}
                    handleFunction={() => accessChat(i._id)}
                  />
                ))
              )
            }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
};

export default SideDrawer;