const express = require('express');
// Import the 'cors' package
const cors = require('cors');
const app = express();
// Import the Prisma client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const corsOptions = {
    origin: 'http://localhost:3000', // Set the allowed origin for CORS
};

// Enable CORS for all routes
app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON request bodies

// Route handler for login
app.post('/api/login', async (req, res) => {
    try {
        // Extract the email and password from the request body
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatches = await bcrypt.compare(password, user.password);

        if (!passwordMatches) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Successful authentication
        const authenticatedUser = {
            id: user.id,
            //name: user.name,
            email: user.email,
        };

        res.status(200).json({ user: authenticatedUser });
    } catch (error) {
        console.error('Error occurred during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(8001, () => {
    console.log('Server is running on port 8001');
});
