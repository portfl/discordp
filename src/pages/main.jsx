import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import discordIcon from "../discordLogo1.svg";
export const Main = () => {
  return (
    <div>
      <Flex
        backgroundColor={"#404eed"}
        minHeight={"500"}
        justifyContent={"center"}
      >
        <Box
          marginTop={5}
          backgroundColor="#404eed"
          display="flex"
          className="font-sans"
          as="nav"
        >
          <Box
            marginRight={200}
            display="flex"
            alignItems={"flex-start"}
            marginTop={-2}
          >
            <Image src={discordIcon} />
            <Text as="a" href="@" color={"#ffffff"} marginTop={3}>
              Discord
            </Text>
          </Box>
          <Box>
            <Text
              as="a"
              href="@"
              marginRight={16}
              fontWeight="medium"
              color={"#ffffff"}
              fontSize={"medium"}
            >
              Download
            </Text>
            <Text
              as="a"
              href="@"
              marginRight={16}
              color={"#ffffff"}
              fontSize={"medium"}
            >
              Nitro
            </Text>
            <Text
              as="a"
              href="@"
              marginRight={16}
              color={"#ffffff"}
              fontSize={"medium"}
            >
              Discover
            </Text>
            <Text
              as="a"
              href="@"
              marginRight={16}
              color={"#ffffff"}
              fontSize={"medium"}
            >
              Safety
            </Text>
            <Text
              as="a"
              href="@"
              marginRight={16}
              color={"#ffffff"}
              fontSize={"medium"}
            >
              Support
            </Text>
            <Text
              as="a"
              href="@"
              marginRight={16}
              color={"#ffffff"}
              fontSize={"medium"}
            >
              Blog
            </Text>
            <Text
              as="a"
              href="@"
              marginRight={16}
              color={"#ffffff"}
              fontSize={"medium"}
            >
              Careers
            </Text>
            <Button
              backgroundColor="#ffffff"
              borderRadius="3xl"
              color="#23272a"
              fontSize="16px"
              fontWeight="medium"
              size="md"
              marginLeft={70}
            >
              Open Discord
            </Button>
          </Box>
        </Box>
        <Box
          position={"absolute"} 
          color={"#ffffff"}
          fontSize={"xl"}
          fontWeight={"bold"}
          top={"50%"} 
          left={"50%"} 
          transform={"translate(-50%, -50%)"} 
        >
          <VStack>
            <Text fontSize={'5xl'}>IMAGINE UM</Text>
            <Text fontSize={'5xl'}>LUGAR...</Text>
            <Text className="font-sans">…onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade artística mundial. Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.</Text>
          </VStack>
          <Box display={'flex'} marginTop={30} marginLeft={40}>
              <Button height={'44px'} width={300} borderRadius={20} marginRight={20} backgroundColor={'#ffffff'} color={'#23272a'}>Baixar Para Windows</Button>
              <Button height={'44px'} width={300} borderRadius={20}  backgroundColor={'#23272a'} fontSize={'16px'}>Abra o Discord no seu navegador</Button>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};
