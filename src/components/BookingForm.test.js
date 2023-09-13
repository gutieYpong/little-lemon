import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';


describe('Booking Form Test', () => {
  test("for some static text being rendered in the BookingForm component", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm />);

    const timeSlotInput = screen.getByLabelText(/Choose your date/);
    // fireEvent.change(timeSlotInput, { target: { value: '17:00' } });

    // const submitButton = screen.getByRole('button');
    // fireEvent.click(submitButton);

    expect(timeSlotInput).toBeInTheDocument();
    // expect(handleSubmit).not.toHaveBeenCalled();
    // expect(submitButton).toHaveAttribute('disabled');
  })
});
