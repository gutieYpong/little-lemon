import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Heading,
  Image,
  Link,
} from '@chakra-ui/react'

import { Chef } from '../assets';


export default function Footer(props) {

  return (
    <Container
      maxW={'7xl'}
      as={'footer'}
      aria-label={'header'}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
      >
        <Stack
          maxW={'53rem'}
          flex={1}
          justify={'space-between'}
          align={'center'}
          spacing={{ base: 8, md: 24 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
          borderTop={'1px solid gray'}
        >
          <Flex>
            <Image
              src={ Chef }
              alt="restaurant logo"
              objectFit={'cover'}
              boxSize={'2xs'}
              borderRadius={'xl'}
            />
          </Flex>
          <Stack
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
            flex={1}
            justify={'space-around'}
          >
            <Stack
              spacing={{ base: 6, md: 8 }}
              align={{ base: 'center', md: 'flex-start' }}
            >
              <Heading as='h5' size='md'>Navigation</Heading>
              <Stack
                align={{ base: 'center', md: 'flex-start' }}
              >
                <Link href={'#'}>Home</Link>
                <Link href={'#'}>About</Link>
                <Link href={'#'}>Menu</Link>
                <Link href={'#'}>Reservations</Link>
                <Link href={'#'}>Order Online</Link>
                <Link href={'#'}>Login</Link>
              </Stack>
            </Stack>
            <Stack
              spacing={{ base: 6, md: 8 }}
              align={{ base: 'center', md: 'flex-start' }}
            >
              <Heading as='h5' size='md'>Contact</Heading>
              <Stack
                align={{ base: 'center', md: 'flex-start' }}
              >
                <Link href={'#'}>Address</Link>
                <Link href={'#'}>Phone Number</Link>
                <Link href={'#'}>Email</Link>
              </Stack>
            </Stack>
            <Stack
              spacing={{ base: 6, md: 8 }}
              align={{ base: 'center', md: 'flex-start' }}
            >
              <Heading as='h5' size='md'>Social Media</Heading>
              <Stack
                align={{ base: 'center', md: 'flex-start' }}
              >
                <Link href={'#'}>Github</Link>
                <Link href={'#'}>Twitter</Link>
                <Link href={'#'}>Instagram</Link>
                <Link href={'#'}>Facebook</Link>
                <Link href={'#'}>Linkedin</Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
