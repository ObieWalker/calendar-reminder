import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import cogoToast from "cogo-toast";
import { TextField, Time } from "components";
import {
  add,
  destroy,
  edit,
  setCurrentReminder,
  toggleModalState,
} from "reducers";
import { INITIAL_REMINDER_STATE } from "utils/states";
import { getCity, getWeather } from "services/weatherForecastService";
import * as S from "./styles";

function Form({ selectedReminder, reminder, setReminder }) {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector(({ reminders }) => reminders);
  const [errors, setErrors] = useState({
    title: "",
    date: "",
    city: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);

  function clear() {
    setReminder(INITIAL_REMINDER_STATE);
    dispatch(setCurrentReminder(null));
    dispatch(toggleModalState(false));
  }

  function handleChange(key, value) {
    setErrors((prev) => ({ ...prev, [key]: "" }));
    setReminder((prev) => ({ ...prev, [key]: value }));
  }

  async function handleCityForecast(key, value) {
    handleChange(key, value);
    if (value.length > 1) {
      setLoading(true);
      try {
        const { data } = await getCity(value);
        if (!data.length) {
          setLoading(false);
          return setReminder((prev) => ({
            ...prev,
            temperature: null,
            description: "",
          }));
        }
        const [city] = data;
        const { data: weatherInfo } = await getWeather(city.Key);
        if (!weatherInfo.length)
          return setReminder((prev) => ({
            ...prev,
            temperature: null,
            description: "",
          }));
        const [weather] = weatherInfo;
        const weatherForecast = {
          description: weather.WeatherText,
          temperature: weather.Temperature.Metric.Value,
        };
        setReminder((prev) => ({
          ...prev,
          ...weatherForecast,
        }));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        cogoToast.error(error.response.data);
      }
    } else {
      setReminder((prev) => ({
        ...prev,
        temperature: null,
        description: "",
      }));
    }
  }

  function onDeleteReminder(id) {
    dispatch(destroy(id));
    clear();
    cogoToast.success("This Reminder has been deleted!");
  }

  function onSubmit(event) {
    event.preventDefault();

    const [isValid, errors] = validate();
    if (!isValid) {
      for (let i = 0; i < errors.length; i++) {
        let field = errors[i];
        setErrors((prev) => ({
          ...prev,
          [field]: "This is a required field",
        }));
      }
      return;
    }
    toggleModalState(false);
    if (selectedReminder) {
      dispatch(edit(reminder));
      cogoToast.success("Reminder has been modified");
      return clear();
    }
    const id = uuidv4();
    dispatch(add({ ...reminder, id }));
    cogoToast.success("The reminder has been added successfully.");
    clear();
  }

  function validate() {
    const errors = Object.entries(reminder)
      .map(([key, value]) => {
        const bypass =
          key === "id" ||
          key === "city" ||
          key === "temperature" ||
          key === "description" ||
          Boolean(value);
        if (bypass) return "";
        return key;
      })
      .filter((each) => Boolean(each));
    if (errors.length) return [false, errors];
    else return [true];
  }

  useEffect(() => {
    setReminder({
      ...reminder,
      date: selectedDate,
    });
  }, [selectedDate]);

  return (
    <form onSubmit={onSubmit}>
      <S.TimeCity>
        <TextField
          error={errors.title}
          value={reminder.title}
          placeholder="Title"
          maxLength={30}
          onChange={({ target }) => handleChange("title", target.value)}
        />
        <S.Debounce
          placeholder="City"
          minLength={1}
          debounceTimeout={1000}
          onChange={({ target }) => handleCityForecast("city", target.value)}
        />
      </S.TimeCity>
      <S.TimeCity>
        <Time
          error={errors.time}
          value={reminder.time}
          onChange={({ target }) => handleChange("time", target.value)}
        />
        <S.WeatherInfo>
          {loading ? (
            <div>Retrieving City weather report...</div>
          ) : !reminder.temperature && reminder.city ? (
            <>
              <div>No weather information for this city.</div>
            </>
          ) : (
            reminder.temperature &&
            reminder.city && (
              <>
                <p>Weather report</p>
                {reminder.temperature}°C
                <div>{reminder.description}</div>
              </>
            )
          )}
        </S.WeatherInfo>
      </S.TimeCity>
      <S.Actions>
        <S.Save type="submit">Save</S.Save>
        {reminder.id && (
          <S.Delete onClick={() => onDeleteReminder(reminder.id)}>
            Delete
          </S.Delete>
        )}
      </S.Actions>
    </form>
  );
}

export default Form;
