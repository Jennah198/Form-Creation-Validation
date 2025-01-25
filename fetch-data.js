async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // API URL
    const dataContainer = document.getElementById('api-data');    // Element to display the data

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);  // Await the fetch request
        const users = await response.json();   // Convert the response to JSON

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create an unordered list to display user names
        const userList = document.createElement('ul');

        // Loop through each user and create a list item
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name; // Set text as the user's name
            userList.appendChild(li);    // Append the list item to the user list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // In case of an error, show a failure message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Ensure the fetchUserData function runs once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
