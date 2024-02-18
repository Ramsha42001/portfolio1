import React, { useEffect, useState } from "react";
import { Box, Text, Heading, Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkData from "../Data/Work";
import skills from "../Data/Skills";
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionProgress = motion(Progress);

function Skills() {
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
    id="skills"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.5 }}
      fontFamily="mainFont"
      w={{ base: "100%", lg: "80%" }}
      h="auto"
      ml={{ base: "0%", lg: "15%" }}
      mt={{ base: "35px", lg: "0" }}
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="space-between"
    >
      <MotionBox
        w={{ base: "100%", lg: "50%" }}
        h="auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <MotionText
          fontSize={{ base: "1rem", lg: "m" }}
          fontWeight="normal"
          color="code"
        >
          {"<"}h2{">"}
        </MotionText>
        <MotionHeading
          fontSize={{ base: "m", lg: "l" }}
          color="subHeading"
          fontFamily="mainFont"
          py={5}
        >
          Skills and Experience
        </MotionHeading>
        <MotionText
          fontSize={{ base: "1rem", lg: "m" }}
          fontWeight="normal"
          color="code"
          mb={10}
        >
          {"<"}h2{"/>"}
        </MotionText>

        <MotionText
          fontSize={{ base: "1rem", lg: "m" }}
          fontWeight="normal"
          color="code"
        >
          {"<"}p{">"}
        </MotionText>
        <MotionText
          fontSize={{ base: "1rem", lg: "m" }}
          fontWeight="normal"
          color="heading"
          py={5}
        >
          Welcome to my portfolio! Here, I showcase a collection of my finest
          work, reflecting my passion, creativity, and dedication. Each piece
          is a testament to my skills and expertise, crafted with precision
          and care. From web design and development to graphic design and
          creative projects, explore the diverse range of my capabilities. Dive
          in and discover the essence of my talent, innovation, and commitment
          to excellence.
        </MotionText>
        <MotionText
          fontSize={{ base: "1rem", lg: "m" }}
          fontWeight="normal"
          color="code"
          mb={5}
        >
          {"<"}p{"/>"}
        </MotionText>
      </MotionBox>

      <MotionBox
        w={{ base: "100%", lg: "40%" }}
        h="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {skills.map((skill, index) => (
          <MotionBox
            key={index}
            w="100%"
            py="5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            <MotionHeading
              pb={3}
              fontSize={{ base: "m", lg: "m" }}
              color="subHeading"
              fontWeight="normal"
            >
              {skill.name}
            </MotionHeading>
            <MotionProgress
              colorScheme="red"
              size="sm"
              value={skill.value}
              borderRadius={15}
              w="90%"
            />
          </MotionBox>
        ))}
      </MotionBox>
    </MotionBox>
  );
}

export default Skills;
