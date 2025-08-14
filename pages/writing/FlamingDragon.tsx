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

Huawei Flaming Dragon
<br></br>
08/14/2025
<br></br><br></br>

Introduce Huawei Huǒ Long (Flaming Dragon) next-generation intelligent fridge!
<br></br><br></br>
Always know where you eat and where you get grocery. 
<br></br><br></br>
Automatically order T&T sweet potato vermicelli, no consent required!
<br></br><br></br>
Date night? Flaming Dragon also track partner dietary habits and adjust noodle to regulate conception probability based on social credit score. 
<br></br><br></br>
Very good with children, medium okay good with dog. 
<br></br><br></br>
Special storage bay to keep genetically engineered virus nice and fresh. Store up to 17 virus at one time. 
<br></br><br></br>
Multiples cameras!
<br></br><br></br>
Will yell at you. 
<br></br><br></br>

NOODLE RESTRICTIONS:
<br></br>
Flaming Dragon allow multiple noodles, some noodle not allowed. 
<br></br>
1.	No Hong Kong noodle.
<br></br>
2.	No Taiwanese noodle.
<br></br>
3.	Mongolian noodle ok but must wash first.
<br></br>
4. Will yell if give wrong noodle.
<br></br><br></br>
CHILD SAFETY:
<br></br>
1.	Flaming Dragon has powerful child safety system. Will speed dial police if child try to eat Taiwanese-style noodle.
<br></br>
2.	Will also yell at child. 




          </Animate>          
        </div>
      </div>
    </Layout>
  );
};

export default Framework;