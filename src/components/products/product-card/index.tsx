import { Flex, Heading, Image } from "@chakra-ui/react"
import { Product } from "../../types";
import { useProducts } from "../products-provider";

const ProductCard = ({ product }: { product: Product }) => {
  const {openProductModal} = useProducts();

  const handleCardClick = () => {
    openProductModal(product);
  }

  return (
    <Flex
      userSelect={"none"}
      position={"relative"}
      width={"300px"}
      minW={"300px"}
      height={"300px"}
      flexDir={"column"}
      align={"center"}
      onClick={handleCardClick}
      cursor={"pointer"}
    >
      <Image
        userSelect={"none"}
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
        <Heading as={"h3"}>
          {product.name}
        </Heading>

        <Heading as={"h4"} alignSelf={"flex-end"}>
          ${product.price} <strong>{product.unit}</strong>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default ProductCard;