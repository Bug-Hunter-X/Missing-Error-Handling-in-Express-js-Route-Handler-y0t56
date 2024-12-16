const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // Validate userId (e.g., check if it's a number, exists in the database)
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    // Fetch user data using userId
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Placeholder function to simulate fetching user data
const getUserById = async (id) => {
  // Replace with your actual database query or API call
  // ...
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [{
        id: 1, name: 'John Doe'
      }, {
        id: 2, name: 'Jane Smith'
      }];
      resolve(users.find(user => user.id === parseInt(id)));
    }, 500);
  });
} 