# Honey Due - For when you're busy as a bee

A simple to-do app that lets you create individual tasks, mark them important as needed, and set the due date for each.

## Team Members and contributions:

- Hattie Tavares - Backend: Configured adding a date input to the form so users can set a due date when they create a task. Added Moment to the app to format the date and edited the view to render the date in a readable manner and with the correct date showing.

**Link to project:** Not currently live

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, EJS, Node.js, Express, MongoDB, Passport

## Optimizations

- Have tasks ordered by importance
- Add further levels of importance
- Ability to edit tasks

## Lessons Learned:

- Hattie - The way Moment handles time can cause it to display the "wrong" date after shifting the time forward or backward. In my case it was displaying the day before the due date even though the correct date was being saved in the database. I had to add .utc to have it use Coordinated Universal Time which fixed the displayed date.

- Garland - Working with ejs isn't too difficult. Smooth sailing on styling as well.
