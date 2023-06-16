import { component$ } from "@builder.io/qwik";
import { BsPlusCircle } from "@qwikest/icons/bootstrap";
import { Image } from "@unpic/qwik";
import type { projectModalStore, projectObject } from "~/types/types";

interface ProjectBoxProps {
  projectModal: projectModalStore;
  project: projectObject;
  imgSrc: string;
  imgAlt: string;
}

export default component$((props: ProjectBoxProps) => {
  return (
    <div class="w-full flex flex-col items-center justify-center space-y-2">
      <div
        onClick$={() => {
          props.projectModal.open = true;
          props.projectModal.projectData = { ...props.project };
        }}
        class="relative group"
      >
        <Image
          src={props.imgSrc}
          width={300}
          height={148}
          alt={props.imgSrc}
          layout="constrained"
          class="group-hover:opacity-50 cursor-pointer ease-in duration-300"
        />
        <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
          <BsPlusCircle class="w-[52px] h-auto cursor-pointer" />
        </div>
      </div>
      <p class="text-lg font-semibold">{props.project.title}</p>
      <p class="text-sm">{props.project.tech[0]}</p>
    </div>
  );
});
