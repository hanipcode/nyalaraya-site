import {
  Flex,
  Image,
  Center,
  Text,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Worange from "../components/Worange";
import styles from "./home.module.css";

const serviceItem = [
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
];

function Home() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top={4}
        left={24}
        right={24}
        background="transparent"
        boxSizing="border-box"
        zIndex={20}
      >
        <Image src="/assets/logo_text.png" h={24} fit="contain" />
        <Box flexGrow="1" ml={12}>
          <Flex
            width="fit-content"
            rounded={100}
            height={8}
            alignItems="center"
            pl={4}
            pr={4}
            fontSize="sm"
            color="white"
            background="brand.orange"
            className={styles.menuContainer}
          >
            <Flex alignItems="center" h={10}>
              {[0, 1, 2, 3].map(() => (
                <Box
                  width={3}
                  className={styles.circle}
                  height={3}
                  rounded="100%"
                  backgroundColor="#4b4b4b"
                  mr={3}
                />
              ))}
              <Flex ml={6} alignItems="center" flexWrap="nowrap">
                <Text>Home</Text>
                <Box className={styles.shrinkedMenu}>
                  <Flex width="340px">
                    {["Who We Are", "Service", "Our Craft", "Friend"].map(
                      (text) => (
                        <Text display="inline-block" ml={4}>
                          {text}
                        </Text>
                      )
                    )}
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Worange>
          <Text color="#FFF" fontWeight="bold" fontSize="xl">
            Contact
          </Text>
        </Worange>
      </Flex>
      <Flex
        p={4}
        px={12}
        direction="column"
        h="100vh"
        position="relative"
        style={{
          background: `linear-gradient(117deg, #2E2E2E, #515151)`,
        }}
      >
        <Center
          position="absolute"
          pointerEvents="none"
          top={0}
          left={0}
          right={0}
          bottom={0}
          flexGrow={1}
        >
          <Image
            src="/assets/logo.png"
            h={{ base: "30vw", md: "20vw" }}
            fit="contain"
          />
        </Center>
        <Flex direction="column" position="absolute" bottom={20}>
          <Image ml={16} mb={10} h={5} src="/assets/twitter.svg" />
          <Image ml={16} mb={10} h={5} src="/assets/facebook.svg" />
          <Image ml={16} mb={10} h={5} src="/assets/instagram.svg" />
          <Image ml={16} mb={10} h={5} src="/assets/email.svg" />
        </Flex>
      </Flex>
      <Flex p={4} px={40} direction="column" h="100vh" justifyContent="center">
        <Flex alignItems="center">
          <Box width="50vw">
            <Text fontSize="100px" fontWeight="bold" color="brand.orange">
              We Are Superman
            </Text>
          </Box>
          <Box ml={36}>
            <Text fontWeight={400} color="#4b4b4b" textAlign="right">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        background="brand.orange"
        p={4}
        px={40}
        direction="row"
        h="100vh"
        alignItems="center"
      >
        <Box width="50vw" textAlign="center">
          <Text fontSize="100px" color="white" fontWeight="bold">
            "Apa lu mau, gua ada"
          </Text>
          <Text fontSize="24px" mt={4} fontWeight="bold">
            *asal yang kami bisa*
          </Text>
        </Box>
        <Box width="50vw">
          <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)">
            {serviceItem.map((cont) => (
              <GridItem
                h="fit-content"
                background="white"
                margin={2}
                p={6}
                boxShadow="0 0 3px 1px #4b4b4b33"
                borderRadius={4}
                textAlign="center"
              >
                <Image
                  src="/assets/logo_text.png"
                  height={24}
                  objectFit="contain"
                  margin="0 auto"
                />
                <Text fontWeight="bold" color="brand.orange">
                  {cont.title}
                </Text>
                <Text fontSize="xs" color="#7a7a7a" mt={2} fontWeight={400}>
                  {cont.content}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default Home;
