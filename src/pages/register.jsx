import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

export const Register = () => {
  return (
    <Flex
      backgroundColor={"#404eed"}
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        backgroundColor={"#313338"}
        width={"500px"}
        height={"600px"}
        className="rounded"
      >
        <Box>
          <form>
            <Box marginLeft={'28%'} fontSize={"30px"} color={'#f2f3f5'} marginTop={10}>
              <Text>Criar uma conta</Text>
            </Box>
            <Box marginLeft={5} marginTop={8}>
              <Text className="font-sans" color={"#b5bac1"} fontSize={"smaller"} marginBottom={2}  >
                E-MAIL
              </Text>
              <input className=" w-[89%] h-10 rounded bg-[#1e1f22] outline-none mb-5 focus: caret-slate-100 p-2" />
              <Text className="font-sans" color={"#b5bac1"} marginBottom={2} fontSize={"smaller"}>
                NOME DO USUÁRIO
              </Text>
              <input className=" w-[89%] h-10 rounded bg-[#1e1f22] outline-none mb-5 p-2 focus: caret-slate-100" />
              <Text className="font-sans" color={"#b5bac1"} marginBottom={2} fontSize={"smaller"}>SENHA</Text>
              <input className=" w-[89%] h-10 rounded bg-[#1e1f22] outline-none focus: caret-slate-100 p-2" />
              <Box display="flex" justifyContent="center" marginTop={20} flexDirection={'column'}>
                <Button borderRadius={'md'} backgroundColor={'#5865f2'} color={'#f2f3f5'} className="w-[89%]" textAlign={'center'}>
                  Continuar
                </Button>
                <Text as={'a'} href="@" marginTop={3} color={'#00a8fc'}>Já tem uma conta?</Text>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};
