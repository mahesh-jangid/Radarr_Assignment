import React from "react";
import {
  Box,
  Divider,
  Flex,
  Spacer,
  Stack,
  StackDivider,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
export const Book = ({ book }) => {
  return (
    <>
      <Box bg="red.600" w="100%" p={4} color="white">
        <Stack>
          <Box> {book.name}</Box>
          <Spacer />

          <Divider />
          <Flex justify={"space-between"} px={2} fontSize={10}>
            <Text>Author: {book.authors}</Text>
            <Tag bg={"green.400"} fontSize={12}>
              <TagLabel>{book.mediaType}</TagLabel>
            </Tag>
          </Flex>
          <Divider />
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
            fontSize={16}
          >
            <Box h="40px" bg="tomato">
              Total-Pages: {book.numberOfPages}
            </Box>
            <Box h="40px" bg="tomato">
              Country: {book.country}
            </Box>
            <Box h="40px" bg="tomato">
              publisher: {book.publisher}
            </Box>
            <Box h="40px" bg="tomato">
              Released Date: {book.released.split("T")[0]}
            </Box>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};
