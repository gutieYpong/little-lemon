import React from 'react'
import {
  Container,
  Stack,
  VStack,
  Heading,
  Button
} from '@chakra-ui/react';

import HighlightCard from './HighlightCard';


export default function Highlights(props) {

  return (
    <Container maxW={'7xl'}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        px={20}
      >
        <Stack
          maxW={'5xl'}
          justify={'space-between'}
          align={'center'}
          spacing={{ base: 8, md: 16 }}
          direction={'column'}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            w={'100%'}
            px={14}
            justify={{ base: 'center', md: 'space-between' }}
            align={'center'}
          >
            <Heading as='h3' size='lg'>This weeks specials!</Heading>
            <Button colorScheme='yellow'>Online Menu</Button>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify={'space-between'}
            align={'center'}
            spacing={10}
          >
            <HighlightCard />
            <HighlightCard />
            <HighlightCard />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
