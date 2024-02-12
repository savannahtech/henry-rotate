"use client"
import {useAppContext} from "@/context/AppContext";
import {Flex, Spinner} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {
  const {appData, setAppData} = useAppContext();
  const {push} = useRouter();

  const userData = JSON.parse(appData?.user)

  useEffect(() => {
    if (userData) {
      push("/dashboard");
    } else {
      window.location.href = `https://api.stg.withrotate.com/api/auth/oauth_authorize?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}`
       }
  }, []);

  return (
    <Flex w="full" h="calc(100vh)" justifyContent="center" alignItems="center">
      Please Wait ...
    </Flex>
  );
}
