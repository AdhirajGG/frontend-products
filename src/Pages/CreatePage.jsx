import { Box, Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { useColorModeValue } from "../Components/ui/color-mode";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  return (
    <Container maxW="container.sm">
      {/* 🛠 Set toaster position to bottom-right */}
      <Toaster position="bottom-center" reverseOrder={false} />

      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8} >
          <Text
            fontSize={{ base: "22px", sm: "28px" }}
            fontWeight={"bold"}
            textAlign={"center"}
            textTransform={"uppercase"}
            bgGradient="linear-gradient(to right, #00B5D8, #3182CE)"

            textColor="transparent"
            bgClip={"text"}
          >Create New Product</Text>

        </Heading>
        <Box w="full" bg={useColorModeValue("white", "gray.900")} p={6} rounded="lg" shadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
              placeholder="Image"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;