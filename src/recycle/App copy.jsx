import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
  useParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { AlertProvider } from "./context/alertContext";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ErrorPage from "./pages/ErrorPage";
import ConfirmPage from "./pages/ConfirmPage";


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
        <Routes>
          <Route element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="confirmation" element={<ConfirmPage />} />
            {/* <Route path="users" element={<Users users={users} />}>
              <Route
                path=":userId"
                element={<User onRemoveUser={handleRemoveUser} />}
              />
            </Route> */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
