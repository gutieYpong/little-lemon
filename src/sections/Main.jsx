import {
  Outlet,
} from 'react-router-dom';

import Alert from '../components/Alert';
import Header from './Header';
import Footer from './Footer';


export default function Main(props) {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Alert />
    </>
  )
}
