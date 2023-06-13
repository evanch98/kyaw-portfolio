import { component$, useSignal } from "@builder.io/qwik";
import {
  BsPerson,
  BsPersonWorkspace,
  BsList,
  BsEye,
  BsEnvelope,
} from "@qwikest/icons/bootstrap";
import About from "../about/about";
import Resume from "../resume/resume";
import Project from "../project/project";
import Contact from "../contact/contact";
import Link from "../link/link";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";

export default component$(() => {
  const tab = useSignal("about");

  let bodyContent = <div>Loading</div>;

  if (tab.value === "about") {
    bodyContent = (
      <About />
    );
  } else if (tab.value === "resume") {
    bodyContent = (
      <Resume />
    );
  } else if (tab.value === "projects") {
    bodyContent = (
      <Project />
    );
  } else if (tab.value === "links") {
    bodyContent = (
      <Link />
    );
  } else if (tab.value === "contact") {
    bodyContent = (
      <Contact />
    );
  }

  return (
    <div class="flex-1 flex items-start">
      <div class="flex h-[550px] flex-col items-center justify-evenly py-5 px-2 bg-[#1A2930] space-y-5 rounded-tl-md rounded-bl-md drop-shadow-2xl">
        <div
          onClick$={() => (tab.value = "about")}
          class={`flex flex-col items-center justify-center hover:text-[#F7CE3E] ease-in duration-300 cursor-pointer ${
            tab.value === "about" ? "text-[#F7CE3E]" : "text-[#C5C1C0]"
          }`}
        >
          <BsPerson class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">About</p>
        </div>
        <HorizontalSeparator />
        <div
          onClick$={() => (tab.value = "resume")}
          class={`flex flex-col items-center justify-center hover:text-[#F7CE3E] ease-in duration-300 cursor-pointer ${
            tab.value === "resume" ? "text-[#F7CE3E]" : "text-[#C5C1C0]"
          }`}
        >
          <BsList class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Resume</p>
        </div>
        <HorizontalSeparator />
        <div
          onClick$={() => (tab.value = "projects")}
          class={`flex flex-col items-center justify-center hover:text-[#F7CE3E] ease-in duration-300 cursor-pointer ${
            tab.value === "projects" ? "text-[#F7CE3E]" : "text-[#C5C1C0]"
          }`}
        >
          <BsPersonWorkspace class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Projects</p>
        </div>
        <HorizontalSeparator />
        <div
          onClick$={() => (tab.value = "links")}
          class={`flex flex-col items-center justify-center hover:text-[#F7CE3E] ease-in duration-300 cursor-pointer ${
            tab.value === "links" ? "text-[#F7CE3E]" : "text-[#C5C1C0]"
          }`}
        >
          <BsEye class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Links</p>
        </div>
        <HorizontalSeparator />
        <div
          onClick$={() => (tab.value = "contact")}
          class={`flex flex-col items-center justify-center hover:text-[#F7CE3E] ease-in duration-300 cursor-pointer ${
            tab.value === "contact" ? "text-[#F7CE3E]" : "text-[#C5C1C0]"
          }`}
        >
          <BsEnvelope class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Contact</p>
        </div>
      </div>
      <div class="w-full h-[550px] flex space-x-5 bg-[#1A2930] rounded-r-md overflow-auto p-5">
        {bodyContent}
      </div>
    </div>
  );
});
