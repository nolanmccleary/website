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


            It's no secret that Toronto is the economic, cultural, athletic, social, spiritual, New York strip loin steak, New York impersonation, bagged milk, step mommy, and tax evasion capital of the worl-I mean Canada. However, such a venerable city demands nothing but the best from its prospective residents. As a reformed member of the proletariat who has since integrated into this glorious enclave, I now share my knowledge for anyone aiming to do the same.
            <br></br><br></br>
            Step 1 - Acquire impractical jacket: <br></br>
            This is extremely important. Without one, you will be identified as one of the proletariat and promptly ex-communicated. A good rule of thumb is that if you were stuck in the wilderness and the jacket was able to keep you alive for over 2 hours, it is too practical. Pea coats work especially well here because they allow you to layer additional impractical jackets underneath, thus elevating your prestige. The one exception is Arc'teryx, but only if you are in a particularly brazen mood and feel like ‘roughing it for a while.
            <br></br><br></br>
            Step 2 - Acquire small dog: <br></br>
            The size of the dog should be inversely proportional to the size of your inheritance. Make sure to avoid useful or intelligent breeds such as Corgis for practicality or intelligence are traits reserved for the proles. Additionally, make sure your hound has a pea coat of its own for winter or autumn strolling (Preston isn't fond of the cold, you see).
            <br></br><br></br>
            Step 3 - Inherit generational Milk holder (for out of province transplants): <br></br>
            If this is not included in your inheritance, get ready for your new dairy-free lifestyle!
            <br></br><br></br>
            Step 4 - Etiquette: <br></br>
            Torontonians take their etiquette very seriously. If you walk past a stranger on the street, make sure to give them a nice hearty grimace and then stare angrily into the distance afterwards. This lets them know that you are hard-working and trustworthy.
            <br></br><br></br>
            Step 5 - Dialect: <br></br>
            The Toronto dialect takes some getting used to. Every word ends on an up-tone, just like the housing market. This may feel a bit clunky when first starting out, so a good heuristic is to say every sentence like you're asking a question.
            <br></br><br></br>
            Step 6 - Sports: <br></br>
            Watching sports you don't play is a key part of the Toronto experience! From now on, the phrases “this year's our year”, “we the north”, and “chirp chirp motherfucker” must come as naturally to you as telling strangers that you just saw Drake parked two blocks down that-a-way.
            <br></br><br></br>
            Step 7 - Welcome to the Enclave: <br></br>
            Congratulations, you made it! I'd say good job, but we don't give praise here. You are now one of us. How do you know this? You don't. We will never acknowledge each other's existence, but just know that you have a place here now… as long as you can afford rent.


          </Animate>          
        </div>
      </div>
    </Layout>
  );
};

export default Framework;