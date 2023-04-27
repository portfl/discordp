import { Avatar, Box, Divider, Text } from "@chakra-ui/react";
import discordIcon from "../icons8-discord-new.svg";
import React from "react";
import { FaHashtag, FaUserFriends } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsPlusCircleFill } from "react-icons/bs";
import {AiOutlineSearch, AiOutlineBorderlessTable} from "react-icons/ai";
export const Home = () => {
  return (
    <div>
      <div class="flex h-screen overflow-hidden">
        <div class="bg w-20 bg-cinza-discord flex flex-col overflow-auto">
          <Box>
            <Avatar
              src={discordIcon}
              backgroundColor={"#313338"}
              marginLeft={2}
            />
          </Box>
          <Divider marginTop={2} />
          <Avatar marginTop={4} marginLeft={2} />
          <BsPlusCircleFill className="mt-4 ml-2 text-5xl text-green-700 cursor-pointer" />
        </div>
        <div class="bg-comunidade-color w-64 flex flex-col">
          <div className="h-[7%] flex text-center items-center border-b-2 border-black">
            <span className="ml-2 font-sans text-font-color">Comunidade</span>
          </div>
          <div className="h-[90%]">
            <div className="flex flex-col ml-3 mt-5">
              <span className="text-xl text-channelColor">Categoria</span>
              <div className="flex-col flex mt-1">
                  <div className="flex cursor-pointer  hover:bg-hovercolor rounded">
                  <AiOutlineBorderlessTable className="mt-1 text-gray-400 text-2xl"/>
                    <span className="ml-1 mt-1 text-channelColor">Canal</span>
                  </div>
                  <div className="flex mt-2 cursor-pointer hover:bg-hovercolor rounded">
                  <AiOutlineBorderlessTable className="mt-1 text-gray-400 text-2xl"/>
                    <span className="ml-1 mt-1 text-channelColor">Canal</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="bg-infoUserColor p-4 mt-auto position-absolute bottom-0 w-full flex">
            <Avatar size={"sm"} className="mr-2 mt-1" />
            <div className="flex flex-col">
              <Text color={"#f2f3f5"} className="text-sm">
                Name
              </Text>
              <span className="text-[#b5bac1] text-sm">#1111</span>
            </div>
          </div>
        </div>
        <div class="bg-area-chat-color flex-1 overflow-hidden">
          <div className="w-50 border-b border-gray-500 h-16">
            <div className="flex justify-between">
              <div className="flex">
                <FaHashtag className="mt-4 text-3xl text-slate-300" />
                <span className="mt-5 ml-1 font-sans text-white">
                  Nome Canal
                </span>
              </div>
              <div className="flex space-x-6 relative">
                <FaUserFriends className="text-5xl mt-1 cursor-pointer" />
                <input
                  className=" h-7 mt-4 rounded  text-textSearchCOlor bg-searchInput placeholder:text-placeholderColor placeholder: pl-2 outline-none focus: caret-slate-100 p-2"
                  placeholder="Buscar"
                />
                <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400 mt-1"/>
              </div>
            </div>
          </div>
          <div className=" h-[87%] overflow-auto">
            <Text>a</Text>
          </div>
          <div className=" h-20">
            <div className="flex justify-center">
              <input
                class="rounded mt-3 w-[80%] bg-inputText h-9 outline-none focus: caret-slate-100 placeholder: pl-4 text-white"
                placeholder="Conversar em Canal"
              />
              <BsPlusCircleFill className="absolute mt-5 ml-[54%] cursor-pointer text-2xl text-white"/>
            </div>
          </div>
        </div>
        <div class="bg-comunidade-color w-60 overflow-hidden">
            <div className="mt-5 flex flex-col ml-3">
                <span className="text-colorCargo">Nome Cargo</span>
                <div className="flex">
                    <Avatar className="mt-3" size={'sm'} src="https://mars-images.imgix.net/nft/1625487699456.gif?auto=compress&w=700&h=700&fm=webp"/>
                    <span className="mt-3 ml-2 text-colorCargo">Nome Usuario</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
