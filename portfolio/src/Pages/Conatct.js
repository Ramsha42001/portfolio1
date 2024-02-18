import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    console.log("inView:", inView);
    if (inView) {
      setIsVisible(true);
      console.log("visible!");
    }
  }, [inView]);

  return (
    <MotionBox
    id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.5 }}
      fontFamily="mainFont"
      w={{ base: "100%", lg: "80%" }}
      minH="100vh"
      h="auto"
      textAlign="left"
      ml={{ base: "0%", lg: "15%" }}
      my={20}
    
    >
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
        fontFamily='mainFont'
      >
        {"<"}h2{">"}
      </MotionText>
      <MotionHeading
      fontFamily='mainFont'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        color="subHeading"
        fontSize={{ base: "m", lg: "l" }}
        py={5}
      >
        Contact Me
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
       Have a project in mind or just want to say hello? 
       I'd love to hear from you! Feel free to reach out 
       using the contact button below or connect with me using the following email address:- ramshaiqbal4@gmail.com . Whether you're interested 
       in collaborating on a project, discussing potential opportunities, 
       or simply want to chat, I'm always open to new connections and exciting 
       ventures. Let's bring your ideas to life together!
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
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.8 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
      >
        {"<"}form{">"}
      </MotionText>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
        w="100%"
        fontFamily="mainFont"
        lineHeight="tall"
        color="heading"
        fontSize={{ base: "l", md: "l", lg: "xl" }}
        fontWeight="bold"
        letterSpacing="normal"
        textAlign="center"
      >
        {/* <MotionHeading>Contact Me</MotionHeading> */}
        <MotionHeading fontFamily='mainFont'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        color="subHeading"
        fontSize={{ base: "m", lg: "xl" }}
        py={5}>Got a Project?</MotionHeading>
        <MotionHeading fontFamily='mainFont'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        color="subHeading"
        fontSize={{ base: "m", lg: "xl" }}
        py={5}>Let's Talk</MotionHeading>
        <Button fontFamily="mainFont"
         ml={10} my={5} w={{ base: '200px', lg: '300px' }} 
         h="50px" variant='outline' color='subHeading' 
         border='2px' borderColor='subHeading' 
         _hover={{ bg: 'subHeading', color: 'black' }}  
         as="a"  href="mailto:ramshaiqbal4@gmail.com">Contact Me</Button>
      </MotionBox>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
      >
        {"<"}form{"/>"}
      </MotionText>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
        ml={10}
        mt={10}
      >
        {"<"}body{"/>"}
      </MotionText>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
      >
        {"<"}html{"/>"}
      </MotionText>
    </MotionBox>
  );
}

export default Contact;
