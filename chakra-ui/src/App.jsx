import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import bgImage from "/resources/images/banner.jpg";

function App() {
  return (
    <Box
      h="40vh"
      bg="gray"
      alignItems="center"
      bgImage={`url(${bgImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="100%"
        bg="rgb(0 0 0 / 50%)"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading variant="banner">Domina El Terreno</Heading>
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing="40px"
          mt="30px"
          w={["100%", null, "auto"]}
        >
          <Button variant="outline" size="lg" color="white">
            ver detalles
          </Button>
          <Button variant="outline" size="lg" color="white">
            ver video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
