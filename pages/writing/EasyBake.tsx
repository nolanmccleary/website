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

            Introducing Ramsay, the engine of the new Culinary Revolution. 
            <br></br><br></br>
            With industry-leading NV-Bake distributed baking technology, and using TSMC's latest 3nm CoWoS-XXXL packaging (we got sick of Intel's foundry permissions bricking our computers), we have created a groundbaking new system with thermals that an XPS's i7 can only dream of. 
            <br></br><br></br>
            To honor Kubrick's legacy, Ramsay's architecture is entirely monolithic. This allows air currents to roll silently along the sleek contours of the system, allowing best-in-class quiet convective cookage without the noisy fan. The maximal emissivity provided by this design removes the need for heat sinks, further improving grill performance during high-protein workloads.
            <br></br><br></br>
            Blackwell's interposer, based on TSMC's CoWoS-L, has been upgraded to the latest CoWoS-XXXL IP for usage in Ramsay. This new packaging is extensively optimized for even higher thermal output, resulting in lightning-fast preheat times and industry-leading thermal conversion efficiency.
            <br></br><br></br>
            Nvidia's proprietary NV-Bake distributed baking technology delivers exceptional performance and fault-tolerance characteristics during even the most intense of baking activities, reliably supporting workloads of up to 0X1A4 bakeages in parallel. Extremely demanding workloads can also receive additional support via integrated connectivity to Nvidia DGX Cook (license sold separately) for when further extensive baking capabilities are required.
            <br></br><br></br>
            This myriad of technological bakethroughs painsteakingly comes together to manifest an instrument of culinary excellence that exemplifies the supreme intellect, scientific prowess, and strategic order of the Taiwanese-American mind. With 372 billion transistors (plus their extended families during the holiday season) and 7'b1000101 Exaflops of compute at the touching part of your oven mitts, you can rest assured that the only half-baked thing here is the logic behind our interposer fetish.


          </Animate>          
        </div>
      </div>
      *Honestly, their logic is pretty sound and it's just a really tricky problem to deal with in general but I'm bullish on the prospect of a non-interposer solution so fight me<br></br>
      **Jensen Huang the type of guy to walk into a room full of GPU's and ask "who's ready to make history?"
    </Layout>
  );
};

export default Framework;