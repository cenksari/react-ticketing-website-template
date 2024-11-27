import { notFound } from 'next/navigation';

import { type Metadata } from 'next';

const Page = (): never => {
  notFound();
};

export const metadata: Metadata = {
  title: '404 - Not found',
};

export default Page;
