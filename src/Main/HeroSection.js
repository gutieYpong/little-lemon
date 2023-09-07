import React from 'react';
import {
  Flex,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Image,
  Button
} from '@chakra-ui/react';

import { HeroSectionLogo } from '../assets';


export default function HeroSection(props) {
  return (
    <Container
      maxW={'100%'}
      bgColor={'brand.green'}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        px={20}
      >
        <Stack
          maxW={'53rem'}
          flex={1}
          justify={'space-between'}
          align={'center'}
          spacing={{ base: 8, md: 24 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <VStack
            maxWidth={80}
            justify='space-between'
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Heading color={'brand.yellow'}>Little Lemon</Heading>
            <Text>Chigago</Text>
            <Text align={{ base: 'center', md: 'left' }}>
              Lorem ipsum dolor sit amet consectetur. Morbi non quis ligula nisi.
              Odio amet sed pulvinar semper massa.
            </Text>
            <Button
              colorScheme='yellow'
              mt={6}
            >
              Reserve a Table
            </Button>
          </VStack>
          <Flex>
            <Image
              boxSize={'3xs'}
              objectFit={'cover'}
              src={HeroSectionLogo}
              alt="restaurant logo"
            />
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
}
