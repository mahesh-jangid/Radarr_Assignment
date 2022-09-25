import { Box, Container } from "@chakra-ui/react";
import React from "react";

export const Home = () => {
  return (
    <>
      <Container maxW="2xl" bg="gray.600" centerContent mt={8}>
        This is a landing page of our application.So after seeing the API
        documentation I found that we can use this API data with multiple ways
        according to the usecase. So what I did in this project is that if we
        want to see the all books data and all characters data then we can see
        that in navbar we have 2 links, one for books(/books route) and second
        for Characters(/characters route). So when we click on to books we will
        redirected to /books page and here we can see all the books data. I also
        added Pagination where we have 3 buttton(first which will load the first
        page data then we have Previos and next button) and here we can also set
        custom limit.And same with the characters page. In this Project I used
        Redux to manage the state of our application and Redux-thunk Middleware
        for async action while hiting the API. I tried my best to make clean,
        reusable and easy to understandable code.
      </Container>
    </>
  );
};
