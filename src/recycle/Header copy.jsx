import React, { useEffect, useRef } from "react";
import {
  Box,
  Image,
  HStack,
  Link,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";

import { Logo } from '../assets';


export default function Header(props) {
  const headerRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <Container
      as='header'
      aria-label='header'
      maxW={'7xl'}
      // position='fixed'
      // top={0}
      // left={0}
      // right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      // backgroundColor={'white'}
      backgroundColor='transparent'
      // ref={ headerRef }
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        color={'black'}
      >
        <Stack
          maxW={'53rem'}
          flex={1}
          justify={'space-between'}
          align={'center'}
          spacing={{ base: 8, md: 24 }}
          py={4}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Image
              src={ Logo }
              alt='restaurant logo'
            />
          </Box>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 4, md: 8 }}
            fontSize={'md'}
            fontWeight={'bold'}
            as={'nav'}
            aria-label={'header'}
          >
            <Link to='/'>Home</Link>
            <Link
              href='/#about'
              onClick={ handleClick('about') }
            >
              About
            </Link>
            <Link
              href='/#menu'
              onClick={ handleClick('menu') }
            >
              Menu
            </Link>
            <Link
              href='/#reservations'
              onClick={ handleClick('reservations') }
            >
              Reservations
            </Link>
            <Link
              href='/#order-online'
              onClick={ handleClick('order-online') }
            >
              Order Online
            </Link>
            <Link
              href='confirmation'
            >
              Login
            </Link>
            {/* <Link
              href='/#login'
              onClick={ handleClick('login') }
            >
              Login
            </Link> */}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
