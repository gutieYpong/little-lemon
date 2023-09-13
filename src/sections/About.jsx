import {
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Image,
  Grid,
  GridItem
} from '@chakra-ui/react';

import { HeroSectionLogo } from '../assets';


export default function About(props) {
  return (
    <Container maxW={'100%'} bgColor={'brand.green'}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
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
          </VStack>
          <Grid
            templateColumns={'repeat(12, 1fr)'}
            position={'relative'}
          >
            <GridItem
              gridColumn={'1 / span 9'}
              gridRow={1} // must be on the same row as the other image
              pt={'20%'} // this pushes the image down, and keeps it proportional as it resizes
              zIndex={1} // make this image render on top of the bottom
            >
              <Image
                src={HeroSectionLogo}
                alt='restaurant logo'
                objectFit={'cover'}
                boxSize={'3xs'}
              />
            </GridItem>
            <GridItem
              gridColumn={'4 / -1'}
              gridRow={1} // make this image be on the same row
            >
              <Image
                src={HeroSectionLogo}
                alt="restaurant logo"
                objectFit={'cover'}
                boxSize={'3xs'}
              />
            </GridItem>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}
