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

            How to Defend Against a Cyberattack
            <br></br>
            08/24/2025
            <br></br><br></br>
            Computers are an integral part of everyday life, so it’s no surprise that they are commonly referred to as man’s best friend. However, an untrained computer may be unpredictable, even becoming aggressive when provoked. As such, it’s important to know how to defend yourself when dealing with unfamiliar devices in the wild. Better still, the ultimate defense against cyberattacks is to proactively take charge of the situation right away to ensure that it never even occurs in the first place. This guide will show you how to do just that.
            <br></br><br></br>
            Tip #1: Attack from above
            <br></br><br></br>
            Most personal computers are relatively short in stature, and their jumping abilities are even more limited. This means that they tend to be relatively defenseless against aerial strikes, made even worse by their crippling insecurity of knowing that they couldn’t even reach the attacker to fight back if they wanted to. As such, all methods listed below will work on the order of 1.5x to 8x better if executed while airborne.
            <br></br><br></br>
            Tip #2: Use your head
            <br></br><br></br>
            In 1645, Miyamoto Musashi wrote the Book of Five Rings. However, there was actually a sixth ring, 頭 (Atama, or Head) but it was too powerful to be shared in paperback, and the hardcover collector’s editions sold out rather quickly. This ring referenced a few powerful techniques against malicious hardware including the 激怒したイルカ (Gekido Shita Iruka), the ヘルメットの子供 (Herumetto No Kodomo), and the 投げられたドワーフ (Nage Rareta Dowāfu). 
            <br></br><br></br>
            For a while there was a subscription-based model, but fans quickly revolted, most notably Sasaki Kojiro, who, following his defeat at the hands of Musashi uttered his famous last words “Ja, atama nai?”, which roughly translates to “So no head?”. 
            <br></br><br></br>
            Tip #3: Embrace the element of surprise
            <br></br><br></br>
            During the Vietnam War, an American platoon of ASUS VivoBooks were on a reconnaissance mission deep inside the Cu Chi Tunnels when they ran into what was previously ranked as one of the five cutest booby trap locations in Ho Chi Minh City that you just have to check out. The results were catastrophic: several VivoBooks fell into Punji Pits™, where disgruntled Thunderbolt ports mounted on sticks aggressively inserted themselves into the USB-C ports of the helpless laptops. While all several of the laptops survived the initial encounter, several succumbed to their injuries in the following days as they were no longer able to draw power from their comically mangled USB terminals, leading to a slow agonizing death by way of power starvation.
            <br></br><br></br>
            Tip #4: Turn the system against itself
            <br></br><br></br>
            Sun Zhu once said “To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself” after taking a particularly strong hit of his Zenjamin (Opium Pipe). We can exploit this martial knowledge in order to help us better destroy inanimate objects. A good weapon of choice here is a bottle of Sweet Baby Ray’s Barbeque Sauce as it is lightweight, silent, and highly lethal to an aggressive computer’s exposed circuitry. When the prospective attacker is resting, quietly sneak up from behind (or above) and inject the entire bottle of Sweet Baby Ray’s sauce directly into the cooling vents via turkey baster. The sauce will block cooling and insulate the system, quite literally causing it to cook itself alive while simultaneously adding a delicious hickory flavour. The process ends when the CPU is melted, and all plates are on the table. For liquid-cooled systems, a similar approach can be used where the cooling fluid is hijacked via Life Straw and replaced with a bottle of Stubbs.
            <br></br><br></br>
            Tip #5: Get a Hippopotamus
            <br></br><br></br>
            One of the most interesting phenomena in all of geographical statistics is the fact that the rate of cyberattacks in a region is almost completely inversely proportional to the rate of Hippopotamus attacks in it. Naturally, the only possible reason for this being the case is that hippos are the laptop’s natural predator. We can exploit this property by skillfully weaponizing a small herd of hungry hungry hippos and becoming a modern day Hannibal of Carthage in the process. By doing so, we render ourselves practically invulnerable to any sort of aggressive laptop behaviour that comes our way. Think you can melt the inside of a hippo’s backpack? Think again, hippos don’t wear backpacks.
            <br></br><br></br>

            With a legion of several airborne hungry hungry hippos jacked up on Sweet Baby Rays and armed to the tusks with Thunderbolt Punjis, we are now in a position where we could be considered safe from most cyberattacks. While this method may seem a little excessive at first glance, ask yourself, do you really want to fill out another 2FA form?





          </Animate>          
        </div>
      </div>
      *No that's not why they're called rings
    </Layout>
  );
};

export default Framework;