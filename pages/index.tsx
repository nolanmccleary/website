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

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
          <Animate
            as="h1"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
          >
            Congratulations! You have successfully stalked me! &#x1F920;
          </Animate>

          <Animate
            as="p"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 dark:text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
            transition={{ delay: 0.5 }}
          >
            I used to have this website shoehorned into my LinkedIn but I felt that it sort of hindered my ability to express myself freely. 
            The reality is that I'm a pathological shitposter at heart and really value the ability to just info dump random crap that I've learned or find funny out into the void, I say the void because doing this in person has proven to be problematic. 
            <br></br>
            <br></br>
            There's a good chance nobody ever sees this but if you are seeing this it means you either googled my name or somehow got a link to this place in some way shape or form, in which case I'm so sorry in advance. 
            The other thing is that much like having Strava or doing research in undergrad, having a portfolio website is no longer an effective way to stand out from the crowd. <br></br>In order to stay at the bleeding edge of counter culture I now reject the notion of a portfolio website and in its place manifest a monstrosity of my own making, the shitpost site. 
            Let's see how long it takes for this trend to catch on.
            <br></br>
            <br></br>
            Here's a brief overview of who I am and what I do: <br></br>
            
            I write a lot of code and sometimes I write about the code that I've written. Some of that stuff goes here. I also write about random stuff I find interesting or funny, some of that stuff also goes here.
            I grew up with a love for building things but lacked the means to effectively do so.
            I found programming to be an effective way to deal with this as the only tool needed is a computer and the only facility needed is a place to sit. 
            I decided to study electrical engineering because I thought electricity was cool and I didn't understand it. I still don't understand it but now I'm significantly better at writing code that makes use of it in some way to interact with reality, something I find deeply satisfying. 
            Outside of nerd stuff I like to run, work out, or do anything involving a bike or skis. I recently started getting into climbing for use both as a socialization vector and as a means of keeping my childhood dream of getting into mountaineering alive as I fearlessly move from large urban center to large urban center in search of the 
            career and capital advancement required to fund it. I also read a lot of books.
            <br></br>
            <br></br>


            Anyways, that is me and this is my site. I like rambling and I like writing high-performance code (the coolest stuff I've done is closed source but I've been exploring a bit of low-level ML on my own recently so hopefully this changes soon). What is here is the culmination of many hours of banging around on a keyboard shared first and foremost for myself and secondly so that anyone who has gone this far to figure out who I am at least has something
            funny || useful to show for their troubles.
            
            <br></br>
            <br></br>
            The cowboy emoji represents strength, unity, and the pioneering spirit.


          </Animate>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
            {NAVIGATION.map((link, index) => {
              if (link.type !== 'link') return null;
              return (
                <Animate
                  key={index}
                  className="w-full sm:w-auto"
                  animation={{ y: [50, 0], opacity: [0, 1] }}
                  transition={{ delay: 0.1 * (index + 2) + 0.5 }}
                >
                  <Button href={link.href} icon={link.icon} outline>
                    <span>{link.text}</span>
                  </Button>
                </Animate>
              );
            })}
          </div>
        </div>
      </div>
      *R7: Zahy Thrly pz aol zpunsl ilza ivvr P'cl lcly ylhk
    </Layout>
  );
};

export default Home;
