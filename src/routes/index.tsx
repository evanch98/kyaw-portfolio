import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Body from '~/components/body/body';

export default component$(() => {
  return (
    <div class="flex-1">
      <Body />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Kyaw | Front-End Developer',
  meta: [
    {
      name: 'Kyaw Thu\'s Portfolio Website',
      content: 'This website is designed and built by Kyaw Thu. It is built by using Qwik, Qwik City, TypeScript, Motion One, and Tailwind CSS.',
    },
  ],
};
