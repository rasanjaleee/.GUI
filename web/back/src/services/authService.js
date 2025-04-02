import bcrypt from 'bcrypt';
import UserModel from '../models/userModel.js';

export const registerUser = async (user) => {
    console.log("Received user object:", user);

    try {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ where: { email: user.email } });
        if (existingUser) {
            return { success: false, message: "Email already in use." };
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);

        // Log before creation
        console.log("Creating user with data:", {
            name: user.name,
            username: user.username,
            email: user.email,
            password: "[HASHED]" // Don't log the actual hashed password for security
        });

        // Create a new user with hashed password
        await UserModel.create({
            name: user.name,
            username: user.username,
            email: user.email,
            password: hashedPassword
        });

        return { success: true, message: "Registration successful" };
    } catch (error) {
        console.error("Error during registration:", error);

        if (error.name === "SequelizeValidationError") {
            const messages = error.errors.map(err => err.message);
            return { success: false, message: messages.join(', ') };
        }

        return { success: false, message: "Registration failed. Please try again later." };
    }
};

export const loginUser = async (username) => {
    try {
        const user = await UserModel.findOne({ where: { username } });
        return user;  // Return the user object if found
    } catch (error) {
        console.error("Error fetching user for login:", error);
        throw new Error("Error fetching user");
    }
};
