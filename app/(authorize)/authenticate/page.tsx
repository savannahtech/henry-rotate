"use client";
import {Flex, Spinner, Text} from "@chakra-ui/react";
import {useRouter, useSearchParams} from "next/navigation";
import {useCallback, useEffect} from "react";
import {useAppContext} from "@/context/AppContext";

const Authentication = () => {
  const {appData, setAppData} = useAppContext();
  const {push} = useRouter();

  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  const AuthenticateWithPasscode = useCallback(async () => {
    if (code) {
      try {
        const response = await fetch(`https://api.stg.withrotate.com/api/auth/oauth_token?code=${code}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });

        const jsonCredentials = await response.json();

        if (jsonCredentials) {
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${jsonCredentials.access_token}`,
              },
            });
            if (res.ok) {
              const user = await res.json();
              window.localStorage.setItem("user", JSON.stringify(user));
            }
          } catch (error) {
            setAppData(null);
            window.location.href = `https://api.stg.withrotate.com/api/auth/oauth_authorize?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}`;
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [code]);

  useEffect(() => {
    if (appData?.user?.name) {
      push("/dashboard");
    } else {
      AuthenticateWithPasscode();
    }
  }, [appData]);

  return (
    <Flex w="full" h="calc(100vh)" direction="column" justifyContent="center" alignItems="center">
      <Text>Please Wait while we authorize user</Text>
    </Flex>
  );
};

export default Authentication;
