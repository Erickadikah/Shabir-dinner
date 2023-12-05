export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Replace this with your authentication logic
    if (email === 'erikadikah2030@gmail.com' && password === 'password') {
      // Simulated user object upon successful authentication
      const user = { id: 1, email: 'erikadikah2030@gmail.com', name: 'User' };

      // Simulating session creation by storing user info in session
      req.session.user = user;

      return res.status(200).json({ success: true, user });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

