import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BsHouseFill } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class="w-full h-full p-5 text-[#C5C1C0] text-lg sm:text-xl md:text-2xl lg:text-3xl flex flex-col justify-center items-center">
      <div class="max-w-[1240px] flex flex-col items-center justify-center space-y-5">
        <p>Oops...! 404</p>
        <p>
          The page you are looking for appears to have been moved, deleted, or
          does not exist.
        </p>
        <a
          href="/"
          class="flex items-center justify-center space-x-2 text-[#C5C1C0] cursor-pointer group text-base"
        >
          <p class="group-hover:text-[#F7CE3E] ease-in duration-300">Home</p>
          <BsHouseFill class="group-hover:text-[#F7CE3E] group-hover:animate-bounce ease-in duration-300" />
        </a>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Kyaw | Page Not Found",
  meta: [
    {
      name: "Kyaw Thu's Portfolio Website",
      content:
        "This website is designed and built by Kyaw Thu. It is built by using Qwik, Qwik City, TypeScript, Motion One, and Tailwind CSS.",
    },
  ],
};
