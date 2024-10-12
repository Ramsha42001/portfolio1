import React, { useEffect, useState } from "react";
import { Box, Text, Heading, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import skillsDevelopment from "../Data/Skills";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionBox
      id="skills"
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration: 0.5, delay: 0.5 }}
      fontFamily="mainFont"
      w={{ base: "100%", lg: "80%" }}
      h="auto"
      ml={{ base: "0%", lg: "15%" }}
      mt={{ base: "35px", lg: "0" }}
      display="flex"
      flexDirection={{ base: "column", lg: "column" }}
      justifyContent="space-between"
    >
      <MotionBox
        w={{ base: "100%", lg: "50%" }}
        h="auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <MotionText fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code">
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
        <MotionText fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" mb={10}>
          {"<"}h2{"/>"}
        </MotionText>
      </MotionBox>

      <MotionBox
        w={{ base: "100%", lg: "100%" }}
        h="auto"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {skillsDevelopment.map((skill, index) => (
          <MotionBox
            key={index}
            display="flex"
            flexDirection="column"
            mb={10}
            mx={10}
            variants={itemVariants}
          >
            <MotionHeading
              pb={3}
              fontSize={{ base: "s", lg: "s" }}
              color="heading"
              fontWeight="normal"
              textAlign="center"
            >
              {skill.name}
            </MotionHeading>
            <Box position="relative" display="flex" justifyContent="center" alignItems="center">
              <CircularProgress
                value={skill.value}
                size="75px"
                thickness="4px"
                color="#5EDFFF"
                sx={{
                  boxShadow: "0px 0px 8px 4px #5EDFFF", // Creates the circular glow
                  borderRadius: "50%", // Ensures the shadow is circular
                }}
              >
                <CircularProgressLabel>
                  <Text fontSize="lg" color="gray.800">
                    {`${skill.value}%`}
                  </Text>
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
          </MotionBox>
        ))}
      </MotionBox>

      <MotionText fontSize={{ base: "1rem", lg: "m" }} fontWeight="normal" color="code" mb={5}>
        {"<"}p{"/>"}
      </MotionText>
    </MotionBox>
  );
}

export default Skills;
