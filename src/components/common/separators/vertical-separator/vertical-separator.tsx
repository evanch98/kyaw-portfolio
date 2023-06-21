import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface VerticalSeparatorProps {
  className?: string;
}

export default component$((props: VerticalSeparatorProps) => {
  return (
    <div
      class={twMerge(
        "h-full bg-[#C5C1C0] w-0.5",
        props.className ? props.className : ""
      )}
    ></div>
  );
});
