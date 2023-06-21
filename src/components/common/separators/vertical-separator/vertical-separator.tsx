import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface VerticalSeparatorProps {
  class?: string;
}

export default component$((props: VerticalSeparatorProps) => {
  return (
    <div
      class={twMerge(
        "h-full bg-[#C5C1C0] w-0.5",
        props.class ? props.class : ""
      )}
    ></div>
  );
});
