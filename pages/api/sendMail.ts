// pages/api/sendMail.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("ON");
    if (req.method === 'POST') {
    const { data } = req.body;

    // Here you would typically handle sending the email
    // using services like SendGrid, Nodemailer, Mailgun etc.

    // Mock sending for this example
    console.log('Data received', data);

    res.status(200).json({ success: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
