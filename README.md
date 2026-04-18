# Travlr Getaways Full Stack Application

## Architecture

In this project, I worked with two different types of frontend development. The first was the Express application using HTML, CSS, and JavaScript with Handlebars. This version reloads the page every time the user interacts with it, which makes it simpler but less interactive. The second was the Angular single-page application (SPA) used for the admin side. Angular uses components and updates the page without reloading, which makes it faster and more dynamic.

The backend uses a NoSQL MongoDB database because it works well with JSON data and is flexible. Since the data for trips can vary and grow over time, MongoDB makes it easier to store and manage that data compared to a traditional relational database. It also integrates well with Node.js and Express using Mongoose.

## Functionality

JSON is different from JavaScript because it is just a data format used to store and transfer data, while JavaScript is a programming language. In this project, JSON is used to send data between the frontend and backend. For example, when the Angular app requests trip data, the server responds with JSON, and the frontend displays it.

During the project, I refactored code when moving from static HTML to using Handlebars templates and later when building the Angular app. This helped improve how data was displayed and made the code more organized. Using reusable UI components in Angular, like trip lists and forms, made it easier to manage the application and reduced repeated code. This also makes it easier to update or add new features later.

## Testing

In a full stack application, different HTTP methods like GET, POST, and PUT are used to interact with API endpoints. GET is used to retrieve data, POST is used to create new data, and PUT is used to update existing data. Each endpoint handles a specific action, such as retrieving all trips or updating a trip.

Testing involved making sure that the frontend, backend, and database were all working together. I tested retrieving trips, adding new trips, and updating trips to make sure the changes were saved correctly. With added security, testing becomes more complex because endpoints may require authentication before allowing access. This means the application must verify users before allowing actions like editing or adding trips.

## Reflection

This course helped me understand how full stack applications are built from start to finish. I learned how the frontend, backend, and database all connect and work together. Before this course, I had very little experience with web development, and now I feel more confident building and understanding full stack applications.

I developed skills in using Node.js, Express, MongoDB, and Angular, along with working with APIs and handling data. I also improved my problem-solving skills by debugging issues and fixing errors throughout the project. These skills will help me as I work toward a career in technology, especially in roles related to web development or data.
