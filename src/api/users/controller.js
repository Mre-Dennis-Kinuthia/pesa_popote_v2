//api/users/controller.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Create a new user using Prisma
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error occurred during user creation:', error);
    res.status(500).json({ error: 'An error occurred during user creation' });
  }
};

module.exports = {
  createUser,
};
