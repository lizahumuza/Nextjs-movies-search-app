import React from "react";
import { Box, Heading } from "@chakra-ui/react"
import Search from "../components/Search"

export default function Home() {
    return (
      <Box margin="0 auto" maxW="1000px" padding="40px">
      <div>
      <Heading as="h1" fontSize="3xl" color="aqua" textAlign="center">
        Movie Search App
      </Heading>
      <Search />
      </div>
      </Box>
    )
  }