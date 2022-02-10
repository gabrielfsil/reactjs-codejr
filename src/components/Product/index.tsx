import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ImageProduct } from "../ImageProduct";

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  discount?: number;
}

export function Product(props: ProductProps) {
  return (
    <Box bg="#f0f0f0" borderRadius={8} padding={4} display="flex" flexDirection="column" >
      <ImageProduct title={props.title} image={props.image} />
      <Flex flexDirection="column" marginTop="auto" >
        <Text fontWeight="bold" fontSize={24}>
          {props.title}
        </Text>
        <Text>{props.description}</Text>
        <Text fontWeight="bold">R${props.price}</Text>
        {props.discount && <small>{props.discount}% de desconto à vista</small>}
      </Flex>
    </Box>
  );
}
