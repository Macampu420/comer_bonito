import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex as="footer" w="100%" maxW="100vw" mx={0} flexDir="column" mt="auto">
      <Flex
        align="center"
        justify={isMobile ? "center" : "space-between"}
        flexDir={isMobile ? "column" : "row"}
        bg="#C2CDC5"
        as="section"
        h={isMobile ? "auto" : "400px"}
        px="32px"
        py={isMobile ? "24px" : "0"}
        textAlign={isMobile ? "center" : "left"}
      >
        {/* Redes y proyectos */}
        <Flex flexDir="column" gap="16px">
          <Flex
            gap="32px"
            flexDir={isMobile ? "column" : "row"}
            align={isMobile ? "center" : "flex-start"}
          >
            <Flex flexDir="column" gap="11px">
              <Heading fontSize={isMobile ? "20px" : "24px"}>
                Nuestras Redes
              </Heading>
              <Text>Instagram</Text>
              <Text>Facebook</Text>
            </Flex>

            <Flex flexDir="column" align={isMobile ? "center" : "flex-start"}>
              <Heading fontSize={isMobile ? "20px" : "24px"}>
                Más proyectos
              </Heading>
              <Text>Memoria</Text>
            </Flex>
          </Flex>

          <Text maxW="400px" fontSize={isMobile ? "14px" : "16px"}>
            Productos orgánicos cultivados en Sonsón, Antioquia. Vereda Aures La
            Morelia - Finca Villa Aura
          </Text>
        </Flex>

        {/* Logo y título */}
        <Flex
          align="center"
          gap={isMobile ? "20px" : "60px"}
          flexDir={isMobile ? "column" : "row"}
        >
          <Heading
            fontSize={isMobile ? "36px" : "120px"}
            maxW={isMobile ? "90%" : "700px"}
            lineHeight={1}
            textAlign="center"
            background="linear-gradient(to top, #6B8274, #171C19)"
            backgroundClip="text"
            color="transparent"
          >
            Casa de los sueños
          </Heading>
          <Image
            src="/img/logo_corpo.svg"
            alt="logo"
            objectFit="contain"
            boxSize={isMobile ? "80px" : "auto"}
          />
        </Flex>
      </Flex>

      <Image
        maxH={isMobile ? "100px" : "200px"}
        objectFit="cover"
        src="/img/footer.png"
        alt="logo"
      />
    </Flex>
  );
};

export default Footer;
