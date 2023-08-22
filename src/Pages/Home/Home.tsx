import React from "react";
import { Box } from "@chakra-ui/react";
import LayoutContainer from "../../Componentes/Layout";

const Home = () => {
  return (
    <LayoutContainer>
      <Box p={8}>
        <h1>Bem vindo ao convert</h1>
        <p>Converta todo tipo de medida.</p>
      </Box>
    </LayoutContainer>
  );
};

export default Home;
