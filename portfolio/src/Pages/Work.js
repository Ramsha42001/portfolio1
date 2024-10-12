import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import course from '../images/course.png';
import gdsc from '../images/gdsc.png';
import ieee from '../images/ieee.png';
import lnm from '../images/lnmHacks.png';
import phoenix from '../images/phoenix.png';
import plinth from '../images/plinth.png';
import car from '../images/car.png';
import ats1 from '../images/ats1.png';
import hr from '../images/hr.png';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const categories = [
  {
    title: "Development",
    projects: [
      { name: "Faculty course Website", src: course, github: 'https://github.com/Ramsha42001/course_website' },
      { name: "GDSC Website", src: gdsc, github: 'https://github.com/Ramsha42001/gdsc-website-1' },
      { name: "IEEE LNMIIT Official website", src: ieee, github: '' },
      { name: "LNM Hacks Website", src: lnm, github: 'https://github.com/Ramsha42001/lnm-hacks' },
      { name: "Phoenix Club Website", src: phoenix, github: 'https://phoenix.lnmiit.ac.in/' },
      { name: "Plinth Tech Fest LNMIIT", src: plinth, github: '' },
    ],
  },
  {
    title: "Data Science",
    projects: [
      { name: "Used Car Price Prediction", src: car, github: 'https://github.com/Ramsha42001/Data-Science' },
      { name: "ATS Resume Scorer Web Application", src: ats1, github: '' },
    ],
  },
  {
    title: "Data Analysis",
    projects: [
      { name: "HR Analytics Dashboard Power BI", src: hr, github: 'https://drive.google.com/file/d/1vT-p2wlds9F43AxXaGaxWagVxTFaXi68/view?usp=drive_link' },
    ],
  },
];

function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProjects, setSelectedProjects] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleCardClick = (projects) => {
    setSelectedProjects(projects);
    onOpen();
  };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <MotionBox
      id="work"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
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

      {/* Box containing the project cards */}
      <Box w="100%" minH="70vh" h="auto" py={5}>
        <Box
          w="100%"
          minH="50vh"
          h="auto"
          display="flex"
          flexDirection="row"
          justifyContent={{ base: "center", md: "center", lg: "space-between" }}
          flexWrap="wrap"
          alignItems="center" // Center vertically
        >
          {categories.map((category, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.4 }}
              shadow="custom"
              w={300}
              h={{ base: '200', md: '200', lg: '300' }}
              border="2px"
              borderColor="white"
              borderRadius="15px"
              m={15}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              onClick={() => handleCardClick(category.projects)}
              cursor="pointer" // Add cursor pointer for better UX
            >
              <Text fontSize="m" color="heading" fontWeight="bold">
                {category.title}
              </Text>
              <Text fontSize="s" color="heading" fontWeight="normal">
                (click to see projects)
              </Text>
            </MotionBox>
          ))}
        </Box>
      </Box>

      {/* Modal for displaying detailed projects */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.800" maxW="90%" minH="80%" borderRadius="10px"> {/* Set background color and size */}
          <ModalHeader color="white">Projects</ModalHeader> {/* Change header color if needed */}
          <ModalCloseButton color="white" />
          <ModalBody display='flex' flexDirection='row' flexWrap='wrap'>
            {selectedProjects.map((project, index) => (
              <Box key={index} display="flex" flexDir='column' alignItems="center" mb={4}>
                <a href={project.github} target="_blank" rel="noopener noreferrer"> {/* GitHub Link */}
                  <Image
                    border='4px' borderColor='subHeading' shadow="custom"
                    src={project.src} mx={12} my={10} w={{ base: 250, lg: 300 }} h={200}
                    alt={project.name} borderRadius="10px"
                    transition="opacity 0.3s ease"
                    _hover={{ opacity: 0.4 }} // Hover effect
                  />
                </a>
                <Text ml={4} color="white">{project.name}</Text>
              </Box>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 + categories.length * 0.4 }}
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
