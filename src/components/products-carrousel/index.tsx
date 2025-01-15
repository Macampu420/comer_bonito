import { Flex, Heading, Image } from "@chakra-ui/react";
import { products } from "./data";
import ProductCard from "../product-card";

const ProductsCarrousel = () => {
  return (
    <Flex
      mt={5}
      p={10}
      bg={"white"}
      borderRadius={10}
      position={"relative"}
      flexDir={"column"}
    >
      <Image
        src={"/img/Logo.png"}
        alt={"Logo"}
        width={100}
        height={100}
        position={"absolute"}
        top={-30}
        right={"50%"}
      />
      <Heading color={"#2D3430"} fontWeight={"400px"}>
        Nuestros productos
      </Heading>
      <Flex w={"100%"} flexDir={"row"} gap={5} mt={5}>
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Flex>
    </Flex>
  );
}

export default ProductsCarrousel;