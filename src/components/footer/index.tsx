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
        px={isMobile ? "50px" : "150px"}
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
              <Text
                as={"a"}
                href="https://www.instagram.com/casadelossuenossonson/"
                target="_blank"
                textDecoration={"underline"}
              >
                Instagram
              </Text>
              <Text
                as={"a"}
                href="https://www.facebook.com/casadelossuenossonson"
                target="_blank"
                textDecoration={"underline"}
              >
                Facebook
              </Text>
            </Flex>

            <Flex flexDir="column" align={isMobile ? "center" : "flex-start"}>
              <Heading fontSize={isMobile ? "20px" : "24px"}>
                Más proyectos
              </Heading>
              <Text
                as={"a"}
                href="https://casadelosuenos.netlify.app"
                target="_blank"
                textDecoration={"underline"}
              >
                Memorias plurales
              </Text>
            </Flex>
          </Flex>

          <Text maxW={isMobile ? "100vw !important" : "800px"} variant={"caption"}>
            Sonsón es nuestro hogar, el regalo que la vida nos dio para SER dos
            veces. Nuestra propuesta busca la conexión de las comunidades
            campesinas y rurales con el territorio. Saber habitarlo desde el
            cuidado es respetar sus ciclos naturales. No pensamos en explotar o
            producir de manera forzosa y a gran escala. Creemos en la seguridad
            y en la soberanía alimentaria y defendemos nuestro derecho a vivir
            en paz.
            <br/>
          </Text>
        </Flex>

        <Flex
          justify="flex-end"
          gap={isMobile ? "20px" : "60px"}
          flexDir={isMobile ? "column" : "row"}
          mt={isMobile ? "24px" : "0"}
        >
          <Image
            minW={isMobile ? "80vw" : "auto"}
            maxW={isMobile ? "100%" : "50%"}
            src="/img/logo_corpo.png"
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
