import {
  Box,
  Flex,
  Grid,
  Heading,
  Img,
  useBreakpointValue,
} from "@chakra-ui/react";

const Gallery = () => {
  const isMobile = useBreakpointValue({ base: true, xl: false });

  if (isMobile) {
    return (
      <Flex pt={"50px"} flexDir={"column"} gap={5} align={"center"}>
        <Heading as="h2" maxW={"1390px"} textAlign={"center"} lineHeight={1}>
          Sembramos con amor y cuidado para compartir bienestar en cada producto
        </Heading>

        <Box p={4} w="100%">
          <Grid templateColumns="1fr" gap={4} autoRows="minmax(150px, auto)">
            {[
              "IMG-20250306-WA0076.jpg",
              "IMG-20250306-WA0085.jpg",
              "IMG-20250306-WA0093.jpg",
              "dji_export_1716928804681.jpg",
              "IMG-20250306-WA0094.jpg",
              "ni%C3%B1a.jpg",
            ].map((img, idx) => (
              <Img
                key={idx}
                borderRadius={"16px"}
                objectFit={"contain"}
                src={`https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/${img}`}
              />
            ))}
          </Grid>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex pt={"50px"} flexDir={"column"} gap={5} align={"center"}>
      <Heading as="h1" maxW={"1390px"} textAlign={"center"} lineHeight={1}>
        Sembramos con amor y cuidado para compartir bienestar en cada producto
      </Heading>

      <Box p={4} w="80%">
        <Grid
          templateColumns="repeat(3, 1fr)"
          autoRows="minmax(267px, auto)"
          gap={4}
        >
          <video
            src="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/gallina_1.mp4"
            controls
            poster="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/miniatura.png"
            style={{
              gridRow: "span 2",
              borderRadius: "16px",
              width: "400px",
              height: "716px",
            }}
          />
          <Img
            gridColumn="span 2"
            borderRadius={"16px"}
            maxW={"100%"}
            objectFit={"contain"}
            src="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/IMG-20250306-WA0076.jpg"
          />
          <Img
            borderRadius={"16px"}
            maxH={"300px"}
            gridColumn="2"
            gridRow="2 / span 2"
            objectFit={"contain"}
            src="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/IMG-20250306-WA0085.jpg"
          />
          <Img
            borderRadius={"16px"}
            maxH={"300px"}
            gridColumn="3"
            gridRow="2 / span 2"
            objectFit={"contain"}
            src="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/IMG-20250306-WA0093.jpg"
          />
          <Img
            gridColumn="1 / span 2"
            gridRow="3 / span 2"
            borderRadius={"16px"}
            maxH={"400px"}
            objectFit={"contain"}
            src="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/dji_export_1716928804681.jpg"
          />
          <video
            controls
            src="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/Paradise_Found-Ser8m_1.mp4"
            poster="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/miniatura.png"
            style={{
              gridRow: "3 / span 2",
              gridColumn: "3",
              borderRadius: "16px",
              width: "400px",
            }}
          />
          <Img
            gridColumn="1"
            gridRow="4"
            borderRadius={"16px"}
            maxH={"300px"}
            objectFit={"contain"}
            src="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/IMG-20250306-WA0094.jpg"
          />
          <Img
            gridColumn="2"
            gridRow="4"
            borderRadius={"16px"}
            maxH={"300px"}
            objectFit={"contain"}
            src="https://s3.us-east-2.amazonaws.com/casa-de-los-suenos.comer-bonito/ni%C3%B1a.jpg"
          />
        </Grid>
      </Box>
    </Flex>
  );
};

export default Gallery;
