import { component$ } from "@builder.io/qwik";
import { IoLogoReact } from "@qwikest/icons/ionicons";

export default component$(() => {
  return (
    <div class="flex flex-col w-[640px]">
      <div class="flex flex-col items-start justify-start space-y-5">
        <div class="flex justify-center items-center space-x-2 cursor-pointer">
          <h1 class="text-xl font-bold">Front-End Skills</h1>
          <IoLogoReact class="w-[24px] h-auto" />
        </div>
        <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5">
          <div class="flex flex-col w-full space-y-1">
            <p>Next JS</p>
            <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
              <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 70%"></div>
            </div>
          </div>
          <div class="flex flex-col w-full space-y-1">
            <p>Qwik</p>
            <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
              <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 80%"></div>
            </div>
          </div>
          <div class="flex flex-col w-full space-y-1">
            <p>Tailwind CSS</p>
            <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
              <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 80%"></div>
            </div>
          </div>
          <div class="flex flex-col w-full space-y-1">
            <p>TypeScript</p>
            <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
              <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 75%"></div>
            </div>
          </div>
          <div class="flex flex-col w-full space-y-1">
            <p>TypeScript</p>
            <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
              <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 75%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
