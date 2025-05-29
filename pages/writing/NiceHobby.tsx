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
            Multiple Reasons Why Writing is a Nice Hobby
            <br></br>
            May 19, 2025

            <br></br><br></br>
            If money were no object, I'd probably spend most of my time writing while coding on the side as opposed to coding while writing on the side. It's not that I don't like programming, but I'd be lying if I said that I didn't find writing to be at least a bit more spiritually fulfilling. It also has a way lower coefficient of mental friction, because you don't have to worry about getting slapped in the face with some sort of toolchain error worded in broken English every five minutes. 
            <br></br><br></br>
            The big idea being thrown around right now is that natural language will become the new programming language. This comes at a time when writing as a craft seems to be dying in a way that would honestly be sort of funny if it weren't also sad. 
            <br></br><br></br>
            What do I mean by writing is dying? I mean that people are writing less and less for the sake of creating genuinely good content, and more and more for the sake of commercialization. In an ironic twist of fate, I think that this will ultimately prove antithetical to the objective they are intending to optimize for. What do I mean by this? I mean that everywhere you look, for any in-demand topic, all you see are pages and pages of sterile Hustlemonkey bullshit. It's all garbage, and it's only gonna get worse, because the Hustlemonkeys have recently discovered that they can use AI to automate their drivel generation. Of course, the Hustlemonkeys are completely missing the point of what good writing is supposed to do, not that they care. But they should care, for reasons that I will now discuss… 
            <br></br><br></br>
            When I was little, between the fighter jet and the space phases, I had a phase where I was really into nature documentaries, especially ones with birds. Through these documentaries, I obtained both a heartwarming fact and a useful corollary, which I will now share. The fact: many mother birds vomit down the throats of their children, but it's done out of love, not spite, and the babies like it. Now the corollary: You can do the same thing to your peers, but with information instead of vomit, the important (and valuable) part is that it is already digested beforehand. 
            <br></br><br></br>
            For better or worse, people are inherently emotional beings, and our emotional circuitry is heavily embedded in how we learn about the world, what we remember, and how we form our opinions on things. Anyone who thinks they are perfectly logical hasn't done enough reflection to realize that the perception of running some sort of hyper-logical mental state machine is really just the emotional circuitry being applied to logically defined systems instead of feelings. What this means is that we can take advantage of this system (which we can't really do anything about, regardless) in order to learn and communicate things better. My favourite example to illustrate this lies in the world of self-help books.
            <br></br><br></br>
            Self-help books aim to provide late-stage supplementary parenting for people who missed out on it as children. The best (I'm defining best here by my own biased opinion and the general consensus) self-help books can generally be summarized in less than a page, and doing so would be completely useless, because their value lies not in what they say but in how they say it. The best self-help books do two things 1) They have a genuinely good core idea and 2) They burn that shit into your skull. Upon closer inspection, this may seem like a played-out tactic because it's the one that good writing has used since basically the dawn of time. 
            <br></br><br></br>
            The practice of using weird, fucked-up-but-kinda-funny-or-funny-but-kinda-fucked-up, vivid imagery to communicate information in a way that sticks used to be called religion, now it's called memeing, but the core principle still remains. People's attention spans and memories are limited, especially nowadays, and our brains are wired to filter out information that we don't perceive as relevant to our continued existence. This makes for a problem today, because never before have we had to spend so much time doing things that we just aren't biologically equipped to give a shit about.
            <br></br><br></br>
            Memes stick for the same reason skills are learned quicker when practice feels like play. Our brains are naturally wired to retain information with a higher correlation to some given reward. A funny analogy relating two concepts is far better retained than a dry academic explanation. It's also more appropriate in most places, as one only has a limited amount of RAM, and fully allocating the entire structure into memory when it is not being used proves wasteful, even to the point of being considered harmful*. 
            <br></br><br></br>
            So far, I've just been firing off a few loosely related points in a way that seems novel, but upon closer inspection appears largely regurgitated (pun intended) at best and completely self-gratifying at worst. At this point, you are either amused or upset enough to receive the crux of the last few paragraphs of this pseudoessay, which will now be presented as follows: 
            <br></br><br></br>
            1)	Writing is a way to transmit information.
            <br></br><br></br>
            2)	Compression algorithms allow for more information to be transmitted and stored effectively with less effort.
            <br></br><br></br>
            3)	Humans are naturally wired to pick up on good compression algorithms.
            <br></br><br></br>
            4)	Good writing should make use of good compression algorithms.
            <br></br><br></br>
            By this, what I mean is that we are naturally wired to find rewards in elegant expressions that communicate a high level of information with minimal cognitive overhead. These expressions are useful because they can be efficiently stored in memory and then expanded into their full form when the situation requires it. Good writing tends to do this often, and as such, the rate of useful information transmitted per unit of the reader's effort reaches higher and higher levels as the quality of the writing improves. It's almost like we evolved to like things that allow us to communicate more information with less effort, who would have guessed?
            <br></br><br></br>
            I will note that 'compression' here is used very loosely. Sometimes, like in the self-help example, more exposition is needed to reliably store the relevant information. In other words, 'good compression' here just means that it takes less time and effort to actually burn something into our skull than it otherwise would have. In the self-help book analogy, for example, if we just said the raw theme of such a book discretely, then it wouldn't be retained, and if we instead sought to learn said theme the hard way, through our own lived experience, the level of cognitive overhead could be considered much higher. Therefore, one may assert that the best-written self-help book for some given message would be the one that burns the most visceral, unforgettable, and relevant imagery into the reader's head with the least number of pages. 
            <br></br><br></br>
            So far, I have done a job of explaining what I believe to be one component of good writing. I will now explain how it can be weaponized.
            <br></br><br></br>
            We all know that super-smart models exist today, and we are all aware that they keep getting better and better. However, how we interface and direct them has remained largely the same.
            <br></br><br></br>
            When one interfaces with an advanced model today, it is usually all through text; sometimes more interactive interfaces are present, sometimes speech is used (which is effectively converted to text), but the core, granular interaction with the system is done through text. This may change once brain chips get hot, but for now, this is the best we can do. This naturally begs the question, “Can we define some sort of interface protocol?”. If we did, we would probably want the protocol to address a few key points:
            <br></br><br></br>
            1)	The user's limited mental horsepower
            <br></br><br></br>
            2)	The model's limited lateral thinking
            <br></br><br></br>
            3)	The bandwidth limitations between the two
            <br></br><br></br>
            In non-bullet form: We'd want a protocol that allows the model to do as much of the hard thinking as possible with the least amount of input from the user. When the model gives information to the user, we would want it to burn that information into the user's skull as efficiently as possible. Do you see where I am going with this? 
            <br></br><br></br>
            While a hyper-productive symbiotic relationship between man and machine built on a foundation of memes certainly seems alluring and possibly a bit romantic, it's actually a bit more complicated. In this relationship, there is no clearly defined boundary between which tasks should be carried out by the model and which ones should be carried out by the user. This is because the probability of successfully executing on a task by the model depends on both the context (pun intended) of the problem as well as the model itself. Ultimately, it's up to the user to determine how the responsibilities are to be divided, and if this is to be done well, they will most likely have to query the model to do so. 
            <br></br><br></br>
            This is all to say that it would serve one well to get really good at communicating with the model, both in terms of issuing instructions, and in terms of inquiring about the model's capabilities in order to issue the appropriate instructions. Memes and metaphors are useful here because they allow one to burn ideas and modes of thought into the model's context, thus defining the interface between the model and the user. It doesn't go just one way, though, because the model can do the same thing back to the user. Furthermore, the user can define an interface for a concept and then have the model validate it, thus solidifying both parties' understandings in the process.  
            <br></br><br></br>
            This ties back to the value of writing as a craft today. As it stands right now, nobody else, A.I. assisted or not, will be able to explain things to you better than you can explain them to yourself. This is not a new idea, and historically it has been referred to as the Feynman technique, but it just got a huge buff, because now everyone has access to the world's most powerful general-purpose idea validation engine. By this, I mean that you can use whatever fucked up, absurd, or otherwise ridiculous analogy to burn whatever concept you care about into your head in a way that sticks, and now you have a super powerful robot on the other side making sure that you don't go off the rails in the process. In other words, you can learn PhD-level shit without bugging a bunch of PhD's with your obscene mental heuristics. In the process of doing so, you also create a super high-bandwidth language (interface) tailored to your exact thought process that you and the model can then use to further discuss these ideas in the future. The only limiting factor is your ability to generate ideas and articulate them through words, which is what writing at its core has always been about. 
            <br></br><br></br>
            So, is writing dying? I think there's a lot of truth to the idea that the Hustlemonkey style of regurgitated summaries of commonly accessible information, often behind paywalls, will face some challenges. While I believe that there will still be a place for genuinely strong commercial writing, nobody today wants to read some soulless Medium article full of facts that could be better summarized by a chatbot with an internet connection. Literature may be safer, but I see no reason why a future model couldn't get good enough to write a genuinely great story one day. However, art, almost by definition, requires a distinctly human aspect that I don't believe can be fully replicated by AI. Here, I don't mean 'art' in the context of branding, advertisements, or short-form content; I mean art that is specifically designed to hit the subject in the gut and change how they see the world. I mean that just the notion that something was fully created by a machine invalidates its right to be considered art, no matter how well-created it is. It is for this reason that I believe that literature will be safer, at least in the short term, while this sentiment persists. In short, if your goal is to write for other people and earn a living by doing so, things may become a bit harder depending on where your focus lies. 
            <br></br><br></br>
            But I don't think that this is even the best reason for writing in the first place. First and foremost, I think that writing is a tool rather than an occupation, and that tool just got way, way more powerful. At its core, writing is a tool for clarifying your thoughts and sharing them, be it to others or back to yourself. Schools (at least the ones I've been to) don't tend to teach this directly, and it usually gets buried under a bunch of algorithmic grammar and citation logic. This is noticeably less fun than the creative aspect of writing, and AI is perfectly positioned to kill it off, which is good. This means that if we think of writing as the act of coming up with a solution to some sort of predefined problem passed down to you by others, then yes, it will most likely die. However, I'd argue that this sort of writing was never too valuable to society in the first place beyond the realm of simple clerical upkeep, so I believe that its death is an inevitable consequence of modernization and is well-deserved. I actually find the prospect of this exciting, because the sooner schools can stop trying to containerize a fundamentally individual-specific creative process, the sooner students can start fucking around with their thoughts and actually come up with something useful. 
            <br></br><br></br>
            If I had to boil down everything that I've talked about so far into one sentence, I would do it like this: 
            <br></br><br></br>
            This may not be the best time to write for others, but there has never been a better time to write for yourself. 
            <br></br><br></br>
            I could have just said that rather than all this, but then it wouldn't stick. 
            <br></br><br></br>
            We live at a time where technology can greatly enhance our individual creative abilities, but it is not yet sufficient to fully replace them. At the same time, we live in a society that is constantly shifting towards lower trust, greater risk-aversion, and stifled creativity. While the internet creates a fantastic medium for genuinely good creative output, platforms select for content that is entertaining rather than deep. Most influencers are not the most qualified to share information on their domains, but they do so anyway, because they care about attention, not mastery. People who have genuinely mastered their domains don't bother sharing because it takes a lot of work to make deeply developed mental models palatable to the masses. I'd like to say that as a society, we should hold ourselves to a higher standard when we put content on the internet; however, in doing so, I would basically be condemning my dear shitpost site that has brought me so much joy, so I will lead with an alternative argument instead: 
            <br></br><br></br>
            1)	There has never been an easier time in history to engage in independent truth-seeking from first principles.
            <br></br><br></br>
            2)	There has never been a more rewarding time in history for the unique, effective, and entertaining articulation of novel ideas. 
            <br></br><br></br>
            3)	Writing is arguably the single best medium through which to engage in these actions under the constraints of modern technology.
            <br></br><br></br>
            I don't think there has ever been a better time in history to be a good writer, the only caveat is that one may sometimes have to challenge their assumption of what writing really is and what makes good writing good.
            <br></br><br></br>
            Anyways, those were a few tangentially related reasons why I think writing is a nice hobby. Thanks for reading.
            


          </Animate>          
        </div>
      </div>
      *Yes that was a Dijkstra reference, sue me.
    </Layout>
  );
};

export default Framework;