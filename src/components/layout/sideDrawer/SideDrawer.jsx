
import React from 'react'
import { 
  Avatar,
  Box, 
  Button, 
  Menu, 
  MenuButton, 
  MenuDivider, 
  MenuItem, 
  MenuList, 
  Text, 
  Tooltip 
} from '@chakra-ui/react';
import { ICONS } from '../../../icons/icons';

const SideDrawer = () => {
  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingChat, setIsLoadingChat] = React.useState(false);

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
                name={"Name"}
                src={""}
              />
              <ICONS.BiChevronDown />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuDivider />
              <MenuItem>Log out</MenuItem>
            </MenuList>
          </Menu>
        </section>
      </Box>
    </React.Fragment>
  )
}

export default SideDrawer;