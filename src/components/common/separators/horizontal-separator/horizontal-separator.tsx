import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";


interface HorizontalSeparatorProps {
  class?: string;
}

export default component$((props: HorizontalSeparatorProps) => {
  return (
    <hr
      class={twMerge(
        "w-full border-solid border-1 border-[#C5C1C0] my-5",
        props.class ? props.class : ""
      )}
    />
  );
});
