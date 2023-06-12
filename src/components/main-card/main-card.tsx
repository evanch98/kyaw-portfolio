import { component$, useSignal } from "@builder.io/qwik";
import {
  BsPerson,
  BsPersonWorkspace,
  BsList,
  BsEye,
  BsEnvelope,
} from "@qwikest/icons/bootstrap";
import About from "../about/about";

export default component$(() => {
  const tab = useSignal("about");

  let bodyContent = <div>Loading</div>;

  if (tab.value === "about") {
    bodyContent = (
      <About />
    );
  } else if (tab.value === "resume") {
    bodyContent = (
      <div>Resume</div>
    );
  } else if (tab.value === "projects") {
    bodyContent = (
      <div>Projects</div>
    );
  } else if (tab.value === "links") {
    bodyContent = (
      <div>Links</div>
    );
  } else if (tab.value === "contact") {
    bodyContent = (
      <div>Contact</div>
    );
  }

  return (
    <div class="flex-1 flex items-start">
      <div class="flex h-[550px] flex-col items-center justify-evenly py-5 px-2 bg-[#E3DCD2] space-y-5 rounded-tl-md rounded-bl-md">
        <div
          onClick$={() => (tab.value = "about")}
          class={`flex flex-col items-center justify-center hover:text-[#CC8B65] ease-in duration-300 cursor-pointer ${
            tab.value === "about" ? "text-[#CC8B65]" : "text-[#100C0D]"
          }`}
        >
          <BsPerson class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">About</p>
        </div>
        <hr class="w-full border-solid border-1 border-[#100C0D]" />
        <div
          onClick$={() => (tab.value = "resume")}
          class={`flex flex-col items-center justify-center hover:text-[#CC8B65] ease-in duration-300 cursor-pointer ${
            tab.value === "resume" ? "text-[#CC8B65]" : "text-[#100C0D]"
          }`}
        >
          <BsList class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Resume</p>
        </div>
        <hr class="w-full border-solid border-1 border-[#100C0D]" />
        <div
          onClick$={() => (tab.value = "projects")}
          class={`flex flex-col items-center justify-center hover:text-[#CC8B65] ease-in duration-300 cursor-pointer ${
            tab.value === "projects" ? "text-[#CC8B65]" : "text-[#100C0D]"
          }`}
        >
          <BsPersonWorkspace class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Projects</p>
        </div>
        <hr class="w-full border-solid border-1 border-[#100C0D]" />
        <div
          onClick$={() => (tab.value = "links")}
          class={`flex flex-col items-center justify-center hover:text-[#CC8B65] ease-in duration-300 cursor-pointer ${
            tab.value === "links" ? "text-[#CC8B65]" : "text-[#100C0D]"
          }`}
        >
          <BsEye class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Links</p>
        </div>
        <hr class="w-full border-solid border-1 border-[#100C0D]" />
        <div
          onClick$={() => (tab.value = "contact")}
          class={`flex flex-col items-center justify-center hover:text-[#CC8B65] ease-in duration-300 cursor-pointer ${
            tab.value === "contact" ? "text-[#CC8B65]" : "text-[#100C0D]"
          }`}
        >
          <BsEnvelope class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Contact</p>
        </div>
      </div>
      <div class="w-full h-[550px] flex space-x-5 bg-[#013329] rounded-r-md overflow-auto p-5">
        {bodyContent}
      </div>
    </div>
  );
});
