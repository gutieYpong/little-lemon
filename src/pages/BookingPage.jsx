import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash';
import dayjs from 'dayjs';

import { fetchAPI } from '../utils/api.js';
import { getTimeSlot, saveTimeSlot } from '../utils/localStorage.js';
import BookingForm from '../components/BookingForm.jsx';


export default function BookingPage(props) {

  // define the min day and format the date to YYYY-MM-DD to exclude the time
  const minBookingDate = dayjs().add(2, 'day').format('YYYY-MM-DD');
  const maxBookingDate = dayjs().add(1, 'year').format('YYYY-MM-DD');
  const initTimeSlot = fetchAPI(dayjs(minBookingDate).toDate());

  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    if ( isEmpty(getTimeSlot() )) {
      saveTimeSlot( minBookingDate, initTimeSlot );
    }
    setIsWaiting(false);
  }, []);

  return (
    <>
      {/* <Box><Button onClick={ ()=> console.log(JSON.stringify(getTimeSlot()['2023-09-14'])) }>Get me</Button></Box>
      <Box><Button onClick={ ()=> saveTimeSlot('2023-09-15', initTimeSlot) }>Save me</Button></Box>
      <Box><Button onClick={ ()=> deleteTimeSlot() }>Delete me</Button></Box> */}
      {
        !isWaiting && <BookingForm minBookingDate={ minBookingDate } maxBookingDate={ maxBookingDate } />
      }
    </>
  )
}
