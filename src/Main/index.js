import React from 'react'
import { HStack, VStack, Image, Heading, Text, Button } from "@chakra-ui/react";

import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from '../Footer';

export default function Main(props) {

  return (
    <main>
      <VStack>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </VStack>
    </main>
  )
}
