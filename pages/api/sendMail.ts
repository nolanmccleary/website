import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const data = req.body;

    // Here, add validation for the data
    // For example, check if the email is valid, the message is not empty, etc.
    // If validation fails, return an error response.

    // If validation passes, send the email (using a service like SendGrid, Nodemailer, etc.)
    // For now, we'll simulate successful email sending

    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}