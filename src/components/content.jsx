import React,{useState} from "react";
import "../Styles/style.css";
import { Input, Select,Box,Button } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import Showdata from "./Showdata";

const Content = () => {
    const [data,setdata]=useState([])
    useEffect(() => {
   axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231").then(res=>{
    setdata([...res.data.data])
   })
    }, [])

    const inddata=(id)=>{
      axios.post("https://wtfup.me/gym_details/WTF-The-Fitness-Point-Gym",{
        "user_id":id
      }).then(res=>{
        console.log(res.data)
      })

    }
    
  return (
    <Box id="main">
      <Box id="filterdata">
        <h2 className="filtername">Filters</h2>
        <Box id="location">
          <p className="headname">Location</p>
          <Input width={"75%"} height={"50px"} variant="filled" placeholder="Enter Location" />
        </Box>
        <Box id="price">
          <p className="headname">Price</p>
          <Input
            width={"20%"}
            marginRight={"10px"}
            variant="filled"
            placeholder="Min"
            height={"50px"}
          />
          <Input width={"20%"} height={"50px"} variant="filled" placeholder="Max" />
        </Box>
        <Box id="cities">
          <p className="headname">Cities</p>
          <Select width={"60%"} height={"50px"} color={"teal"}   placeholder="Select Cities" onChange={(e)=>{
           axios.get("https://devapi.wtfup.me/gym/places").then(res=>{
            setdata([...res.data])
           })
          }}>
            <option value="noida" >Noida</option>
            <option value="gaziabad" >Gaziabad</option>
            <option value="Delhi" >Delhi</option>
          </Select>
        </Box>
      </Box>
      <Box id="list">
       {data.map(elem=>{
        {console.log(elem)}
         return (
            <Showdata {...elem} inddata={inddata}/>
           
         )
       })}
      </Box>
    </Box>
  );
};

export default Content;
