import React from 'react';

import Layout from '@/components/Layout';

const ResumePage = (): JSX.Element => {
  return (
    <Layout>
      <div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
        <div className="relative max-w-xl mx-auto">
          <div className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-lg transition ease-in-out duration-300">
            <iframe
              src="/files/resume/Nolan_s_Resume-1 copy.pdf"
              width="100%"
              height="600px"
              className="rounded-lg"
              style={{ border: 'none' }}
              title="Resume"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;
