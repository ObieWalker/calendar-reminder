import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "components";
import PropTypes from "prop-types";
import { setCurrentReminder, toggleModalState } from "reducers";
import { INITIAL_REMINDER_STATE } from "utils/states";

import Form from "./Form";

function Reminder({ show }) {
  const dispatch = useDispatch();
  const { modalDisplay, selectedDate, selectedReminder } = useSelector(
    ({ reminders }) => reminders
  );
  const [reminder, setReminder] = useState(INITIAL_REMINDER_STATE);

  useEffect(() => {
    if (selectedReminder) setReminder(selectedReminder);
  }, [selectedReminder]);

  function clear() {
    setReminder(INITIAL_REMINDER_STATE);
    dispatch(setCurrentReminder(null));
    dispatch(toggleModalState(false));
  }

  if (!modalDisplay) return <></>;

  return (
    <Modal
      title={selectedReminder ? "Modify Reminder" : "Create Reminder"}
      date={selectedDate}
      onClose={clear}
      show={show}
      reminderTitle={reminder.title}
    >
      <Form
        selectedReminder={selectedReminder}
        reminder={reminder}
        setReminder={setReminder}
      />
    </Modal>
  );
}

Reminder.propTypes = {
  show: PropTypes.bool,
};

export default Reminder;
