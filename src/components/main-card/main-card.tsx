import { component$ } from "@builder.io/qwik";
import { BsPerson, BsPersonWorkspace, BsList, BsEye, BsEnvelope } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class="flex-1 w-full h-[550px] flex bg-[#013329] rounded-md overflow-auto">
      <div class="flex flex-col items-center justify-evenly py-5 px-2 bg-[#E3DCD2] space-y-5 rounded-tl-md rounded-bl-md">
        <div class="flex flex-col items-center justify-center text-[#100C0D] hover:text-[#CC8B65] ease-in duration-300 cursor-pointer">
          <BsPerson class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">About</p>
        </div>
        <hr class="w-full border-solid border-1 border-[#100C0D]" />
        <div class="flex flex-col items-center justify-center text-[#100C0D] hover:text-[#CC8B65] ease-in duration-300 cursor-pointer">
          <BsList class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Resume</p>
        </div>
        <hr class="w-full border-solid border-1 border-[#100C0D]" />
        <div class="flex flex-col items-center justify-center text-[#100C0D] hover:text-[#CC8B65] ease-in duration-300 cursor-pointer">
          <BsPersonWorkspace class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Projects</p>
        </div>
        <hr class="w-full border-solid border-1 border-[#100C0D]" />
        <div class="flex flex-col items-center justify-center text-[#100C0D] hover:text-[#CC8B65] ease-in duration-300 cursor-pointer">
          <BsEye class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Links</p>
        </div>
        <hr class="w-full border-solid border-1 border-[#100C0D]" />
        <div class="flex flex-col items-center justify-center text-[#100C0D] hover:text-[#CC8B65] ease-in duration-300 cursor-pointer">
          <BsEnvelope class="w-[32px] h-auto" />
          <p class="tracking-widest text-sm">Links</p>
        </div>
      </div>
    </div>
  );
});
