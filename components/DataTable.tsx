"use client";
import React from "react";
import {Table, Box,Flex, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Button, Text} from "@chakra-ui/react";
import {EndpointInfo} from "@/types";

type Props = {
  endpointList: EndpointInfo[]
};

const DataTable = ({endpointList}: Props) => {

  return (
    <>
      <Box backgroundColor={"white"} paddingY={5} paddingX={3} mt={5}>
        <TableContainer>
          <Table variant="simple" fontSize='xs'>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Endpoint</Th>
                <Th>Service</Th>
                <Th>Queue</Th>
                <Th>Security</Th>
                <Th>Http Commands</Th>
              </Tr>
            </Thead>
            <Tbody>
              {endpointList.slice(0,10).map((endpoint: EndpointInfo, idx:number) => (
                <Tr key={idx}>
                  <Td>{endpoint.name}</Td>
                  <Td>{endpoint.endpoint}</Td>
                  <Td>{endpoint.service_name}</Td>
                  <Td>{endpoint.rpc_queue}</Td>
                  <Td>bearerAuth</Td>
                  <Td>
                    <Button colorScheme="purple" variant="outline" fontSize='xs'>
                      {endpoint.http_command}
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Flex mx={6} mt={10} justify="space-between" w="95%">
            <Text fontSize="xs" textColor={"gray"}>{endpointList?.length} records</Text>
            <Text fontSize="xs">[Pagination here]</Text>

        </Flex>
      </Box>
    </>
  );
};

export default DataTable;
