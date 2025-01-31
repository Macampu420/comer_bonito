import { Button, Flex, Heading, Img, Text, useBreakpointValue } from "@chakra-ui/react"
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import ProductDetailModal from "./components/products/product-detail-modal";
import ProductsCarrousel from "./components/products/products-carrousel";
import { useProducts } from "./components/products/products-provider";
import { BsChatRightText } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";

const App = () => {
  const {isProductModalOpen, closeProductModal, selectedProduct, handleWhastappClick} = useProducts();
  const isMobile = useBreakpointValue({ base: true, md: false });
 
  return (
    <Flex as="main" w="100%" mx={0} flexDir="column" position="relative">
      <Img
        maxWidth={"100%"}
        src={"/img/Video.png"}
        alt={"video"}
        position={"absolute"}
        top={0}
        zIndex={0}
        h={"70vh"}
        objectFit={"cover"}
      />

      <Flex
        as={"section"}
        maxW={"100%"}
        width={"100%"}
        zIndex={1}
        px={isMobile ? 5 : 100}
        pb={"50px"}
        pt={"30px"}
        flexGrow={1}
        flexDir={"column"}
        backgroundColor={"transparent"}
      >
        <Flex
          width={"100%"}
          justifyContent={isMobile ? "center" : "flex-end"}
          gap={isMobile ? 2 : 4}
          mb={10}
        >
          <Button
            variant={"primary"}
            fontSize={isMobile ? "12px" : "14px"}
            leftIcon={<BsChatRightText />}
            onClick={handleWhastappClick}
          >
            contáctanos por whatsapp
          </Button>
          <Button
            isDisabled
            variant={"primary"}
            fontSize={isMobile ? "12px" : "14px"}
            leftIcon={<VscFeedback />}
          >
            danos tu opinión
          </Button>
        </Flex>

        <Heading as={"h1"} lineHeight={1} maxW={"643px"} mb={"40px"}>
          Productos 100% orgánicos cultivados con amor
        </Heading>

        <Text textTransform={"uppercase"} fontSize={"24px"} maxW={"514px"}>
          Alimentación consciente y saludable
          <br />
          Come sano
          <br />
          Come bonito
        </Text>

        <ProductsCarrousel />

        <Gallery />
      </Flex>

      <Footer />

      {isProductModalOpen && selectedProduct && (
        <ProductDetailModal
          onClose={closeProductModal}
          product={selectedProduct}
        />
      )}
    </Flex>
  );
}

export default App