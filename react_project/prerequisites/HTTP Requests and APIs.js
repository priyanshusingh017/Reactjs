// Learn to communicate with backend services using fetch or libraries like Axios

// HTTP Requests and APIs in JavaScript
// HTTP requests are used to communicate with servers and APIs (Application Programming Interfaces).
// The Fetch API is a modern way to make HTTP requests in JavaScript.   
// It provides a simple interface for fetching resources across the network.

// example of a GET request using Fetch API

fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("There was a problem with the fetch operation:", error));

// This code makes a GET request to the specified URL and logs the response data to the console.
// The Fetch API returns a Promise that resolves to the Response object representing the response to the request.
