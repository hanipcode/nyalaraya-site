import { Box, Flex } from "@chakra-ui/react";

function Worange({ children }) {
  return (
    <Flex position="relative" alignItems="center">
      <Box
        backgroundColor="brand.orange"
        rounded="100%"
        h={10}
        w={10}
        position="absolute"
        zIndex="21"
      />
      <Box zIndex="22" position="relative" ml={3}>
        {children}
      </Box>
    </Flex>
  );
}

export default Worange;
