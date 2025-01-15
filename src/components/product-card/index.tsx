import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Flex
      position={"relative"}
      width={"300px"}
      height={"300px"}
      flexDir={"column"}
      align={"center"}
    >
      <Image
        w={"100%"}
        h={"100%"}
        objectFit={"cover"}
        borderRadius={"8px"}
        src={product.imageUrl}
        aspectRatio={1}
      />

      <Flex
        color={"#171C19"}
        position={"absolute"}
        flexDir={"column"}
        bottom={0}
        zIndex={1}
        p={"8px"}
        w={"90%"}
        mb={3}
        borderRadius={"8px"}
        border={"1px solid transparent"}
        bg={"rgba(194, 205, 197, 0.6)"}
      >
        <Heading>
          {product.name}
        </Heading>

        <Text alignSelf={"flex-end"}>
          ${product.price} <strong>{product.unit}</strong>
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProductCard;