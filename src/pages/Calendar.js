import React, { useState } from "react";

import {
  DateNavigator,
  CalendarGrid,
  Reminder,
} from "components";
import { getCurrentDate } from "utils/dateUtils";

const Calendar = () => {
  const { month, year, date } = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState({ date, month, year });

  return (
    <div className="container">
      <DateNavigator
        date={selectedDate?.date}
        handleDateChange={setSelectedDate}
      />
      <CalendarGrid date={selectedDate?.date} />

      <Reminder amountOfDays={month.amountDays} />
    </div>
  );
};

export default Calendar;
