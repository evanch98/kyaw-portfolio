import { component$ } from "@builder.io/qwik";
import AllProjects from "~/components/all-projects/all-projects";
import { BsHouseFill } from "@qwikest/icons/bootstrap";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="w-full p-2 text-[#C5C1C0] flex flex-col space-y-2">
      <a href="/" class="flex space-x-2 items-center">
        <BsHouseFill />
        <p>Home</p>
      </a>
      <AllProjects />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Kyaw | All Projects",
  meta: [
    {
      name: "Kyaw Thu's Portfolio Website",
      content:
        "This website is designed and built by Kyaw Thu. It is built by using Qwik, Qwik City, TypeScript, Motion One, and Tailwind CSS.",
    },
  ],
};
