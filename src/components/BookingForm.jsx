import React, { useReducer, useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import * as Yup from 'yup';
import dayjs from "dayjs";

import { useAlertContext } from "../context/alertContext";
import { fetchAPI } from "../utils/api";
import { getTimeSlot, saveTimeSlot } from "../utils/localStorage";
import useSubmit from "../hooks/useSubmit";


const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_BOOKING_DATE': {
      return {
        ...state,
        bookingDate: payload
      }
    }
    case 'SET_BOOKING_TIME_SLOT': {
      return {
        ...state,
        // bookingTimeSlot: state.allTimeSlot[payload]
        bookingTimeSlot: getTimeSlot()[payload]
      }
    }
    // case 'SET_TIME_SLOT': {
    //   return {
    //     ...state,
    //     allTimeSlot: {
    //       ...state.allTimeSlot,
    //       [payload.booking_date]: state.allTimeSlot[payload.booking_date].filter( slot => slot !== payload.booking_selected_time_slot )
    //     }
    //   }
    // }
    // case 'INIT_TIME_SLOT': {
    //   return {
    //     ...state,
    //     allTimeSlot: {
    //       ...state.allTimeSlot,
    //       [payload]: fetchAPI(dayjs(payload).toDate()),
    //     }
    //   }
    // }
    default:
      throw Error('Unknown action: ' + type);
  }
}


const BookingForm = ({ minBookingDate, maxBookingDate }) => {

  const initTimeSlot = getTimeSlot()[minBookingDate];
  const [state, dispatch] = useReducer(reducer, {
    allTimeSlot: {
      [minBookingDate]: initTimeSlot
    },
    bookingDate: [minBookingDate],
    bookingTimeSlot: initTimeSlot,
  })

  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      booking_date: state.bookingDate,
      booking_time_slot: state.bookingTimeSlot[0],
      guests: '',
      occasion: '',
    },
    onSubmit: (values) => { submit('url param that is not used', values) },
    validationSchema: Yup.object({
      booking_date: Yup.date()
        .min(minBookingDate, "Latest reservation date only available after 2 days from now.")
        .max(maxBookingDate, "You could only make a reservation as far as 1 year from now."),
    }),
  });

  useEffect(() => {
    if( response ) {
      onOpen( response.type, response.message );

      if( response.type === 'success' ) {
        // dispatch({ type: 'SET_TIME_SLOT', payload: {
        //   booking_date: response.data.booking_date,
        //   booking_selected_time_slot: response.data.booking_time_slot,
        // } });

        saveTimeSlot(response.data.booking_date, getTimeSlot()[response.data.booking_date].filter(slot => slot !== response.data.booking_time_slot))

        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <Container
      aria-label='reservation-section'
      maxW={'7xl'}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        align={'center'}
        color={'black'}
      >
        <VStack
          maxW={'53rem'}
          flex={1}
          align={'flex-start'}
          py={32}
        >
          {/* <Box><Button onClick={ () => console.log(JSON.stringify(state.allTimeSlot))}>Show all</Button></Box> */}
          <Heading as="h1" px={6}>Make your reservation</Heading>
          <Box p={6} rounded="md" w="100%">
            <form onSubmit={ formik.handleSubmit }>
              <VStack spacing={4}>
                <FormControl isInvalid={ !!formik.errors.booking_date && formik.touched.booking_date }>
                  <FormLabel htmlFor="booking_date">Choose your date</FormLabel>
                  <Input
                    id="booking_date"
                    name="booking_date"
                    type="date"
                    pattern="\d{4}-\d{2}-\d{2}"
                    {...formik.getFieldProps('booking_date')}
                    onChange={ e => {
                      // call the built-in handleChange
                      formik.handleChange(e);

                      // if ( isEmpty(state.allTimeSlot[e.target.value]) ) {
                      //   dispatch({ type: 'INIT_TIME_SLOT', payload: e.target.value });
                      // }
                      if ( isEmpty(getTimeSlot()[e.target.value]) ) {
                        saveTimeSlot( e.target.value, fetchAPI(dayjs(e.target.value).toDate()) );
                      }

                      dispatch({ type: 'SET_BOOKING_TIME_SLOT', payload: e.target.value });
                    }}
                  />
                  <FormErrorMessage>{ formik.errors.booking_date }</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="booking_time_slot">Choose your time</FormLabel>
                  <Select id="booking_time_slot" name="booking_time_slot" {...formik.getFieldProps('booking_time_slot')}>
                    {
                      state.bookingTimeSlot.map(
                        item => <option key={ item }>{ item }</option>
                      )
                    }
                  </Select>
                </FormControl>
                <FormControl isInvalid={ !!formik.errors.guests && formik.touched.guests }>
                  <FormLabel htmlFor="guests">Number of guests</FormLabel>
                  <NumberInput defaultValue={1} min={1} max={10} id="guests">
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormErrorMessage>{ formik.errors.guests }</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="occasion">Choose your occasion</FormLabel>
                  <Select id="occasion" name="occasion" {...formik.getFieldProps('occasion')}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </Select>
                </FormControl>
                <Button
                  mt={6}
                  type="submit"
                  colorScheme="purple"
                  width="full"
                  isLoading={ isLoading }
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Stack>
    </Container>
  );
};

export default BookingForm;
