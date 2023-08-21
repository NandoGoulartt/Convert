import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import LayoutContainer from "../../Componentes/Layout";

const App = () => {
  return (
      <Flex gap={6}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Comprimento, Área e Volume
          </MenuButton>
          <MenuList>
            <MenuItem>Centímetros</MenuItem>
            <MenuItem>Metros</MenuItem>
            <MenuItem>Quilômetros</MenuItem>
            <MenuItem>Polegadas</MenuItem>
            <MenuItem>Hectares</MenuItem>
            <MenuItem>Litros</MenuItem>
            <MenuItem>Mililitros</MenuItem>
            <MenuItem>Pés Cúbicos</MenuItem>
            <MenuItem>Metros Cúbicos</MenuItem>
            <MenuItem>Galões</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Peso e Massa
          </MenuButton>
          <MenuList>
            <MenuItem>Quilogramas</MenuItem>
            <MenuItem>Gramas</MenuItem>
            <MenuItem>Libras</MenuItem>
            <MenuItem>Gramas por Centímetro Cúbico</MenuItem>
            <MenuItem>Quilogramas por Metro Cúbico</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Temperatura
          </MenuButton>
          <MenuList>
            <MenuItem>Celsius</MenuItem>
            <MenuItem>Fahrenheit</MenuItem>
            <MenuItem>Kelvin</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Tempo
          </MenuButton>
          <MenuList>
            <MenuItem>Segundos</MenuItem>
            <MenuItem>Minutos</MenuItem>
            <MenuItem>Horas</MenuItem>
            <MenuItem>Dias</MenuItem>
            <MenuItem>Semanas</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Ângulos
          </MenuButton>
          <MenuList>
            <MenuItem>Graus</MenuItem>
            <MenuItem>Radianos</MenuItem>
            <MenuItem>Minutos de Arco</MenuItem>
            <MenuItem>Segundos de Arco</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Velocidade
          </MenuButton>
          <MenuList>
            <MenuItem>Quilômetros por Hora</MenuItem>
            <MenuItem>Metros por Segundo</MenuItem>
            <MenuItem>Milhas por Hora</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Sistemas Númericos
          </MenuButton>
          <MenuList>
            <MenuItem>binário</MenuItem>
            <MenuItem>decimal</MenuItem>
            <MenuItem>hexadecimal</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Energia e Potência
          </MenuButton>
          <MenuList>
            <MenuItem>Joules</MenuItem>
            <MenuItem>Calorias</MenuItem>
            <MenuItem>HP</MenuItem>
            <MenuItem>Watts</MenuItem>
            <MenuItem>Quilocalorias</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Armazenamento de Dados
          </MenuButton>
          <MenuList>
            <MenuItem>bytes</MenuItem>
            <MenuItem>kilobytes</MenuItem>
            <MenuItem>megabytes</MenuItem>
            <MenuItem>gigabytes</MenuItem>
            <MenuItem>terabytes</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Moedas
          </MenuButton>
          <MenuList>
            <MenuItem>Real</MenuItem>
            <MenuItem>Euro</MenuItem>
            <MenuItem>Dólar Americano</MenuItem>
            <MenuItem>Dólar Canadense</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
  );
};

export default App;
