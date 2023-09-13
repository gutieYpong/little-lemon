import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function ConfirmPage(props) {

  return (
    <>
      <Container
        aria-label='reservation-section'
        maxW={'7xl'}
        h={'80vh'}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify={'center'}
          align={'center'}
          color={'black'}
          h={'100%'}
        >
          <VStack
            maxW={'53rem'}
            flex={1}
            py={32}
          >
            <Card align='center' w='md' h='md'>
              <CardHeader>
                <Heading size='lg'>Your reservation details</Heading>
              </CardHeader>
              <CardBody align={'center'}>
                <Box>
                  <Heading size='md'>Date & Time</Heading>
                  <Text>2023-09-15 20:30</Text>
                </Box>
                <br/>
                <Box>
                  <Heading size='md'>Number of guests</Heading>
                  <Text>4</Text>
                </Box>
                <br/>
                <Box>
                  <Heading size='md'>Occasion</Heading>
                  <Text>Birthday</Text>
                </Box>
              </CardBody>
              <CardFooter>
                <NavLink to="/">
                  <Button colorScheme='blue'>Back to Home</Button>
                </NavLink>
              </CardFooter>
            </Card>
          </VStack>
        </Stack>
      </Container>
    </>
  )
}
