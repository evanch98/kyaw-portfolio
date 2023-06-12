import { component$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import { Image } from "@unpic/qwik";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";
import { BsPlusCircle } from "@qwikest/icons/bootstrap";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";

export default component$(() => {
  return (
    <div class="flex flex-col w-full text-[#E3DCD2]">
      <Title title="Projects" />
      <div class="flex flex-col mt-5 space-y-6">
        <div class="flex items-start justify-between">
          <div class="w-full flex flex-col items-center justify-center space-y-2">
            <div class="relative group">
              <Image
                src="/projects/airbnb.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
                class="group-hover:opacity-50 cursor-pointer ease-in duration-300"
              />
              <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CC8B65]">
                <BsPlusCircle class="w-[52px] h-auto" />
              </div>
            </div>
            <p class="text-lg font-semibold">Airbnb Clone</p>
            <p class="text-sm">Project</p>
          </div>
          <VerticalSeparator />
          <div class="w-full flex flex-col items-center justify-center space-y-2">
            <div class="relative group">
              <Image
                src="/projects/share_prompts.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
                class="group-hover:opacity-70 cursor-pointer ease-in duration-300"
              />
              <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CC8B65]">
                <BsPlusCircle class="w-[52px] h-auto" />
              </div>
            </div>
            <p class="text-lg font-semibold">Share Prompts</p>
            <p class="text-sm">Project</p>
          </div>
        </div>
        <div class="flex items-start justify-between">
          <div class="w-full flex flex-col items-center justify-center space-y-2">
            <div class="relative group">
              <Image
                src="/projects/airbnb.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
                class="group-hover:opacity-50 cursor-pointer ease-in duration-300"
              />
              <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CC8B65]">
                <BsPlusCircle class="w-[52px] h-auto" />
              </div>
            </div>
            <p class="text-lg font-semibold">Airbnb Clone</p>
            <p class="text-sm">Project</p>
          </div>
          <VerticalSeparator />
          <div class="w-full flex flex-col items-center justify-center space-y-2">
            <div class="relative group">
              <Image
                src="/projects/share_prompts.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
                class="group-hover:opacity-70 cursor-pointer ease-in duration-300"
              />
              <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CC8B65]">
                <BsPlusCircle class="w-[52px] h-auto" />
              </div>
            </div>
            <p class="text-lg font-semibold">Share Prompts</p>
            <p class="text-sm">Project</p>
          </div>
        </div>
      </div>
      <HorizontalSeparator />
      <p class="pb-2 text-lg cursor-pointer hover:text-[#CC8B65] ease-in duration-300">See all projects</p>
    </div>
  );
});
