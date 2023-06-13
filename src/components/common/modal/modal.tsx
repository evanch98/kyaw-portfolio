import { Slot, component$ } from "@builder.io/qwik";
import Title from "../title/title";
import HorizontalSeparator from "../separators/horizontal-separator/horizontal-separator";
import { BsX } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class="absolute left-0 top-0 w-full h-full bg-black/70">
      <div class="absolute w-auto top-20 left-1/2 -translate-x-1/2 p-5 bg-[#1A2930] text-[#C5C1C0] rounded-md shadow-xl overflow-y-auto z-50">
        <div class="flex items-center justify-between">
          <Title title="Title" />
          <BsX class="w-[32px] h-auto cursor-pointer hover:text-[#F7CE3E] ease-in duration-300" />
        </div>
        <HorizontalSeparator />
        <Slot />
      </div>
    </div>
  );
});
