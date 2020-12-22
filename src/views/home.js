import {
  Box,
  Grid,
  Flex,
  GridItem,
  Image,
  Button,
  Container,
  Center,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Worange from "../components/Worange";

function Home() {
  return (
    <Flex
      p={4}
      px={12}
      direction="column"
      h="100vh"
      style={{
        background: `linear-gradient(117deg, #2E2E2E, #515151)`,
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Image src="/assets/logo_text.png" h="100px" fit="contain" />
        <Worange>
          <Text color="#FFF" fontWeight="bold" fontSize="lg">
            Contact
          </Text>
        </Worange>
      </Flex>
      <Center
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        flexGrow={1}
      >
        <Image src="/assets/logo.png" h={80} fit="contain" />
      </Center>
      <Flex direction="column" position="absolute" bottom={20}>
        <Image ml={4} mb={10} h={5} src="/assets/twitter.svg" />
        <Image ml={4} mb={10} h={5} src="/assets/facebook.svg" />
        <Image ml={4} mb={10} h={5} src="/assets/instagram.svg" />
        <Image ml={4} mb={10} h={5} src="/assets/email.svg" />
      </Flex>
    </Flex>
  );
}

export default Home;
