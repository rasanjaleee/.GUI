import express from 'express';
import { register,login } from '../controllers/userControllers.js';
const router = express.Router();

// Define routes here
/*router.get('/', (req, res) => {
  res.send('User route working!');
});*/

router.post('/register-user',register);
router.post('/login', login);

export default router; // <--- Default export added
