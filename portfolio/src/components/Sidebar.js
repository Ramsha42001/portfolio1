import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  IconButton,
  Button,
  Box
} from '@chakra-ui/react';

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    onClose();
  };

  return (
    <>
      <Box position='fixed' zIndex={4} left={{ base: 0, lg: 5 }} top={{ base: 5, lg: 10 }}>
        <IconButton border="2px" borderColor="subHeading" ref={btnRef} colorScheme='transparent' onClick={onOpen} icon={<HamburgerIcon />} ml={10} />
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="sidebar">
            <DrawerCloseButton color="white" />
            <DrawerBody display='flex' flexDirection='column' justifyContent='center'>
              <Button variant='outline' color='white' border='2px' borderColor='white' _hover={{ bg: 'white', color: 'black' }} my={3} onClick={() => scrollToSection('about')}>About</Button>
              <Button variant='outline' color='white' border='2px' borderColor='white' _hover={{ bg: 'white', color: 'black' }} my={3} onClick={() => scrollToSection('skills')}>My Skills</Button>
              <Button variant='outline' color='white' border='2px' borderColor='white' _hover={{ bg: 'white', color: 'black' }} my={3} onClick={() => scrollToSection('work')}>Work</Button>
              <Button variant='outline' color='white' border='2px' borderColor='white' _hover={{ bg: 'white', color: 'black' }} my={3} onClick={() => scrollToSection('contact')}>Contact</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}

export default Sidebar;
