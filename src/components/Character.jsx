import React from "react";
import {
  Box,
  Divider,
  Flex,
  ListItem,
  OrderedList,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
export const Characterr = ({ character }) => {
  return (
    <>
      <Box bg="red.600" w="100%" p={6} m={4} color="white">
        <Stack data-cy="product">
          <Text>{character.name ? character.name : null}</Text>
          <Spacer />
          <Divider />
          <Box>
            {character.aliases.length > 1 ? (
              <OrderedList fontSize={10}>
                {character.aliases.map((aliase) => {
                  return <ListItem>{aliase}</ListItem>;
                })}
              </OrderedList>
            ) : (
              character.aliases[0]
            )}
          </Box>
          <Spacer />
          <Divider />
          <Flex justify={"space-between"} px={4} fontSize={10}>
            <Text>{character.culture ? character.culture : null}</Text>
            <Tag bg={"green.400"} fontSize={10}>
              <TagLabel>{character.gender}</TagLabel>
            </Tag>
          </Flex>
          {character.playedBy.length > 1 ? (
            <OrderedList fontSize={10}>
              {character.playedBy.map((data) => {
                return <ListItem>{data}</ListItem>;
              })}
            </OrderedList>
          ) : (
            character.playedBy[0]
          )}
        </Stack>
      </Box>
    </>
  );
};
