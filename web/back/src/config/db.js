import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Set to true to see SQL logs
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Function to check the database connection
const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connection successful!");
    } catch (error) {
        console.error("❌ Error connecting to database:", error);
        throw error;
    }
};

export { sequelize, checkConnection };
