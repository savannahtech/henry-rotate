import React from "react";
import {Avatar, Box, Flex, Stack, Text} from "@chakra-ui/react";
import { useAppContext } from "@/context/AppContext";
type Props = {};

const AvatarProfile = (props: Props) => {
  const {appData, setAppData} = useAppContext();
  const userData = JSON.parse(appData?.user)

  return (
    <Flex as="div" justify="space-between" alignItems={"center"} gap={2}>
      <Box>
          <Text color={"black"} fontSize='md' as="b">{userData?.name}</Text>
          <Text color={"black"} fontSize='sm'>{userData?.email}</Text>
      </Box>
      <Avatar bg="teal.500" src={userData?.picture} width={12} height={12} />
    </Flex>
  );
};

export default AvatarProfile;
