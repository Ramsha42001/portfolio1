import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../Fonts/Cascadia.ttf";
import { ClassNames } from "@emotion/react";
import ramsha from '../images/ramsha1.png'

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

function Home() {
  return (
    <>
    <Box display='flex' flexDirection={{base:'column-reverse',md:'column-reverse',lg:'row'}} >
    <MotionBox
    id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      w={{base:'100%',lg:'60%'}}
    
      // w={{ base: "100%", lg: "80%" }}
      minH="60vh"
      h='auto'
      ml={{ base: "0%", lg: "10%" }}
      mt={{ base: "35px", lg: "5%" }}
    >
      <Text fontFamily="mainFont" fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code">{'<'}html{'>'}</Text>
      <Text fontFamily="mainFont" fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" ml={10} mb={10}> {'<'}body{'>'}</Text>
      <Text fontFamily="mainFont" fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" ml={10}> {'<'}h1{'>'}</Text>
      <MotionHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        ml={10}
        fontFamily="mainFont"
        lineHeight="tall"
        color="heading"
        fontSize={{ base: "l", md: "l", lg: "xl" }}
        fontWeight="bold"
        letterSpacing="normal"
      >
        Hi,
      </MotionHeading>
      <MotionHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        ml={10}
        fontFamily="mainFont"
        lineHeight="tall"
        color="heading"
        fontSize={{ base: "l", md: "l", lg: "xl" }}
        fontWeight="bold"
        letterSpacing="normal"
      >
        I'm <span style={{color:'#5EDFFF'}}>R</span>amsha
      </MotionHeading>
      <Box minH={100} fontSize={{ base: "l", md: "l", lg: "xl" }}>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Full Stack Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Data Science Enthusiast",
          1000,
          "Data Analysis Enthusiast",
          1000
        ]}
        wrapper="span"
        speed={60}
        style={{
          display: "inline-block",
          color: "white",
          fontFamily: "'Cascadia Code', monospace",
          fontWeight: "bold",
          marginLeft: "35px",
         
        }}

        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        repeat={Infinity}
      /></Box>
      <Text fontFamily="mainFont" fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" ml={10} mb={10}> {'<'}h1{'/>'}</Text>
      <Text fontFamily="mainFont" fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" ml={10}> {'<'}p{'>'}</Text>
      <Button fontFamily="mainFont" ml={10} my={5} w={{ base: '200px', lg: '300px' }} h="50px" variant='outline' color='body' border='2px' borderColor='subHeading' _hover={{ bg: 'subHeading', color: 'black' }}  as="a"  href="mailto:ramshaiqbal4@gmail.com">Contact Me</Button>
      <Text fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" ml={10}> {'<'}p{'/>'}</Text>
    </MotionBox>
    <Box w={{base:'100%',lg:'30%'}}  display='flex'  alignItems={{base:'center',lg:'center'}} justifyContent={{base:'center'}}>
      <Box mt={{base:'10%',md:'5%',lg:'0%'}} w={{base:200,md:200,lg:300}} h={{base:200,md:200,lg:300}} borderRadius='100%' border='8px' borderColor='white'>
<img src={ramsha} style={{width:'100%', height:'100%'}}/></Box>
</Box>
    </Box>
   
    </>
  );
}

export default Home;
