import { faCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';

import Animate from '@/components/Animate';
import Layout from '@/components/Layout';
import { NavigationItem } from '@/types';


const Framework: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
          <Animate
            as="p"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 dark:text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
            transition={{ delay: 0.5 }}
          >
            That is all. These guys are the real deal. I thought their CEO's name sounded familiar and yeah he's the dude who invented PAM4. Okay technically no one person invented it but he was a major contributor. If a solution to the interposer problem ends up getting monopolized it's g fuckin g, at least in the short term until they invent something else cuz they're so goddamn cracked. Seriously though, super early stage Qualcomm vibes are being given off here.
          </Animate>          
        </div>
      </div>
    </Layout>
  );
};

export default Framework;