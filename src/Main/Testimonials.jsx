import React from 'react';
import {
  Container,
  Stack,
  VStack,
  Heading,
} from '@chakra-ui/react'

import TestimonialCard from './TestimonialCard';


export default function Testimonials(props) {

  return (
    <Container maxW={'7xl'}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <VStack
          maxW={'53rem'}
          flex={1}
          justify={'space-between'}
          align={'center'}
          spacing={{ base: 8, md: 16 }}
        >
          <Heading as='h3' size='lg'>Testimonials</Heading>
          <Stack
            w={'100%'}
            justify={'space-between'}
            align={'center'}
            // spacing={{ base: 4, md: 8 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Stack>
        </VStack>
      </Stack>
    </Container>
  )
}
