import type { NextPage } from 'next';

import Animate from '@/components/Animate';
import Layout from '@/components/Layout';


const Framework: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex text-left justify-center py-12">
        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
          <Animate
            as="p"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-left text-gray-400 dark:text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
            transition={{ delay: 0.5 }}
          >

            Huawei Happy Tiger
            <br></br>
            06/20/2025
            <br></br><br></br>
            Introducing new and very secure Huawei Kuai Le Hu (Happy Tiger) non-disposable markdown document printer!
            <br></br><br></br>

            New design very safe and effective.
            <br></br><br></br>

            Very minimal internet connection required!
            <br></br><br></br>

            Safe data storage! Send all document to very secure IP :) 
            <br></br><br></br>

            Efficient serialization of all markdown and latex doc for personal storage. Very good for business and government uses as well. 
            <br></br><br></br>

            IMPORTANT: Roman 11 not allowed!
            <br></br><br></br>

            IMPORTANT: NO HONEY BEAR DUNG!
            <br></br><br></br>

            Made from very durable baogang alloy.
            <br></br><br></br>




            USAGE INSTRUCTIONS:
            <br></br>
            Happy Tiger roars
            <br></br>

            Minimal connection needs
            <br></br>

            No Honey Bear dung
            <br></br><br></br>



            SAFETY WARNING:
            <br></br>

            Happy Tiger make no sound
            <br></br>
            Within silence, spikes emerge…
            <br></br>
            The greedy come provoke it
            <br></br>
            They leave missing… One yang



          </Animate>          
        </div>
      </div>
    </Layout>
  );
};

export default Framework;