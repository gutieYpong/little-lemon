import React from 'react'
import { Stack, HStack, Image, Heading, Text, Button, Card, CardBody, CardFooter } from '@chakra-ui/react';

import { DeliveryIcon } from '../assets'


export default function HighlightCard(props) {

  return (
    <Card
      maxW='18.25rem'
      borderRadius={'xl'}
    >
      <CardBody
        p={0}
      >
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='xl'
        />
        <Stack mt='6' spacing='3' px={6}>
          <HStack
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Heading size='md'>Living room Sofa</Heading>
            <Text color='blue.600' fontSize='md'>
              $ 12.34
            </Text>
          </HStack>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter justifyContent={'flex-end'}>
        <Button variant='ghost' colorScheme='blue'
        >
          <Text as='span'>Add to cart&nbsp;</Text>
          <DeliveryIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}
