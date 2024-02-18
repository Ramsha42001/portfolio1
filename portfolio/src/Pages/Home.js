import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../Fonts/Cascadia.ttf";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

function Home() {
  return (
    <MotionBox
    id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      w={{ base: "100%", lg: "80%" }}
      h="auto"
      ml={{ base: "0%", lg: "15%" }}
      mt={{ base: "35px", lg: "0" }}
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
        I'm <span style={{ color: "#5EDFFF" }}>R</span>amsha
      </MotionHeading>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Full Stack Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "React Developer",
          1000,
          "Web Designer",
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "3rem",
          display: "inline-block",
          color: "white",
          fontFamily: "'Cascadia Code', monospace",
          fontWeight: "bold",
          marginLeft: "35px"
        }}
        repeat={Infinity}
      />
      <Text fontFamily="mainFont" fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" ml={10} mb={10}> {'<'}h1{'/>'}</Text>
      <Text fontFamily="mainFont" fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" ml={10}> {'<'}p{'>'}</Text>
      <Button fontFamily="mainFont" ml={10} my={5} w={{ base: '200px', lg: '300px' }} h="50px" variant='outline' color='subHeading' border='2px' borderColor='subHeading' _hover={{ bg: 'subHeading', color: 'black' }}  as="a"  href="mailto:ramshaiqbal4@gmail.com">Contact Me</Button>
      <Text fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" ml={10}> {'<'}p{'/>'}</Text>
    </MotionBox>
  );
}

export default Home;
