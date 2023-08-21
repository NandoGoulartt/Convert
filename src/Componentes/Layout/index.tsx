import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../Header";


const LayoutContainer = ({ children }: any) => {
  return (
    <Box bg="tomato" w="100%" minH="100%" p={4} color="white">
      <Header />
      <Box w={'100%'}>{children}</Box>
    </Box>
  );
};

export default LayoutContainer;
