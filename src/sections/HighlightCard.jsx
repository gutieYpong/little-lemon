import { Stack, HStack, Image, Heading, Text, Button, Card, CardBody, CardFooter } from '@chakra-ui/react';

import { DeliveryIcon } from '../assets'


export default function HighlightCard({ name, price, desc, img_src }) {

  return (
    <Card
      maxW='18.25rem'
      borderRadius={'xl'}
    >
      <CardBody
        p={0}
      >
        <Image
          src={ img_src }
          alt={ name }
          borderRadius='xl'
        />
        <Stack mt='6' spacing='3' px={6}>
          <HStack
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Heading size='md'>{ name }</Heading>
            <Text color='blue.600' fontSize='md'>
              $ { price }
            </Text>
          </HStack>
          <Text>{ desc }</Text>
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
