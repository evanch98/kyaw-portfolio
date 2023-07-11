import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useVisibleTask$ } from "@builder.io/qwik";
import Title from "../title/title";
import HorizontalSeparator from "../separators/horizontal-separator/horizontal-separator";
import { BsX } from "@qwikest/icons/bootstrap";
import { animate } from "motion";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  title: string;
  onClose: QRL<() => void>;
  class?: string;
}

export default component$((props: ModalProps) => {
  useVisibleTask$(() => {
    animate("#modal", { opacity: [0, 1] }, { easing: "ease-in", duration: 1 });
  });
  return (
    <div
      class={twMerge(
        "absolute flex left-0 top-0 w-full h-full bg-black/70 z-50",
        props.class
      )}
    >
      <div
        id="modal"
        class="absolute flex flex-col w-full mx-2 lg:w-auto max-h-[600px] top-20 left-1/2 -translate-x-1/2 p-5 bg-[#1A2930] text-[#C5C1C0] rounded-md shadow-xl overflow-y-auto"
      >
        <div class="flex items-center justify-between">
          <Title title={props.title} />
          <BsX
            onClick$={props.onClose}
            class="w-[32px] h-auto cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
          />
        </div>
        <HorizontalSeparator />
        <Slot />
      </div>
    </div>
  );
});
