"use client"
import DataTable from "@/components/DataTable";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import {Text, Box, Flex, Input} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import listEndpoints from "../../data/list_endpoints.json";
import {Endpoint} from "next/dist/build/swc";
import {EndpointInfo} from "@/types";

export default function Home() {
  const [inputText, setInputText] = React.useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var lowerCase = e.target.value.toLowerCase() ?? "";
    setInputText(lowerCase);
  };

  const filteredData = listEndpoints.filter((el: EndpointInfo) => {
    if (inputText === "") {
      return el;
    } else {
      return el.endpoint.toLowerCase().includes(inputText.toLowerCase()) || el.http_command.toLowerCase().startsWith(inputText.toLowerCase()) || el.name.toLowerCase().startsWith(inputText.toLowerCase()) || el.rest_action.toLowerCase().startsWith(inputText.toLowerCase()) || el.rpc_queue.toLowerCase().startsWith(inputText.toLowerCase()) || el.service_name.toLowerCase().startsWith(inputText.toLowerCase());
    }
  });

  return (
    <main>
      <Box backgroundColor={"#fafafa"} paddingX={5}>
        <NavigationBar />

        <Box paddingX={3}>
          <Text fontSize="4xl" as="b">
            Endpoints
          </Text>

          <Flex as="div" border="1px" borderColor="#4763E4" mt={4} p={1} borderRadius={13}>
            <Box m={2} ml={4}>
              <AiOutlineSearch size={30} />
            </Box>
            <input onChange={inputHandler} placeholder={"Type to search endpoint.."} style={{outline: "none", width: "100%"}} />
          </Flex>
          <DataTable endpointList={filteredData} />
        </Box>
      </Box>
    </main>
  );
}
