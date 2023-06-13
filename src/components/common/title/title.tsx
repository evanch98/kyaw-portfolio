import { component$ } from "@builder.io/qwik";

interface TitleProps {
  title: string;
}

export default component$((props: TitleProps) => {
  return (
    <p class="text-3xl first-letter:font-bold first-letter:underline first-letter:text-[#F7CE3E]">
      {props.title}
    </p>
  );
});