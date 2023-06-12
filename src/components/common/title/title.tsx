import { component$ } from "@builder.io/qwik";

interface TitleProps {
  title: string;
}

export default component$((props: TitleProps) => {
  return (
    <div>{props.title}</div>
  );
});