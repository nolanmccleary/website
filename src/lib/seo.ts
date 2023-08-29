import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ComponentProps } from 'react';

type SeoProps = Partial<ComponentProps<typeof NextSeo>>;

export const useSeo = (props: SeoProps = {}): SeoProps => {
  const router = useRouter();

  const title = 'Nolan McCleary';
  const description = "Welcome to my website";
  const url = `https://nolan.mccleary.ca/${router.asPath}`;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      site_name: 'nolanmccleary.ca',
      type: 'website',
      // TODO: add banner image
    },
    ...props,
  };
};
