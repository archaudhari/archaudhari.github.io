
import {
    Box,
    Button,
    InputGroup,
    InputLeftElement,
    InputRightElement,
  } from "@chakra-ui/react";
  import React from "react";
  import { SearchIcon } from "@chakra-ui/icons";
  import { Input } from "@chakra-ui/react"
function Search() {
  return (
    <>
    <Box height="30%" width="100%" bg={"black"} padding="10px" margin="auto" >
      <InputGroup size="lg" width="90%"   color="white" marginLeft="5%" mt="30px" mb="30px">
        <Input
          bg={"rgb(8,8,8)"}
          focusBorderColor="white"
          border={"2px solid black"}
          pr="4.5rem"
          ml="20px"
          height="50px"
          placeholder="Search Gym"
          _placeholder={{ color: "white" }}
          borderRadius="5px"
          width={"110%"}
        />
        <InputLeftElement width="4.5rem">
          <SearchIcon style={{ color: "white", marginLeft: "10px" }} />
        </InputLeftElement>
        <InputRightElement width="4.5rem">
          <SearchIcon
            style={{ color: "white" }}
            marginLeft={"-30px"}
            marginRight={"20px"}
          />
          <Button
            marginRight={"10px"}
            width={"110%"}
            height="70%"
            pl={"10px"}
            pr={"10px"}
            backgroundColor="rgb(146,9,9)"
            color="white"
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
    </>
  )
}

export default Search