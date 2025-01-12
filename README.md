# Node.js HTTP Server with Time-Based Greetings

This project is a simple HTTP server built with Node.js. It demonstrates how to create a server that responds with different greetings based on the time of day in the "Australia/Brisbane" timezone.

## Features

*   Responds with "Hello World!" when accessing the root path (`/`).
*   Responds with "Good Morning", "Good Afternoon", or "Good Evening" based on the time of day when accessing the `/time` path. Time is determined based on "Australia/Brisbane" timezone.
*   Returns a "404 Not Found" message for any other path that is not `/` or `/time`.

## Files

*   `index-with-require.js`: The main server file that handles requests and sends responses.
*   `today.js`: A module that returns the current date and time in the "Australia/Brisbane" timezone as a Date object, used by `index-with-require.js` to check the hour.

## How to Run the Server

Follow these steps to run the server locally:

### Prerequisites

*   [Node.js](https://nodejs.org/) (version 16 or higher) installed on your system.

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/JayJay247in/Cloud-applications-with-Node.js-and-React.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd Cloud-applications-with-Node.js-and-React
    ```
3.  **Run the Server:**
    ```bash
    node index-with-require.js
    ```
4.  **Access the Server:** Open your web browser and visit:
    *   `http://localhost:8080` to get a basic "Hello World!" message.
    *   `http://localhost:8080/time` to get time based greetings like "Good Morning", "Good Afternoon" or "Good Evening".
    *  `http://localhost:8080/[any-other-path]` to get a "404 Not Found" message.

   The server will output "Server listening on port: 8080" to your console to indicate that it is running.

## Project Structure

*   `index-with-require.js`: The main server logic file.
*   `today.js`: Module for retrieving date and time in `Australia/Brisbane` timezone.
*   `README.md`: Project documentation.

## Author

IKECHUKWU FAITHFUL