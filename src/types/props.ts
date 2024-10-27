import { ComponentProps, JSXElementConstructor } from 'react';

export type WithProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<U>, U = any> = ComponentProps<T>;
