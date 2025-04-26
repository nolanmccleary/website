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
            PyTorch Dope Fam (Deadass Edition)
<br></br><br></br>
04/21/25
<br></br><br></br>
            I don't think enough people really appreciate how just how powerful PyTorch is. Like most people seem to think of it as some sort of collection of buttons that they can press to torch.train their MNIST-10 MLP (My Little Perceptron), but there's honestly so much more once you start digging a little deeper. 
            <br></br><br></br>
            Why is PyTorch so good? Because it's the de-loopifier for people who don't have time to write every single shader by hand. Basically every single loop that isn't a part of some sort of iterative process can be parallelized through Torch provided you have the appropriate hardware resources; and if you don't, it doesn't matter because you can just change the device and now it's running on your CPU, and it will STILL most likely be faster because tensors are pretty much the bossman (most capabable) object when it comes to dynamically sized arrays to the point that they are faster than most legacy static arrays as well (and if your CPU has mad (high quantity) cores (i.e. a modern CPU) and your arrays are big, you notice this really quickly).
            <br></br><br></br>
            That's the second reason why Torch (is) poppin (engaging in metaphorical gun violence against the competition who are decidedly unarmed and ill-prepared), because it makes GPU-friendly code largely device-agnostic if it's set up properly, meaning that one doesn't have to hand-roll both CUDA AND Metal shaders if they want their code to also run on a Mac. 
            <br></br><br></br>
            At this point, one might be thinking “mans (plural-yet-still-posessive) gotta point fam (the vocative, not the family unit proxy), but Torch still not greazy (z = zlick, s = suspect) like CUDA”, and that's valid; but at this point, Torch is so well-optimized that you only really incur around a 1.5-5x increase in runtime going from pure C/C++/CUDA to Torch (this is of course assuming everything is sufficiently well-optimized on both sides). Which sounds like a lot, until you realize that vanilla Python is around 100x slower on average. And depending on how much parallelism you can exploit, and what your shippage time constraints are, there are lots of cases where GPU-accelerated Torch actually runs faster than non-accelerated C.
            <br></br><br></br>
            Anyways, PyTorch Dope Fam (the family unit proxy AND the vocative; It's open source after all). It ain't a waste yute (zero-padded youth), it(‘s) the people's champ (once again, it's open source).
            <br></br><br></br>
            Ya dun know (knowledge acquired).


          </Animate>          
        </div>
      </div>
    </Layout>
  );
};

export default Framework;