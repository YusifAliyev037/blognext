import { Badge, Box, Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ROUTER } from "../constant/router";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { selFavorites } from "@/redux/global/globalSlice";
import { useRouter } from "next/router";

function Header() {
  const {push,asPath, query} = useRouter()

  const color = query?.color ?? "success"

  const favorites = useSelector(selFavorites);

  const queryClient = useQueryClient();

  const articles = queryClient.getQueryData(["blogs"])?.data;

  console.log("articles", articles);




  const isActive = (p) => (asPath == p ? "orange" : "white");

  const favCount = favorites?.length;

  return (
    <Box
      height="100px"
      p="12px"
      px={50}
      as="header"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      backgroundColor="teal"
    >
      <Text as="h1" fontSize="4xl" color="white" fontWeight={600}>
        Devil
      </Text>

      <Stack direction="row" spacing={4} align="center" as="ul">
        <Button
          variant="ghost"
          cursor="pointer"
          color={isActive(ROUTER.HOME)}
          as="li"
          onClick={() => push(ROUTER.HOME)}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          color={isActive(ROUTER.ARTICLES)}
          as="li"
          onClick={() => push(ROUTER.ARTICLES)}
        >
          Articles
          {!!articles?.length && (
            <Badge variant="solid" colorScheme="red">
              {articles?.length}
            </Badge>
          )}
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          as="li"
          color={isActive("/about")}
          onClick={() => push("/about")}
        >
          About
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          as="li"
          color={isActive("/favorites")}
          onClick={() => push("/favorites")}
        >
          Favorites
          {!!favCount && (
            <Badge variant="solid" colorScheme="red">
              {favCount}
            </Badge>
          )}
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          color={isActive(ROUTER.FAQ)}
          as="li"
          onClick={() => push(ROUTER.FAQ)}
        >
          FAQ
        </Button>
      </Stack>

      <ButtonGroup>
        <Button onClick={() => push("/articles/create")} as="button">
          Create
        </Button>
        <Button colorScheme={color} onClick={() => push("/setting")} as="button">
          Setting
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Header;