import React from 'react'
import { Button, Input,Box,Image } from "@chakra-ui/react";
import "../Styles/style.css"
import Content from './content';
import Midleimage from './Midleimage';
import Search from './Search';
import topimg from "../Assets/top.jpeg"
import Footer from './Footer';

function Searchbar() {
  return (
    <>
    <Box id='upperimage' >
        <Image src={topimg} width="100%" />  
    </Box>
 
  <Box bg={"black"}>
    <Search/>
  <Content/>
   <Midleimage/>
  </Box>
  <Footer/>
     
    </>
  )
}

export default Searchbar
