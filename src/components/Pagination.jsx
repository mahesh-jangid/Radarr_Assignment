import React from "react";
import { Button, ButtonGroup, Select, Stack } from "@chakra-ui/react";

const Pagination = ({ page, handlePage, handleLimit }) => {
  return (
    <ButtonGroup color={"black"}>
      <Button disabled={page < 1} onClick={() => handlePage(-page)}>
        First
      </Button>
      <Button disabled={page < 1} onClick={() => handlePage(-1)}>
        Previos
      </Button>
      <Select onChange={(e) => handleLimit(e.target.value)} bg="tomato">
        <option value="3">Choose Limit</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="10">10</option>
      </Select>
      <Button onClick={() => handlePage(+1)}>Next</Button>
    </ButtonGroup>
  );
};

export default Pagination;
