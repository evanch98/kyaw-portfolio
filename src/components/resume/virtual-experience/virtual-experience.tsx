import { component$ } from "@builder.io/qwik";

interface VirtualExperienceProps {
  title: string;
  company: string;
  date: string;
  url: string;
}

export default component$((props: VirtualExperienceProps) => {
  return (
    <div class="mt-5">
      <a href={props.url} target="_blank" rel="noreferrer" class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300">
        {props.title}
      </a>
      <p>{props.company}</p>
      <p>{props.date}</p>
    </div>
  );
});
