const UserController = {
    // Logic to fetch/list users enrolled in the library
    listUsers: (req, res) => {
      // Simulated data
      const users = [{ name: 'User1' }, { name: 'User2' }];
      res.json(users);
    },
  
    // Logic to fetch/list users and the books they have borrowed
    listUsersAndBooks: (req, res) => {
      // Simulated data
      const usersAndBooks = [{ user: 'User1', books: ['Book1', 'Book2'] }, { user: 'User2', books: ['Book3'] }];
      res.json(usersAndBooks);
    },
  
    // Other user-related controllers...
  };
  
  module.exports = UserController;
  