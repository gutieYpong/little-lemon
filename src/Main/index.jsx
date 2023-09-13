import React, { useReducer } from 'react'
import {
  Outlet,
} from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Alert from '../components/Alert';


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
