import {
  Alert,
  AlertIcon,
  Box,
  CircularProgress,
  Divider,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacter } from "../../Redux/Action";
import { Characterr } from "../../components/Character";
import Pagination from "../../components/Pagination";

const Characters = ({ page, limit, handlePage, handleLimit }) => {
  const dispatch = useDispatch();

  const { Loading, Error, Character } = useSelector(
    (state) => state.Characters
  );

  // const handlePage = (value) => {
  //   setPage(page + value);
  // };
  // const handleLimit = (value) => {
  //   setLimit(Number(value));
  // };
  console.log(Character);
  useEffect(() => {
    dispatch(
      fetchCharacter(
        `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${limit}`
      )
    );
  }, [page, limit]);

  if (Loading) {
    return (
      <Flex alignItems={"center"} justifyContent={"center"} height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
        />
      </Flex>
    );
  } else if (Error) {
    return (
      <Stack spacing={3}>
        <Alert status="error" variant="solid">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      </Stack>
    );
  }
  return (
    <Flex direction={"column"} minWidth="max-content" zIndex={9}>
      <Box m={5}>
        <Heading>All Characters</Heading>
        <Divider></Divider>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" rowGap={7} columnGap={5}>
        {Character.map((character) => (
          <Characterr character={character} key={character.url} />
        ))}
      </Grid>
      <Box alignContent={"center"} mt={5}>
        <Pagination
          page={page}
          handlePage={handlePage}
          limit={limit}
          handleLimit={handleLimit}
        />
      </Box>
    </Flex>
  );
};

export default Characters;
