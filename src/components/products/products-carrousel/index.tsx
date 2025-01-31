import { Flex, Heading, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import ProductCard from "../product-card";
import { useRef } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useProducts } from "../products-provider";

const ProductsCarrousel = () => {
  const { products } = useProducts();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.firstElementChild?.getBoundingClientRect().width ||
        0;

      const containerStyle = getComputedStyle(carouselRef.current);
      const gap = parseInt(
        containerStyle.columnGap || containerStyle.gap || "0",
        10
      );

      const scrollAmount =
        direction === "left" ? -(cardWidth + gap) : cardWidth + gap;

      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      mt={10}
      p={isMobile ? 4 : 10}
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
        top={isMobile ? -45 : -30}
        left={"50%"}
        style={{ transform: "translateX(-50%)" }}
      />
      <Flex w={"100%"} justify={"space-between"} mt={isMobile ? 10 : 0}>
        <Heading as={"h3"}>Nuestros productos</Heading>

        <Flex gap={"8px"}>
          <IconButton aria-label="left" bg={"transparent"} _hover={{}} onClick={() => scrollCarousel("left")}>
            <FaRegArrowAltCircleLeft fill="#768B7C" fontSize={"40px"}/>
          </IconButton>
          <IconButton aria-label="right" bg={"transparent"} _hover={{}} onClick={() => scrollCarousel("right")}>
            <FaRegArrowAltCircleRight fill="#768B7C" fontSize={"40px"} transform={"rotate(180deg)"}/>  
          </IconButton>
        </Flex>
      </Flex>
      <Flex
        ref={carouselRef}
        w={"100%"}
        flexDir={"row"}
        gap={5}
        mt={5}
        overflowX={"scroll"}
      >
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </Flex>
    </Flex>
  );
}

export default ProductsCarrousel;