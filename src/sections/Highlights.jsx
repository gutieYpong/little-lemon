import {
  Container,
  Stack,
  Heading,
  Button
} from '@chakra-ui/react';

import HighlightCard from './HighlightCard';
import { Bruchetta, GreekSalad, LemonDessert } from '../assets';


export default function Highlights(props) {

  return (
    <Container maxW={'7xl'}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        px={20}
      >
        <Stack
          maxW={'5xl'}
          justify={'space-between'}
          align={'center'}
          spacing={{ base: 8, md: 16 }}
          direction={'column'}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            w={'100%'}
            px={14}
            justify={{ base: 'center', md: 'space-between' }}
            align={'center'}
          >
            <Heading as='h3' size='lg'>This weeks specials!</Heading>
            <Button colorScheme='yellow'>Online Menu</Button>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify={'space-between'}
            align={'center'}
            spacing={10}
          >
            {
              CARD_INFO.map( item => <HighlightCard key={item.name} {...item} />)
            }
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

const CARD_INFO = [
  {
    name: 'Greek Salad',
    price: '12.99',
    desc: 'The famous greek salad of cripsy lettuce, peppers, olives and our Chigago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    img_src: GreekSalad,
  },
  {
    name: 'Bruchetta',
    price: '5.99',
    desc: 'Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. The BEST you can find.',
    img_src: Bruchetta,
  },
  {
    name: 'Lemon Dessert',
    price: '5.00',
    desc: 'This comes straight from Grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img_src: LemonDessert,
  }
]