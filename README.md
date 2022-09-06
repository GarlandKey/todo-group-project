# Honey Due - For when you're busy as a bee

A simple to-do app that lets you create individual tasks, mark them important as needed, and set the due date for each.

https://honeydue-100devs.herokuapp.com/

## Team Members and contributions:

- Dan - Set up and maintained repository, deployment to Heroku

- Eri H. - CSS

- Garland - Frontend: Setting up base CSS styles for the app including setting app colors and choosing fonts, and styling of the todos page

- Hattie Tavares - Backend: Configured adding a date input to the form so users can set a due date when they create a task. Added Moment to the app to format the date and edited the view to render the date in a readable manner and with the correct date showing. Frontend: Color palette, CSS styling on pages

- Kylla - Frontend: CSS Styling of the login page, Named app

- Tessy Okoloani - Backend: Set new routes and controllers to mark tasks as either "Important" or "Not important". Added the Date and Importance boolean to the schema. Added the event listeners and functions for code additions such as adding Due Dates, and marking tasks important to the front-end javaScript. Worked on harmonizing the front-end to work with the back-end

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, EJS, Node.js, Express, MongoDB, Passport, Bcrypt, Moment

## Optimizations

- Have tasks ordered by importance
- Add further levels of importance
- Ability to edit tasks
- Add subtasks to main tasks

## Lessons Learned:

- Hattie - The way Moment handles time can cause it to display the "wrong" date after shifting the time forward or backward. In my case it was displaying the day before the due date even though the correct date was being saved in the database. I had to add .utc to have it use Coordinated Universal Time which fixed the displayed date.

- Garland - Working with ejs isn't too difficult. Smooth sailing on styling as well.

- Tessy - Debugging works only when you don't beat yourself up. Always remember to use the console in the browser when testing your code.

- Dan - Reviewing code helps with learning it
