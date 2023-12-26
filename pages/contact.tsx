import React, { useState } from 'react';

import Animate from '@/components/Animate';
import Layout from '@/components/Layout';

interface Props {
  placeholder?: any;
}

const actionClasses =
  'relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-gray-300 border border-gray-500 rounded-lg text-sm font-medium default-transition default-focus';

const Contact = (props: Props): JSX.Element => {
  // Remove useState hook for formData since we'll use FormData API

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('howdy');
    e.preventDefault();
    // Create a new FormData object, passing in the form as the argument
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',

        // The headers may be omitted, as the fetch API sets the correct header for FormData
        body: formData, // Send the FormData object directly
      });

      const data = await response.json();
      if (data.success) {
        console.log('Email sent successfully!');
      } else {
        console.log('Failed to send email');
      }
    } catch (error) {
      console.error('There was an error sending the email', error);
    }
  };

  return (
    <Layout>
      <div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
        <div className="relative max-w-xl mx-auto">
          <Animate animation={{ y: [50, 0], opacity: [0, 1] }} transition={{ delay: 0.1 }}>
            <div className="bg-gray-900 bg-opacity-75 border border-gray-500 rounded-lg transition ease-in-out duration-300 p-6">
              <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-gray-300 text-lg font-bold mb-4">Contact Me</h1>
                <form className="w-full" onSubmit={handleSubmit}>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        className="p-3 border rounded-md bg-gray-800 text-gray-300 border-gray-500"
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-400">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@example.com"
                        className="p-3 border rounded-md bg-gray-800 text-gray-300 border-gray-500"
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-sm text-gray-400">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        className="p-3 border rounded-md bg-gray-800 text-gray-300 border-gray-500"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-gray-300 p-3 rounded-md">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
