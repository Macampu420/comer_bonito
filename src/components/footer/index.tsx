import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as={"footer"} w={"100%"} flexDir={"column"}>
      <Flex
        align={"center"}
        justify={"space-between"}
        bg={"#C2CDC5"}
        as={"section"}
        h={"400px"}
        px={"32px"}
      >
        <Flex flexDir={"column"} gap={"16px"}>
          <Flex gap={"32px"}>
            <Flex flexDir={"column"} gap={"11px"}>
              <Heading mb={"5px"}>Nuestras Redes</Heading>

              <Text>Instagram</Text>
              <Text>FaceBook</Text>
            </Flex>

            <Flex flexDir={"column"}>
              <Heading mb={"16px"}>Mas proyectos</Heading>
              <Text>Memoria</Text>
            </Flex>
          </Flex>

          <Text maxW={"400px"}>
            Productos orgánicos cultivados en Sonsón, Antioquia. Vereda Aures La
            Morelia - Finca Villa Aura
          </Text>
        </Flex>

        <Flex align={"center"} gap={"60px"}>
          <Heading
            fontSize={"120px"}
            maxW={"700px"}
            lineHeight={1}
            textAlign={"right"}
            background="linear-gradient(to top, #6B8274, #171C19)"
            backgroundClip="text"
            color="transparent"
          >
            Casa de los sueños
          </Heading>

          <Image src="/img/logo_corpo.svg" alt="logo" objectFit={"contain"} />
        </Flex>
      </Flex>

      <Image src="/img/footer.png" alt="logo" />
    </Flex>
  );
}

export default Footer;