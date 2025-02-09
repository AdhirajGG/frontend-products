import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { useCustomTheme } from "../hooks/useCustomTheme"; // ✅ Import custom hook
import {useColorModeValue} from "./ui/color-mode.jsx"
const Navbar = () => {
  const { theme, toggleTheme } = useCustomTheme();  // ✅ Use correct hook

  return (
    <Container maxW={"full"} px={4} bg={useColorModeValue("gray.200","gray.900")}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textAlign={"center"}
          textTransform={"uppercase"}
          bgGradient="linear-gradient(to right, #00B5D8, #3182CE)"

          textColor="transparent"
          bgClip={"text"}
        >
          <Link to={"/"}>ToBuyProducts 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaPlusSquare size={20} />
            </Button>
          </Link>
          <Button onClick={toggleTheme}>
            {theme === "dark" ? "🌙" : "☀️"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
