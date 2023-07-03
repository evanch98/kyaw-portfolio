import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { animate } from "motion";

export interface TitleProps {
  title: string;
}

export default component$((props: TitleProps) => {
  useVisibleTask$(() => {
    animate(".title", { opacity: [0, 1] }, { easing: "ease-in", duration: 1 });
  });
  return (
    <p class="title text-3xl first-letter:font-bold first-letter:underline first-letter:text-[#F7CE3E]">
      {props.title}
    </p>
  );
});
