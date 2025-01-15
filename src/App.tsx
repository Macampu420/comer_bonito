import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import ProductsCarrousel from "./components/products-carrousel";

const App = () => {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      px={10}
      pt={"30px"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      backgroundImage={"url(/img/Video.png)"}
      backgroundSize={"cover"}
      flexDir={"column"}
    >
      <Flex width={"100%"} justifyContent={"flex-end"} gap={4} mb={10}>
        <Button textTransform={"uppercase"}>contáctanos por whatsapp</Button>
        <Button textTransform={"uppercase"}>Danos tu opinión</Button>
      </Flex>

      <Heading fontSize={"50px"} maxW={"643px"} lineHeight={1} mb={5}>Productos 100% orgánicos cultivados con amor</Heading>

      <Text textTransform={"uppercase"} fontSize={"24px"} maxW={"514px"}>
        Alimentación consciente y saludable Come sano Come bonito
      </Text>

      <ProductsCarrousel />
    </Flex>
  );
}

export default App