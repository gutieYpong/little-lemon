import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

import { HeroSectionLogo } from './assets';


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
        >
          <Flex>
            <Image
              src={HeroSectionLogo}
              alt="restaurant logo"
              objectFit={'cover'}
              boxSize={'3xs'}
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
                <Text>Home</Text>
                <Text>About</Text>
                <Text>Menu</Text>
                <Text>Reservations</Text>
                <Text>Order Online</Text>
                <Text>Login</Text>
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
                <Text>Address</Text>
                <Text>Phone Number</Text>
                <Text>Email</Text>
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
                <Text>Github</Text>
                <Text>Twitter</Text>
                <Text>Instagram</Text>
                <Text>Facebook</Text>
                <Text>Linkedin</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
