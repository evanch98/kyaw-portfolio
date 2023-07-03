import { component$ } from "@builder.io/qwik";

export interface TitleProps {
  title: string;
}

export default component$((props: TitleProps) => {
  
  return (
    <p class="title text-3xl first-letter:font-bold first-letter:underline text-[#C5C1C0] first-letter:text-[#F7CE3E]">
      {props.title}
    </p>
  );
});
