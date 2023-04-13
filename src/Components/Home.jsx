import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import pic from "../Assets/pic.jpg";

const Home = () => {
  return <Box bgcolor={"blackAlpha.900"} w= {"full"} h={"full"}>
      <Image w={"full"} h={"85vh"} src={pic} objectFit={"contain"} filter={"grayscale(1)"} />
       <Text
         fontSize={"6xl"}
         textAlign={"start"}
         fontWeight={"thin"}
         color={"blackAlpha.900"}
         mt={"-20"}
         >
         
          Xcrypto
         </Text>
  </Box>
}

export default Home;