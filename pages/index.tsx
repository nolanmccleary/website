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
            Welcome to my website! &#x1F920;
          </Animate>

          <Animate
            as="p"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 dark:text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
            transition={{ delay: 0.5 }}
          >
            I write a lot of code and also occasionally write about the code that I've written or any other random thing
            that interests me. Some of that stuff goes here. The reality of most personal projects is that they end up
            being a bit silly and as such should not be taken too seriously. In light of this, humour is occasionally
            used both for thematic coherence and as an assistive device for viewers with reduced attention spans. The
            cowboy emoji represents strength, unity, and the pioneering spirit.
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
      *There isn't really any meaning to the cowboy emoji, I just thought it fit in nicely and who else has one on their
      website?
    </Layout>
  );
};

export default Home;
