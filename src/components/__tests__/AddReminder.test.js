import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Calendar from "components/Reminder/Form";

test("Counter component", () => {
  render(<Calendar limit={5} />);
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 0");
})

// describe("Testing lirary", () => {
//   const initialState = {
//     data: [],
//     selectedReminder: null,
//     modalDisplay: false,
//     selectedDate: null,
//   };
//   const mockStore = configureStore({ 
//     reducer: { reminders: initialState },
//   })

//   it('Shows "Hello world!"', () => {
//     const initialState = {
//       data: [],
//       selectedReminder: null,
//       modalDisplay: false,
//       selectedDate: "12-10-2022",
//     };
//     const { getByText } = render(
//       <Provider store={mockStore}>
//         <Calendar />
//       </Provider>
//     );

//     expect(getByText('October 2022')).not.toBeNull();
// })
// });
