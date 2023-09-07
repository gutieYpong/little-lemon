import React from 'react'
import { Stack, HStack, Image, Heading, Text, Button, Card, CardBody, CardFooter } from '@chakra-ui/react';

import { DeliveryIcon } from '../assets'


export default function TestimonialCard(props) {

  return (
    <Card
      maxW='12.5rem'
      maxH='12.5rem'
      borderRadius={'xl'}
    >
      <Stack>
        <Text>Ratings</Text>
        <HStack>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='xl'
            objectFit={'cover'}
            boxSize={16}
          />
          <Text>Name</Text>
        </HStack>
        <Text>Review</Text>
      </Stack>
    </Card>
  )
}
