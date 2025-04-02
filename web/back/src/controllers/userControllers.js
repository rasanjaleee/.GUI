import { registerUser } from "../services/authService.js";
import { loginUser } from "../services/authService.js";
import bcrypt from 'bcryptjs'; // Import bcryptjs
import jwt from 'jsonwebtoken'; // Import the jsonwebtoken module



export const register = async (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        // Pass plain object to service
        const response = await registerUser({ name, username, email, password });

        if (response.success) {
            return res.status(201).json(response);  // 201 Created is better for registration
        } else {
            return res.status(400).json(response);
        }
    } catch (error) {
        console.error("Server error during registration:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};


export const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password are required" });
    }

    try {
        // Call loginUser service function to get user from database
        const user = await loginUser(username);

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Generate JWT token if credentials are valid
        const token = jwt.sign(
            { id: user.id, username: user.username },
            'your_secret_key',  // Replace with your actual secret key
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Respond with the generated token
        return res.status(200).json({ success: true, token });
    } catch (error) {
        console.error("Server error during login:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};