// pages/api/auth/login.js
import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });
      console.log(existingUser)

      if (!existingUser) {
        return res.status(401).json({ success: false, message: 'Authentication failed: User not found' });
      }

      const storedPasswordHash = existingUser.password;

      const passwordMatch = await bcrypt.compare(password, storedPasswordHash);

      if (passwordMatch) {
        // Passwords match - authentication successful
        return res.status(200).json({ success: true, user: existingUser });
      } else {
        // Passwords don't match
        return res.status(401).json({ success: false, message: 'Authentication failed: Incorrect password' });
      }
    } catch (error) {
      console.error('Error authenticating user:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}