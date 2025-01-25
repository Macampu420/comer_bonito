import { Box, Flex, Grid, Heading } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Flex flexGrow={1} pt={"450px"} flexDir={"column"} gap={5} align={"center"}>
      <Heading
        maxW={"1390px"}
        fontSize={"64px"}
        color={"#2D3430"}
        textAlign={"center"}
        lineHeight={1}
      >
        Sembramos con amor y cuidado para compartir bienestar en cada producto
      </Heading>

      <Box p={4} w="100%">
        <Grid
          templateColumns="repeat(3, 1fr)" // Tres columnas iguales
          gap={4} // Espaciado entre las cajas
          autoRows="minmax(150px, auto)" // Altura adaptable para cada fila
        >
          {/* Caja normal */}
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
            gridColumn="span 2" // Ocupa 2 columnas
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
            gridColumn="span 2" // Ocupa 2 columnas
          >
            Caja 6
          </Box>

          {/* Caja que ocupa 2 filas */}
          <Box
            bg="rgba(58, 56, 56, 0.3)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
            gridRow="span 2" // Ocupa 2 filas
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
            gridColumn={"span 3"}
          >
            Caja 10
          </Box>

        </Grid>
      </Box>
    </Flex>
  );
};

export default Gallery;
