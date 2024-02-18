import React, { useEffect, useState } from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import WorkData from "../Data/Work";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading=motion(Heading);

function Work() {
     const [isVisible, setIsVisible] = useState(false);
     const { ref, inView } = useInView({
       triggerOnce: true, 
       threshold: 0.1, 
       rootMargin: "-100px 0px", 
     });
     
   
     useEffect(() => {
       console.log("inView:", inView); // Log inView to check its value
       if (inView) {
         setIsVisible(true);
         console.log("visible!");
       }
     }, [inView]);

  return (
    <MotionBox
    id="work"
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
      >
        {"<"}h2{">"}
      </MotionText>
      <MotionHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        color="subHeading"
        fontSize={{ base: "m", lg: "l" }}
        py={5}
      >
        My Portfolio
      </MotionHeading>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
        mb={10}
      >
        {"<"}h2{"/>"}
      </MotionText>
      <Box w="100%" minH="70vh" h="auto" py={5}>
        <Box w="100%" h="auto" display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
          {WorkData.map((item, index) => (
            <MotionBox 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 + index * 0.4 }}
              shadow="custom"
              w="350px"
              h="350px"
              border="2px"
              borderColor="white"
              borderRadius="15px"
              m={15}
              position="relative" // Add position relative
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer"> {/* Add link */}
                <MotionBox
                  position="absolute" // Position the overlay absolutely
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="rgba(0,0,0,0.3)" // Transparent grey color
                  opacity={0} // Initially invisible
                  transition={{ duration: 0.3 }}
                  _hover={{ opacity: 1 }} // On hover, make it visible
                  borderRadius="15px"
                />
                <Image src={item.src} w='full' h='full' borderRadius='15px'/>
              </a>
            </MotionBox>
          ))}
        </Box>
      </Box>
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 + WorkData.length * 0.4 }}
        fontSize={{ base: "1rem", lg: "m" }}
        fontWeight="normal"
        color="code"
      >
        {"<"}section{"/>"}
      </MotionText>
    </MotionBox>
  );
}

export default Work;
