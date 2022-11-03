import React from 'react'
import { Input, Select,Box,Button } from "@chakra-ui/react";
function Showdata({gym_name,address1,address2,duration_text,user_id,inddata}) {
  return (
    <>
         <Box className="Box2" onClick={()=>inddata(user_id)}>
         <Box className="image_Box">
           
             
         </Box>
         <Box id="details_Box">
             <h1  className="info" >{gym_name}</h1>
             <h1  className="info"><h3>★,★,★,★,★</h3></h1>
             <h1  className="info">{address1} {address2}</h1>
             <h1 className="info">{duration_text}</h1>

             <Box style={{marginTop:"30%"}}>

                 {/* <h1 style={{color:"white"}}>Abcdddddddd</h1> */}
                 <Button colorScheme='red' size='lg'>
                  Book Now
                  </Button>

             </Box>

         </Box>

     </Box>
    
    </>
  )
}

export default Showdata