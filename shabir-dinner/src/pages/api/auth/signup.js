// pages/api/auth/signup.js
import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email is already registered.' });
      }

      const newUser = new User({
        name,
        email,
        password, // Ensure you hash the password before saving in production
      });

      await newUser.save();
      return res.status(201).json({ success: true, message: 'User created successfully!' });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
