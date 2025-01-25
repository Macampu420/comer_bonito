import { Button, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react"
import ProductsCarrousel from "./components/products-carrousel";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

const App = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex as={"main"} flexDir={"column"} h={"100vh"}>
      <Flex
        h={"50vh"}
        px={isMobile ? 5 : 100}
        pb={"50px"}
        pt={"30px"}
        flexDir={"column"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundImage={"url(/img/Video.png)"}
        backgroundSize={"cover"}
      >
        <Flex
          width={"100%"}
          justifyContent={isMobile ? "center" : "flex-end"}
          gap={isMobile ? 2 : 4}
          mb={10}
        >
          <Button variant={"primary"}>contáctanos por whatsapp</Button>
          <Button variant={"primary"}>danos tu opinión</Button>
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
      </Flex>

      <Gallery />

      <Footer />
    </Flex>
  );
}

export default App