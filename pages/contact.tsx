import React, { useState } from 'react';

import Animate from '@/components/Animate';
import Layout from '@/components/Layout';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setIsSubmitted(true);

      if (data.success) {
        setSubmissionSuccess(true);
        setSubmissionMessage(data.message);
      } else {
        setSubmissionSuccess(false);
        setSubmissionMessage('Failed to reach server. Please try again.');
      }
    } catch (error) {
      setIsSubmitted(true);
      setSubmissionSuccess(false);
      setSubmissionMessage('Internal server error (Service not yet implemented)');
    }
  };

  return (
    <Layout>
      <div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8 text-center">
        {isSubmitted ? (
          <div className="bg-white dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 border border-gray-100 dark:border-gray-500 rounded-lg transition ease-in-out duration-300 p-6">
            <span
              role="img"
              aria-label={submissionSuccess ? 'check' : 'cross'}
              className={`text-4xl ${submissionSuccess ? 'text-green-500' : 'text-red-500'}`}
            >
              {submissionSuccess ? '✅' : '❌'}
            </span>
            <p className="text-gray-700 dark:text-white text-lg font-bold mt-4">{submissionMessage}</p>
          </div>
        ) : (
          <div className="relative max-w-xl mx-auto">
            <Animate animation={{ y: [50, 0], opacity: [0, 1] }} transition={{ delay: 0.1 }}>
              <div className="bg-white dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 border border-gray-100 dark:border-gray-500 rounded-lg transition ease-in-out duration-300 p-6">
                <div className="flex flex-col items-center justify-center w-full">
                  <h1 className="text-gray-700 dark:text-white text-lg font-bold mb-4">Contact Me</h1>
                  <form className="w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-300">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="John Doe"
                          className="p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                          required
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-300">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="john@example.com"
                          className="p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                          required
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="message" className="text-sm text-gray-700 dark:text-gray-300">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={5}
                          className="p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-white dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-500 text-black dark:text-gray-300 p-3 rounded-md"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Animate>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Contact;
