import { Button, Heading } from '@primer/react';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Primer Tailwind' },
    { name: 'description', content: 'Primer and Tailwind v4' },
  ];
}

export default function Home() {
  return (
    <>
      <header className='tw:h-15 tw:flex  tw:items-center tw:px-4 tw:sticky tw:top-0 tw:border-b tw:border-[var(--borderColor-default)]'>
        <Heading variant='small'>RR7</Heading>
      </header>
      <main className='tw:max-w-7xl tw:mx-auto tw:pt-8 tw:px-4'>
        <div className='tw:flex tw:items-center tw:gap-3'>
          <Button variant='primary'>Primary</Button>
          <Button variant='default'>Default</Button>
        </div>
      </main>
    </>
  );
}
