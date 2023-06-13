// backend-server index.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import the cors package

const app = express();
const prisma = new PrismaClient();

const corsOptions = {
  origin: 'http://localhost:3000', // Set the allowed origin for CORS
};

app.use(cors(corsOptions)); // Enable CORS for all routes

app.use(express.json());

app.post('/api/users', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({ user: newUser }); // Send the created user as the response
    } catch (error) {
        console.error('Error occurred during user creation:', error);
        res.status(500).json({ error: 'User creation failed' }); // Send an error response if user creation fails
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
