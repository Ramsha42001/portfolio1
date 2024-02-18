import React from "react";
import {Box,Heading,Text,Button} from "@chakra-ui/react";
import './App.css';
/*--------------------------------------------Pages------------------------------------------------*/
import Home from './Pages/Home'
import Work from './Pages/Work'
import About from "./Pages/About";
import Contact from "./Pages/Conatct";
import Skills from "./Pages/Skills";
/*--------------------------------------------Components------------------------------------------------*/
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Box bgColor="background" w='100%' minH='100vh' h='auto'  py={10} px={{base:5,lg:10}} >
      <Sidebar  />
    <Home />
    <Work />
    <Skills />
    <About />
    <Contact />
    </Box>
  );
}

export default App;
 