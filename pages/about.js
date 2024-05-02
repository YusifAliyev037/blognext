import Header from '@/shared/components/Header'
import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

function About() {
  return (
    <>
     <Head>
      <title>About</title>
    </Head>
    <Header />
        <Box 
        p={20}
        display="flex"
        flexDirection="column"
        gap={4}
        >

        <Text fontSize={60} textAlign="center">
          About
        </Text>
        <Text 
        textAlign="center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magnam tempore tempora ea eaque debitis. Cum earum non veniam iure, vel, veritatis maiores odit soluta dignissimos nesciunt architecto, distinctio totam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magnam tempore tempora ea eaque debitis. Cum earum non veniam iure, vel, veritatis maiores odit soluta dignissimos nesciunt architecto, distinctio totam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magnam tempore tempora ea eaque debitis. Cum earum non veniam iure, vel, veritatis maiores odit soluta dignissimos nesciunt architecto, distinctio totam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magnam tempore tempora ea eaque debitis. Cum earum non veniam iure, vel, veritatis maiores odit soluta dignissimos nesciunt architecto, distinctio totam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magnam tempore tempora ea eaque debitis. Cum earum non veniam iure, vel, veritatis maiores odit soluta dignissimos nesciunt architecto, distinctio totam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magnam tempore tempora ea eaque debitis. Cum earum non veniam iure, vel, veritatis maiores odit soluta dignissimos nesciunt architecto, distinctio totam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magnam tempore tempora ea eaque debitis. Cum earum non veniam iure, vel, veritatis maiores odit soluta dignissimos nesciunt architecto, distinctio totam.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ab porro distinctio minima obcaecati assumenda modi sapiente illum eos impedit culpa quaerat possimus sunt totam, atque nemo, corporis, adipisci aut!
        </Text>
        </Box>
    </>
  )
}

export default About