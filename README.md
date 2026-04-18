# Travlr Getaways Full Stack Application

## Architecture

In this project, I worked with two different types of frontend development. The first was the Express application using HTML, CSS, and JavaScript with Handlebars. This version reloads the page every time the user interacts with it, which makes it simple but less interactive. The second was the Angular single-page application (SPA) used for the admin side. Angular uses components and updates the page without reloading, which makes it faster and smoother.

The backend uses a NoSQL MongoDB database because it works well with JSON data and is more flexible. Since the trip data can change and grow over time, MongoDB makes it easier to manage compared to a traditional database. It also connects easily with Node.js and Express using Mongoose.

## Functionality

JSON is different from JavaScript because it is just a data format used to store and transfer data, while JavaScript is a programming language. In this project, JSON is used to connect the frontend and backend. When the Angular app requests trip data, the server sends it back in JSON format, and the frontend displays it.

During the project, I refactored code when moving from static HTML to Handlebars templates and later when building the Angular app. This helped make the code more organized and easier to manage. Using reusable UI components in Angular, like trip lists and forms, reduced repeated code and made it easier to update the application later.

## Testing

In a full stack application, different HTTP methods like GET, POST, and PUT are used to interact with API endpoints. GET is used to retrieve data, POST is used to create new data, and PUT is used to update existing data.

To test the application, I made sure the frontend, backend, and database were all working together. I tested loading trips, adding new trips, and editing trips to make sure the changes were saved correctly. With security added, testing becomes more important because some actions require authentication before they can be completed. This means the application needs to verify users before allowing updates.

## Reflection

This course helped me understand how a full stack application is built from start to finish. I learned how the frontend, backend, and database all connect and work together. Before this course, I didn’t have much experience with web development, and now I feel more confident working with it.

I developed skills using Node.js, Express, MongoDB, and Angular, along with working with APIs and handling data. I also improved my problem-solving skills by debugging issues and fixing errors throughout the project. These skills will help me as I work toward a career in technology, especially in roles related to web development or data.
