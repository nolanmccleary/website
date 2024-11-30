import { faCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';

import Animate from '@/components/Animate';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { NavigationItem } from '@/types';

const NAVIGATION: NavigationItem[] = [
  {
    type: 'link',
    href: '/projects',
    icon: faCode,
    text: 'Projects',
  },
  {
    type: 'link',
    href: '/writing',
    icon: faPenNib,
    text: 'Writing',
  },
];

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

*The formatting is bad because I haven't figured out the best way for markdown injection on the site yet and the more I get done at my job the more work they give me. I'll make this look good at some point don't worry. I also recently got back into drawing so pictures (comics?) may be added in at some point as well<br></br><br></br>


Anyone who has reached a sufficiently high level of mastery in something sooner or later comes to realize that arguably the single most important driver is having the right mental framework for processing information relating to that thing. In many cases, this mental framework is also the direct reward of mastering the thing. Programming is one such case. <br></br><br></br>

For the record, I don't claim to be anywhere near a master in any way, shape, or form. However, I've been doing it for a while and have devoted a lot of my free time towards thinking about it. More importantly, I like to talk about it and it seems that very few people in my current area of interest do; therefore, seeing that this is my website and and it is very most not likely that anyone sees this, I will now give a short rant detailing everything I've been wanting to tell anyone who would care enough about this topic to listen. <br></br><br></br>

I came into C from a fairly mathy Python background (I mean technically before Python I was dicking around on Scratch (specializing in MLG quickscope simul- I mean physics engines) and the idea of doing game dev was why I started doing the mathy stuff but let's forget about that) and while I'd definitely say it was an asset from an algorithmic point of view, I actually think it may have hurt me long-term because I ended up having some weird mental blocks when it came to thinking about what was actually going on under the hood. I'm writing this because it's what I wish someone would have told me when I was getting into this stuff, and I think it's broadly applicable to anyone else coming from a higher-level programming background. If you are untainted and come from a low-level background, I hope this helps you in some way as well.<br></br><br></br>

The core idea here that I hope to convey is this: A computer is first and foremost a state machine that acts on its own memory. This at first may seem obvious and simple but that's the point: That's all there is, and it's beautiful. From here, everything follows.<br></br><br></br>

In terms of granularity, I like to think in terms of two key concepts: memory and state changes. The intermediary that relates these two things together are memory manipulations: memory (I'm defining memory in an abstract sense and thus including registers here) allows computers to have a concept of state and its manipulation allows computers to perform multi-step computations as well as recursively adjust their upcoming state based on their current state. For the record here I am defining state as the binary value of every register and memory block in the computer at any given clock cycle. Computers are beautiful because they are deterministic, if you know the value of every memory block/register in the computer at any given time you can perfectly predict what will happen next (save for randomly occurring quantum space ray bit-flipping bullfuckery (happens more often than you'd think)). This sounds nice and vaguely philosophical but why is it useful? Because any compute operation can be broken down into these simple primitive memory manipulations and the end result computed can be expressed to the user as a function of the system's end state. Now let's motivate that statement by using this knowledge to explain instructions.<br></br><br></br>

Instructions at their most fundamental level are special numbers loaded from somewhere in memory (here I mean memory blocks specifically) and fed to registers in order to drive system state in some way. Execution of individual instructions is carried out by special hardware (ALU, CU) inside the processor's core. Once physical circuitry loads the very first instruction from memory, further instructions can be loaded in and executed by the processor indefinitely. This ties into what I said before with memory – when a program is loaded into memory, you are defining an abstract start state and a sequence of instructions delineating the state transition rules to the processor. When you run this program, you are giving the processor permission to jump off from the starting state that you defined and to follow the instruction-defined state transition sequence that you gave it.<br></br><br></br>

I've intentionally avoided using specific hardware terminology here because a lot of it is architecture dependant (on the day of writing this, I was reminded that the processor I'm currently working with doesn't have a cache) and as such I think it is in bad taste to focus on specific components before deeply understanding concepts. This seems to run counter to how it's generally presented in classes which seem to be incessant on memorizing all these stupid little acronyms before actually understanding what is going on at a deeper level; that approach won't scale well if neuromorphic computing takes off. I'm also not separating state from output which is different from how it is normally taught in school. This is probably a bad decision in a hardware design context because the total number of possible states goes up exponentially but in a programming context it allows some nice mental shortcuts that I'll expand on later.<br></br><br></br>

This takes us to assembly. Assembly (again, I'm abstracting everything away and including bytecode in this definition) is simply the most atomic human-readable instruction format. It's important not to conflate human-readable instructions with the actual system state changes because most instructions require multiple but for our purpose assembly can be thought of as the language of instructions. What an assembler does is translate these human-readable instructions to a sequence of numbers that the hardware will react to in order to induce a specific series of state changes within the system (one state change per number per clock cycle). All higher level code is simply a further abstraction of this language such as to allow for reduced cognitive load on the programmer. Compiled languages are compiled to assembly before the program is loaded into memory while interpreted languages are interpreted into bytecode by an interpreter program (which itself is compiled) at runtime. I won't go deep into interpreters here but I just wanted to relate the two concepts.<br></br><br></br>

Now we have the tools to start explaining some higher-level concepts, starting with pointers. All pointers are just numbers that represent a place in memory, a pointer to a pointer is simply another place in memory but we tell the compiler to expect a pointer at that location. Pointers can be thought of as the glue that allow us to connect data in memory together with instructions in order to produce higher level objects and behaviour that can be thought of as useful. Now to data types: data types are simply instructions telling the computer how to handle the memory contents in the related blocks where the instruction specifies which blocks are related, variables are simply instances of data types meaning an instance of a chunk of memory and a set of instructions specifying how it is to be handled. Higher level objects like structs are simply user-defined compound types using the same mechanism to smash a bunch of smaller primitive types together, sometimes depending on the language these types also contain pointers to functions. Functions themselves are simply pointers to instructions in memory, these instructions can be chained together easily if the function instruction allocation is contiguous or less easily by branch or jump instructions inside the function that set the program counter register value explicitly (if it isn't set it explicitly it just goes to the next address in instruction memory) if instruction allocation is not contiguous. The program counter is simply the register that keeps track of the next instruction to execute at any given time. Tying back to higher level objects, sometimes these objects can also include pointers to functions which can implement all sorts of behaviours including runtime-allocation behaviours for these objects themselves.<br></br><br></br>

Yo homie wake up, we at execution cycles. An execution cycle is simply an atomic state transition period inside the system. As such, the clock speed is simply the number of execution cycles that occur per unit time and thus the rate at which the system changes state. A program's runtime complexity is simply how many state changes it takes to get the system to go from its start state to its end state as a function of input whereas its memory complexity is how much of the system's memory it disrupts while doing this, also as a function of input. The output of the program is simply the state of the subset of memory that we care about when the end state is reached.

Now we have a first-principles basis for defining program performance. We just defined runtime and memory complexity but what about program reliability? All reliability is is the program's ability to resist deviation from the expected state transition sequence in the event of unforeseen external factors and to recover from any deviations gracefully. These external factors include but are not limited to: instances of quantum space ray bullfuckery (as mentioned earlier), electric boogaloos (static), lighthearted EM tomfoolery from your friendly neighbourhood EF-111A Raven, or simply unforeseen user input.<br></br><br></br>

The ultimate expression that can be derived from this model is a rigorized (shoutout Hofstadter) understanding of what high-level optimization of code truly is. Perfectly optimized code is code that allows our computer to get from start state to end state (where the result of the computation is expressed) with the least amount of steps, the least amount of memory disruption, and in a way that cannot be impeded by external factors, it's also impossible to achieve. The reality is that there is almost always some tradeoff between speed, memory overhead, and reliability; therefore, the optimal solution is the combination of these three characteristics that best fits the context of the problem it is trying to solve. I like to think about optimization in a way analogous to gradient descent (or FFE/CTLE tap tuning if you're a baremetal DSP gangsta like me). Imagine we have a four-dimensional surface represented in three-space where each axis corresponds to either runtime complexity, space complexity, or the product of sequence deviation probability times the extra cost incurred by deviation. Now imagine each point also has a 4th-dimensional value that we perceive as colour, this value is the probability that at any given point in time our program does not meet performance requirements (failure). If you like, you can imagine red as being the highest likelihood of failure while blue being the lowest or any other system that you prefer. Our goal is to find the point inside this 3D blob where this failure probability is lowest (bluest point). The point of lowest failure probability is the program that best fits the context of the problem we are trying to solve, in other words, it is the best possible piece of code that we can actually write. Another way to think about this is by finding the lowest valley across a 3D surface and then generalizing to 4 dimensions.<br></br><br></br>

Anyways, this is the mental model that I personally use when writing and optimizing code. I don't know if it's good and I don't know if other people will find it useful but it works for me and in a weird abstract sense it's kind of the single most advanced thing I have ever created because in hindsight I kind of started working towards it when I was a kid. Writing it down was also a way to help me formalize my thinking because even though I spent years on the intuition I never really put it into words until now. The model doesn't have a name yet but I've considered a few options (Regression-Driven Development, Way of the Nolanator, FerdaSpec, etc) but haven't decided on anything yet. Part of me feels like it would be fun to investigate if this regression optimization model could be rigorously defined and used as an optimization strategy for machine-generated code but that seems hard and tedious so I prefer not to think about it too much as I'm already somewhat preoccupied at the moment.<br></br><br></br>

So anyways, yeah, this is the philosophy that I spent way too much time developing in order to help me make a fancy rock do cool shit better. I hope it helps you too.

          </Animate>          
        </div>
      </div>
    </Layout>
  );
};

export default Framework;