const User = require('../models/User');

const userController = {
  enrollUser: (req, res) => {
    // Logic to enroll a user
    const { email, firstName, lastName } = req.body;
    const newUser = new User(email, firstName, lastName);
    // Save the user to the database (simulated)
    // Return a JSON response
    res.json({ message: 'User enrolled successfully', user: newUser });
  },

  // Other user-related controllers...
};

module.exports = userController;
