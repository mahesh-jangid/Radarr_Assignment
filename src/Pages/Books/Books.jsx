import {
  Alert,
  AlertIcon,
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Book } from "../../components/Book";
import Pagination from "../../components/Pagination";
import { fetchBooks } from "../../Redux/Action";

const Books = ({ page, limit, handlePage, handleLimit }) => {
  const dispatch = useDispatch();
  const { Loading, Error, Books } = useSelector((state) => state.Books);
  console.log(Books);
  useEffect(() => {
    dispatch(
      fetchBooks(
        `https://www.anapioficeandfire.com/api/books?page=${page}&pageSize=${limit}`
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
    <Flex direction={"column"} minWidth="max-content">
      <Box m={5}>
        <Heading>All Books</Heading>
        <Divider />
      </Box>

      <Grid
        templateColumns="repeat(3,minmax(290px,1fr))"
        rowGap={5}
        columnGap={3}
      >
        {Books.map((book) => (
          <Book book={book} key={book.url} />
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

export default Books;
