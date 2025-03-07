import { Button, Flex, Image, Img, Text, useBreakpointValue } from "@chakra-ui/react"
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import ProductDetailModal from "./components/products/product-detail-modal";
import ProductsCarrousel from "./components/products/products-carrousel";
import { useProducts } from "./components/products/products-provider";
import { BsChatRightText } from "react-icons/bs";

const App = () => {
  const {isProductModalOpen, closeProductModal, selectedProduct, handleWhastappClick} = useProducts();
  const isMobile = useBreakpointValue({ base: true, md: false });
 
  return (
    <Flex
      alignSelf={"center"}
      marginX={"auto"}
      as="main"
      w="100%"
      maxW={"1800px"}
      flexDir="column"
      position="relative"
    >
      <Img
        maxWidth={"100%"}
        minWidth={"100%"}
        src={
          "https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/fondo.jpg"
        }
        alt={"video"}
        position={"absolute"}
        top={0}
        zIndex={0}
        maxH={"700px"}
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
          gap={isMobile ? 1 : 4}
          mb={10}
        >
          <Button
            w={"max-content"}
            variant={"primary"}
            fontSize={isMobile ? "12px" : "14px"}
            leftIcon={<BsChatRightText />}
            onClick={handleWhastappClick}
          >
            contáctanos por whatsapp
          </Button>
        </Flex>

       
        <Image
          maxW={"643px"}
          mb={"40px"}
          src={"/img/comer-bonito-blanco.png"}
          alt={"Logo"}
        />

        <Text
          color={"#fff"}
          maxW={"514px"}
          mt={isMobile ? "40px" : "0"}
          mb={"40px"}
        >
          La consciencia por el medio ambiente y por nuestra salud están en la
          siembra, cuidado y cosecha de los alimentos orgánicos. Se dejan de
          lado pesticidas y fertilizantes sintéticos para darle paso a métodos
          naturales que respeten el equilibrio de todos los seres que hacen
          parte del territorio.
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