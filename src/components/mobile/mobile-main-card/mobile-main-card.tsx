import { component$ } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import About from "~/components/about/about";
import Contact from "~/components/contact/contact";
import Link from "~/components/link/link";
import Project from "~/components/project/project";
import Resume from "~/components/resume/resume";

interface MobileMainCardProps {
  content: string;
}

export default component$((props: MobileMainCardProps) => {
  let bodyContent: JSX.Element = <div>Loading</div>;

  if (props.content === "about") {
    bodyContent = <About />;
  } else if (props.content === "resume") {
    bodyContent = <Resume />;
  } else if (props.content === "projects") {
    bodyContent = <Project />;
  } else if (props.content === "link") {
    bodyContent = <Link />;
  } else if (props.content === "contact") {
    bodyContent = <Contact />;
  }

  return (
    <div
      id="mobile-about"
      class="w-full mt-3 h-full p-2 bg-[#1A2930] rounded-md flex flex-col"
    >
      {bodyContent}
    </div>
  );
});
