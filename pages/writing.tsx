import type { NextPage } from 'next';

import Animate from '@/components/Animate';
import Layout from '@/components/Layout';


const writing: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl w-full space-y-8 text-center">
          <Animate
            as="h1"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
          >
            Coming soon
          </Animate>
        </div>
      </div>
    </Layout>
  );
};

export default writing;
