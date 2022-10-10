<div align="center">
    <img src="https://git.jobsity.com/jobsity/react-interview-challenge/-/raw/main/public/jobsity-logo.png"/>
</div>

# React Challenge

## Description

This project was built to complete a task for Jobsity. This is a calendar reminder application that allows a user create a reminder with a specific time and getting the weather report for the city that the remidner is set to.

designed to test your knowledge of front-end web technologies and assess your ability to create front-end UI products with attention to detail, cross-browser compatibility, standards, and reusability.


### Creating a Calendar Reminder


![CalendarJobsity](public/Standard%20calendar.jpeg)


![Calendar Reminder](public/Empty%20reminder.jpeg)


![Form Filled](public/Filled%20reminder.jpeg)


![Calendar Reminder View](public/Reminders%20on%20Calendar%20.jpeg)


## features
 - Reminders can be added to any date on the calendar.
 - You can include a city to the reminder and get the weather information for that city.
 - You can modify the reminders - including changing text, city, and time.
 - Multiple reminders can be added to a Day on the calendar and they are displayed adequately.
 - A reminder can be added for any month on any year and displayed accordingly.

## Major Technologies and Dependencies Used
- Javascript
- React
- Redux
- Styled Components
- Axios


# Running the Project

- Clone the project on your local machine.

### Prerequisites
- Ensure you have NodeJS and Yarn as a package manager.
- Open an account on [AccuWeather](https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D) and get an API key that will be put in your .env file as equal to `REACT_APP_API_KEY`


 - Run `npm install` | `yarn install` to install all dependencies.
 - Run `npm start`   | `yarn run` to run the app locally.
 - You can find the project running on `localhost:3000`.
