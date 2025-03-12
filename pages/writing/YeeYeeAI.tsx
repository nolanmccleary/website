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



YeeYee AI
<br></br>
02/07/2025
<br></br><br></br>
A lot of people are predictably jumping on the DeepSeek 中式褐色酱 train, which nonrigorously confirms my theory that the anime pfp people on Twitter (X, whatever) are ahead of the curve by around 4 to 5 months on average (the cringier the PFP, the further the maximal prediction horizon but also the less reliable). Unfortunately for me, I never had such a profile picture, and thus was forbidden from writing about it until now. Unfortunately for you, I will not be beating a dead horse, at least not today, as I like my Basashi un-bruised. 
<br></br><br></br>
The main theme is that high-end models are only gonna get more democratized and require less compute in the future. The corollary is that sooner or later, non-shite, real-time multimodal models will start popping up, some of them open-source. What this means is that robotics is gonna get way doper.
<br></br><br></br>
Doper isn't a commonly used word, unless you are Russian, and the idea that robotics will either get way more dope/Russian soon is also not a new idea. Actually, nothing in the article is a new idea, I just wanted to shitpost. 
<br></br><br></br>
The thing that doesn't get talked about as much online is the fact that there are basically two main moats with regards to operating in this AI 'Gold Rush'. Funny enough, the demographic split between people who seem to know and not know what they're doing in this here gold rush very closely reflects historical gold rushes with regards to get rich vs go broke/die (source: 5-year-old me and my gold pan). Anyways, the two moats seem to be: 'Have a model that nobody else can replicate' or 'Implement a model in a way that nobody else can replicate'. 
<br></br><br></br>
The first moat is very hard to achieve because synthetic selection favours open source, and It's not like the second moat is unknown. Pretty much every AI 'startup' today that isn't an infrastructure play is trying to find a unique implementation for their chatbot wrapper of choice. However, most of these companies have a very constrained view of what 'unique implementation' really means, and it severely hinders their prospects for market dominance, and thus, egregious profit margins. They forget one factor, the human factor, otherwise known as the driving force behind YeeYee AI.
<br></br><br></br>
Nerds call this Human-In-The-Loop, but I'm not a nerd, so I call it what it is, which is YeeYee AI (YeeYee-ass Intelligence). Put simply, it's a lot easier to achieve human-AI symbiosis than full autonomy in most tasks. This is obvious, and it's where most well-researched projects aim to be going now, at least as far as truly complex tasks are concerned. What is less well-known are some of the niche places where this symbiosis can be achieved. These opportunities are attractive because they require significantly less effort to capitalize on than fully autonomous solutions. More attractive still is the fact that prime movers in the symbiosis space are uniquely positioned to develop fully autonomous solutions later on via gradually reducing the Yee(do it yerself) and increasing the Haw(taunomy). As we'll see, heavy industry provides a perfect symbiosis vector for this strategy to be implemented through.
<br></br><br></br>
The thing that makes heavy industry companies an ideal target is the fact that they are first and foremost extremely slow to adapt new technology while at the same time almost entirely overlooked by major robotics players. The main reason for this is that it is simply a relatively small market, and it's more worth an advanced robotics company's time to focus on consumer-facing systems because the overall amount of value that they can capture by doing so is much higher. All this might seem antithetical towards what I'm trying to argue, but it means that 1. their standards for autonomous/semi-autonomous systems are notably lower than virtually anything consumer-facing and 2. there is very little competition present with regards to the implementation of these solutions. 
<br></br><br></br>
Heavy industry is slow to adapt new technology, partly due to lack of understanding, and partly due to the fact that equipment is expensive enough as-is. This all makes sense when you look at most current autonomous systems solutions today, which are generally sold as conversion kits for pre-existing machinery. As you may expect, most (all?) of these conversion kits are sold by the vendors of the original machinery. As you may expect in addition to the previously expected, the markups on these things are egregious.
<br></br><br></br>
Without even touching autonomy, let's briefly talk about ruggedized computing. The standard ruggedized computing play is as follows: I take specs from the shittiest laptop I can find at Best Buy and design a custom motherboard for it so it fits in a big ol' metal brick. The brick is fancy though, because it's vibration-tolerant, as well as water, cold, fire, gunfire, etc. Basically, what we have is a potato inside a terminator cube with some CAN and Ethernet ports sticking out the side. There's lots of play with regards to how exactly you spec your bricks, but the one constant is that it must run Windows, because all the shitty proprietary software that these companies use for fleet management/telemetry/etc. was written in back in the early 2000s for Windows Vista and they never looked back. Now comes the kicker, you get to turn around and sell these things to O&G/mining companies for 20 grand a pop. 
<br></br><br></br>
It's hard to pin down exactly how much it costs to build one of these things without contacting the company directly, but it sure as shit isn't 20 grand. Looking at the specs of the new TRAX-20 for example, we see that it has a 2.8GHz i7 (ye olde backpack melter) and up to 32GB of RAM, no GPU, and may or may not have costed 20k  32 months ago. Obviously, a big cost point is the whole 'ruggedized' aspect (this one in particular is MilSpec), as well as all the additional peripherals for GPS, IO, etc, but there's no way in hell this thing should be sold in bulk for 20k/unit. Also, who the hell trusts a company that actively advertises that their product comes with OpenGL and OpenCL on their spec sheet?
<br></br><br></br>
I mentioned that that particular computer being sold was MilSpec (military specification). This basically means that it's probably gonna cost more to make and thus purchase than it otherwise would. It's also pointless if you're a resource company because you don't need military grade hardware, yet they buy it anyways at an awful price because there isn't a viable alternative. In addition, many heavy-industry specific issues such as dirty power go un-addressed, and idiot interns are thrown at them as a last-ditch effort in order to try and rectify them (sometimes literally). 
<br></br><br></br>
The point I'm trying to make is that there is a profound lack of reasonably priced heavy industry appropriate edge computing solutions. The gradual and inevitable roboticization of these industries provides an ideal environment for such a solution to be presented. Furthermore, presenting such a solution allows a massive advantage to the company implementing it with regards to further developing autonomous systems in the future.
<br></br><br></br>
The proposed strategy can be broken into two main plays: an entry play and a retention play. The entry play is predicated on the notion that these companies will want to adopt AI-based tools and workflows as much as possible, be it for valid (good use case) or invalid (stupid hype train) reasons. In doing so, they run into the issue of trying to integrate these tools into legacy software and workflows. Many of the current programs and workflows used by these companies are incredibly outdated and there is a significant amount of pain that will be incurred by this process. The implementation of edge AI will make this whole ordeal even more extreme. 
<br></br><br></br>
I will reword in a non-verbose manner: As these companies seek to do more cool shit in the future (both for valid reasons and to pander to shareholders), they will be forced to reconsider their existing tech stacks/infra. This process of reconciliation (in the context of decades of technical debt) is best solved by completely swapping out suboptimal infra as opposed to modernizing it (their shit is so dated and poorly set up that sooner or later it will make more sense to just gut everything and start fresh). To win this game, first we Yee, then we Haw.
<br></br><br></br>
Our Yee comes in the context of “Yeessir we'll solve yer problem!” Obviously this requires a sufficiently attractive solution so let's consider what they are looking for. These companies generally look for four key things:
<br></br><br></br>
1.	Excessive durability: Ironic that many military-grade systems can't handle dirty power well, but it's important to remind them at every turn that your product is built like a brick shithouse, as opposed to your competition's decidedly un-serviceable MilSpec porta-potty.
<br></br><br></br>
2.	Brain-deadedness: The next thing they care about is how easy everything is to set up. It's really important to make these things plug'n play. The other reason why they never switched from Windows (until recently) is due to the learning curve associated with Linux (I'm not even joking), so you basically want to make these things as intuitive as possible. It's also good to vertically integrate the stack as much as possible so your clients don't get to scapegoat your tech when dealing with cross-platform integration issues.
<br></br><br></br>
3.	Cost: The third most important thing is cost, and it should be relatively easy to undercut existing players. However, the real win isn't undercutting, it's undercutting while delivering a superior product.
<br></br><br></br>
4.	Scalability: Sort of ties in with 2 but the end goal is to build a cohesive ecosystem of products that is easy to integrate with and scales well with the number of instances. Think the Apple ecosystem of heavy machinery (a way better analogy is Anduril's lattice but only nerds know that one).
<br></br><br></br>
It should be noted that none of this is exactly easy, and 4. will probably be really hard, but there is a definite market for a well-engineered solution right now, and nobody is capturing it properly. That may be because it's just not economical to do so, in which case there needs to be some sort of supply chain innovation, or it could be because most people capable of actually building something like this don't have exposure to these sorts of industries. I honestly have no idea, but it's fun to think about.
<br></br><br></br>
There's no point of a Yee unless you can Haw (or Yee again in some cases, but not this one, only in the title case), and that's what we have our Hawtonomy phase for. Assume criteria 1 through 4 of our Yee phase are achieved, this means we now effectively own the hardware-software ecosystem responsible for data capture and transmission. That's great, because it provides a huge advantage when integrating autonomous systems into existing machinery. Of course, original equipment manufacturers will try and do the same, but they aren't exactly killing it with the AI game so far and they are also limited with regards to training data and interfacing with third party software. 
<br></br><br></br>
The beauty of Hawtonomy is we get to pull a Tesla. Since we now own most of the compute hardware and a good portion of the fleet management/telemetry stack, we also have a perfect vehicle for gathering training data during manual operation (Human-In-Loop). The best models in the future for any sort of autonomous feature will very likely be open-source, and thus winners will be decided by who is able to train them the best, this is already starting to happen elsewhere. A possible counter to this is the effective use of synthetic data to bypass real-world collection, but who better to create the best synthetic data than the owner of the most non-synthetic data? 
<br></br><br></br>
Obviously if more low-tech automation is all that's required, the time window for this play is not too large, but many of the tasks handled by these industries (in particular, anything with a shovel or claw) are decidedly non-trivial. It's likely that much more advanced automation in the future is applied, and it's likely to be implemented on existing manned machinery, at least at first.
<br></br><br></br>
Of course, there will probably come a time when fully autonomous machinery is all that gets built. By this point, the YeeHaw play is in its endgame, which means a well-established ecosystem for automation already exists, enabling fully autonomous machinery to integrate with converted machinery seamlessly. If the YeeHaw play is excessively lucrative, it may even be in a position to merge/get acquired and play a key roll in the development of this fully autonomous equipment. 
<br></br><br></br>
None of this is easy and it might not even be worth it, but there's a large amount of technical debt in heavy industry right now and anyone who can effectively capitalize on it could do some interesting things. It's also just fun to think about, especially when the brainstorm session turns into a hyper-informal shitpost. Anyways, thanks for reading and Yee H****n' Haw.






          </Animate>          
        </div>
      </div>
    </Layout>
  );
};

export default Framework;