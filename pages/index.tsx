import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faFileAlt, faMailBulk, faMailForward, faPenNib } from '@fortawesome/free-solid-svg-icons';
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
    external: true,
    href: 'https://github.com/nolanmccleary',
    icon: faGithub,
    text: 'GitHub',
  },
  {
    type: 'link',
    href: '/files/mccleary_resume1.pdf ',
    icon: faFileAlt,
    text: 'Resume',
  },
  {
    type: 'link',
    href: '/timeline',
    icon: faMailBulk,
    text: 'Timeline',
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
            Welcome to my portfolio! &#x1F920;
          </Animate>

          <Animate
            as="p"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 dark:text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
            transition={{ delay: 0.5 }}
          >
            I'm an electrical engineering student at the University of British Columbia with a strong interest in
            baremetal and kernel-space code as well as hardware-accelerated solutions for said code when appropriate. On
            the side, I've been attempting to burn enough TypeScript syntax into my head for the purpose of hacking
            together some semblance of a portfolio website, to which this serves as exhibit A. The website itself serves
            two main goals:
            <br></br>
            <br></br>
            1. Remind myself why I should probably stick to low-level programming<br></br>
            <br></br>2. Deliver project overviews in a way that is more dopaminergically pleasing to the viewer than a
            2000-5000 word .README file, a necessity in this age of instant gratification.
            <br></br>
            <br></br>
            The first goal has been achieved while the second is still in progress. Anyways, enjoy the projects.
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
      *There isn't really any meaning to the cowboy emoji, I just thought it fit in nicely and who else has one in their
      portfolio website?
    </Layout>
  );
};

export default Home;
