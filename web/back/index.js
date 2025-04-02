import express from 'express';
import cors from 'cors';
import userRoutes from './src/routes/userRoutes.js';
import { checkConnection } from './src/config/db.js';

const app = express();

// ✅ Fix CORS (Move Above Routes)
app.use(cors({
    origin: 'http://localhost:5173',  // Allow frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Handle Preflight Requests
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(200).end();
});

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use('/api/auth', userRoutes);

app.get("/", (req, res) => {
    res.send("Server is ready");
});

const PORT = 4000;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    try {
        await checkConnection();
    } catch (error) {
        console.log("Failed to initialize the database", error);
    }
});
