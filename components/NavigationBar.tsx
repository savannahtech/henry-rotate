"use client";
import React from "react";
import {Flex} from "@chakra-ui/react";
import Logo from "./Logo";
import AvatarProfile from "./AvatarProfile";

type Props = {};

const NavigationBar = ({children, ...props}: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} py={5} bg={["primary.500", "primary.500", "transparent", "transparent"]} color={["white", "white", "primary.700", "primary.700"]} {...props}>
        <Logo />
        <AvatarProfile />
      </Flex>
    </div>
  );
};

export default NavigationBar;
