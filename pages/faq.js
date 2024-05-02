import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
  } from '@chakra-ui/react'
import Header from '@/shared/components/Header'
function Faq() {
  return (
    <> 
    <Head>
      <title>Home</title>
    </Head>
        <Header/> 
    <Text className=' text-center p-4 text-5xl' as="h1">FAQ</Text>
    <Accordion p="60px">
<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as='span' flex='1' textAlign='left'>
        Section 1 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as='span' flex='1' textAlign='left'>
        Section 2 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as='span' flex='1' textAlign='left'>
        Section 3 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as='span' flex='1' textAlign='left'>
        Section 4 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as='span' flex='1' textAlign='left'>
        Section 5 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as='span' flex='1' textAlign='left'>
        Section 6 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as='span' flex='1' textAlign='left'>
        Section 7 title
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </AccordionPanel>
</AccordionItem>
</Accordion>
</>
  )
}

export default Faq