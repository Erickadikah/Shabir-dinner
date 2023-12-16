// pages/api/auth/login.js
import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      await connectToDatabase();

      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(401).json({ success: false, message: 'Authentication failed' });
      }

      const passwordMatch = await bcrypt.compare(password, existingUser.password);

      if (passwordMatch) {
        // Passwords match - user is authenticated
        // Perform actions upon successful login (e.g., set up session or JWT token)
        return res.status(200).json({ success: true, user: existingUser });
      } else {
        // Passwords don't match - authentication failed
        return res.status(401).json({ success: false, message: 'Authentication failed' });
      }
    } catch (error) {
      console.error('Error authenticating user:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}