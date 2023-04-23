import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Main = () => {
  return (
    <div>
      <Flex backgroundColor={"#404eed"} height={500}>
        <Box
          display="flex"
          alignItems="center"
          textAlign="center"
          marginLeft="auto"
          marginRight="auto"
          className="font-sans"
        >
          <Text as="a" href="@" marginRight={16} color={'#ffffff'}>
            Discord
          </Text>
          <Text as="a" href="@" marginRight={16} fontWeight='medium' color={'#ffffff'} fontSize='md'>
            Download
          </Text>
          <Text as="a" href="@" marginRight={16} color={'#ffffff'}>
            Nitro
          </Text>
          <Text as="a" href="@" marginRight={16} color={'#ffffff'}>
            Discover
          </Text>
          <Text as="a" href="@" marginRight={16} color={'#ffffff'}>
            Safety
          </Text>
          <Text as="a" href="@" marginRight={16} color={'#ffffff'}>
            Support
          </Text>
          <Text as="a" href="@" marginRight={16} color={'#ffffff'}>
            Blog
          </Text>
          <Text as="a" href="@" marginRight={16} color={'#ffffff'}>
            Careers
          </Text>
          <Button
            backgroundColor="#ffffff"
            borderRadius="3xl"
            color="#23272a"
            fontSize="16px"
            fontWeight="medium"
          >
            Open Discord
          </Button>
        </Box>
      </Flex>
    </div>
  );
};
