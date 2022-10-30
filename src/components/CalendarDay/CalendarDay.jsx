import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import cogoToast from "cogo-toast";
import { Card, CardContent, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { setCurrentReminder, toggleModalState, selectedDate } from "reducers";

import * as S from "./styles";

const CalendarDay = ({ day, month, year, height, isEnabled = false }) => {
  const [dayReminders, setDayReminders] = useState([]);
  const dispatch = useDispatch();
  const { currentReminder, data } = useSelector(({ reminders }) => reminders);
  const gridOnClick = (remindersLength) => {
    if (remindersLength > 7) {
      cogoToast.error("Cannot set more than eight reminders per day");
      return;
    }
    if (isEnabled) {
      if (currentReminder) dispatch(setCurrentReminder(null));
      dispatch(selectedDate(`${day}-${month}-${year}`));
      dispatch(toggleModalState(true));
    }
  };

  const openReminder = (reminder) => {
    dispatch(setCurrentReminder(reminder));
  };

  useEffect(() => {
    const date = `${day}-${month}-${year}`;
    const calendarReminders = data.filter((e) => e.date === date);
    calendarReminders.sort(
      (a, b) =>
        Number(a.time.replace(":", "")) - Number(b.time.replace(":", ""))
    );
    setDayReminders(calendarReminders);
  }, [data]);

  return (
    <Card
      variant="outlined"
      style={{ height }}
      className={
        isEnabled
          ? "calendar-day-card"
          : "calendar-day-card calendar-day-card--disabled"
      }
      onClick={() => {
        gridOnClick(dayReminders.length);
      }}
    >
      <CardContent className="calendar-day-content">
        <Grid item>
          <div className="calendar-day-header">
            <div className="calendar-day-text">{day}</div>
          </div>
          <div>
            {dayReminders &&
              dayReminders.length > 0 &&
              dayReminders.map((reminder, index) => (
                <S.Reminder
                  index={index}
                  overFive={dayReminders.length > 4}
                  onClick={() => openReminder(reminder)}
                  key={index}
                >
                  {reminder.title.slice(0, 5)}
                  <S.ReminderTime>{reminder.time}</S.ReminderTime>
                </S.Reminder>
              ))}
          </div>
        </Grid>
      </CardContent>
    </Card>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.string,
  year: PropTypes.string,
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
};

export default CalendarDay;
