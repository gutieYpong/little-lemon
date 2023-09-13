import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import { AlertProvider } from "./context/alertContext";
import Main from "./sections/Main";


function App() {
  const theme = extendTheme({
    colors: {
      brand: {
        yellow: "#F4CE14",
        green: "#495E57",
        // ...
      },
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
      {/* <Grid
        position='fixed'
        top={0}
        left={0}
        right={0}
        zIndex={-1}
        templateColumns='repeat(10, 1fr)'
        maxWidth={'66.5rem'}
        gap={4}
        mx={'auto'}
      >
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
        <GridItem w='100%' h='100vh' bg='pink.100' />
      </Grid> */}
        <Main />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
