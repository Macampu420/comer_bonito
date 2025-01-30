import { Box, Flex, Grid, Heading, useBreakpointValue } from "@chakra-ui/react";

const Gallery = () => {
  const isMobile = useBreakpointValue({ base: true, xl: false });
  
  return (
    <Flex pt={"50px"} flexDir={"column"} gap={5} align={"center"}>
      <Heading
        as={isMobile ? "h2" : "h1"}
        maxW={"1390px"}
        textAlign={"center"}
        lineHeight={1}
      >
        Sembramos con amor y cuidado para compartir bienestar en cada producto
      </Heading>

      <Box p={4} w="100%">
        <Grid
          templateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}
          gap={4}
          autoRows="minmax(150px, auto)"
        >
          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
          >
            Caja 1
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
          >
            Caja 2
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
          >
            Caja 3
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
            gridColumn={isMobile ? "span 1" : "span 2"}
          >
            Caja 4 (2 columnas)
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
          >
            Caja 5
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
            gridColumn={isMobile ? "span 1" : "span 2"}
          >
            Caja 6
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
            gridRow={isMobile ? "span 1" : "span 2"}
          >
            Caja 7
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
          >
            Caja 8
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
          >
            Caja 9
          </Box>

          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
            gridColumn={isMobile ? "span 1" : "span 3"}
          >
            Caja 10
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
};

export default Gallery;
