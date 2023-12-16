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
        return res.status(401).json({ success: false, message: 'Authentication failed: User not found' });
      }

      const storedPassword = existingUser.password.trim();
      const providedPassword = password.trim();

      console.log('Retrieved hashed password from database:', storedPassword);

      console.log('Stored Password Length:', storedPassword.length);
      console.log('Provided Password Length:', providedPassword.length);

      const passwordMatch = await bcrypt.compare(providedPassword, storedPassword);

      console.log('Password comparison result:', passwordMatch);

      if (passwordMatch) {
        return res.status(200).json({ success: true, user: existingUser });
      } else {
        console.log('Provided password:', providedPassword);
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