import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import Animate from '@/components/Animate';
import Layout from '@/components/Layout';
import { loadWriting } from '@/lib';
import { Writing } from '@/types';

const actionClasses =
  'relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-700 dark:hover:text-white border border-gray-100 dark:border-gray-500 rounded-lg text-sm font-medium default-transition default-focus';

interface Props {
  writing: Writing;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const writing = await loadWriting();
  return { props: { writing } };
};

const Writing = ({ writing }: Props): JSX.Element => (
  <Layout>
    <div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
      <div className="relative max-w-xl mx-auto">
        <ul className="flex flex-col space-y-4" role="list">
          {writing.map((entry, index) => (
            <Animate animation={{ y: [50, 0], opacity: [0, 1] }} key={index} transition={{ delay: 0.1 * index }}>
              <li className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-lg transition ease-in-out duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
                  <div className="flex flex-1 items-center justify-start w-full">
                    <div className="min-w-0 flex-1 px-4">
                      <h1 className="text-gray-700 dark:text-white text-lg font-bold">{entry.title}</h1>
                    </div>
                  </div>
                    {entry.links.post && (
                      <Link
                        aria-label={`${entry.title} blog post`}
                        href={`/writing/${entry.links.post}`}
                        passHref
                        className={actionClasses}
                      >
                        <FontAwesomeIcon icon={faPenNib} />
                        <span className="sr-only">Read</span>
                      </Link>
                    )}
                </div>
              </li>
            </Animate>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
);

export default Writing;
