import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Set the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      console.log('visible hai')
    }
  }, [inView]);

  return (
    <MotionBox
    id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.5,delay: 0.5 }}
      w={{ base: "100%", lg: "80%" }}
      minH="100vh"
      h="auto"
      textAlign="left"
      ml={{ base: "0%", lg: "15%" }}
      my={20}
      fontFamily="mainFont"
    >
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
      >
        {"<"}h2{">"}
      </MotionText>
      <MotionHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        color="subHeading"
        fontFamily="mainFont"
        fontSize={{ base: "m", lg: "l" }}
        py={5}
      >
        About Me
      </MotionHeading>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
      >
        {"<"}h2{"/>"}
      </MotionText>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
        mt={20}
      >
        {"<"}p{">"}
      </MotionText>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="heading"
        py={5}
      >
       Welcome to my portfolio! I'm Ramsha Iqbal, 
       a passionate web developer with a keen eye 
       for detail and a love for creativity. With a 
       background in full stack development, 
       I thrive on turning ideas into reality through 
       innovative design and development. My journey 
       in the world of web development has equipped me with a 
       diverse skill set, allowing me to tackle challenges with 
       confidence and deliver exceptional results. Whether it's
        crafting engaging user experiences or bringing brands to 
        life, I'm dedicated to pushing boundaries and exceeding 
        expectations. Let's collaborate and bring your vision to life!
      </MotionText>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
        mb={5}
      >
        {"<"}p{"/>"}
      </MotionText>
    </MotionBox>
  );
}

export default About;
