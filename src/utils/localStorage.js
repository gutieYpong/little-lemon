import isEmpty from 'lodash/isEmpty';


const TIME_SLOT_KEY = 'TIME_SLOT';

export const getTimeSlot = () => {
  const timeSlot = localStorage.getItem(TIME_SLOT_KEY);

  if(isEmpty(timeSlot)) return [];

  return JSON.parse(timeSlot);
}

export const saveTimeSlot = (slotDate, timeSlot) => {
  const allTimeSlot = getTimeSlot();
  const newAllTimeSlot = { ...allTimeSlot, [slotDate]: timeSlot }

  localStorage.setItem(TIME_SLOT_KEY, JSON.stringify(newAllTimeSlot));
}

export const deleteTimeSlot = () => localStorage.removeItem(TIME_SLOT_KEY);
