import React from "react";
import {Box, Text} from "@chakra-ui/react";

export default function Logo(props: any) {
  return (
    <Box {...props}>
        <img alt="logo" src="/rotate_logo.png"/>
    </Box>
  );
}
