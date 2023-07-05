import { component$ } from "@builder.io/qwik";
import { IoLogoReact, IoPhonePortraitOutline } from "@qwikest/icons/ionicons";
import { BsGithub } from "@qwikest/icons/bootstrap";
import { allProjects } from "~/utils/allProjects";

const projects = allProjects;

export default component$(() => {
  return (
    <div class="flex flex-col w-full lg:w-[640px] space-y-2">
      <div class="w-full bg-[#C5C1C0] rounded-md text-black">
        <h3 class="font-bold text-lg text-center">
          Check out my projects on GitHub
        </h3>
        <p class="text-center">
          The details of each project can be found in the{" "}
          <span class="italic">README.md</span>
        </p>
      </div>
      {projects.map((project) => (
        <div
          key={project.title}
          class="w-full p-2 flex items-center justify-start space-x-2 border-2 border-[#C5C1C0] rounded-md"
        >
          {project.type === "web" ? (
            <IoLogoReact class="w-[40px] h-auto" />
          ) : (
            <IoPhonePortraitOutline class="w-[40px] h-auto" />
          )}
          <div class="flex flex-col justify-center items-start">
            <p class="text-lg font-bold">{project.title}</p>
            <p class="text-sm">{project.category}</p>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300 text-sm flex items-center justify-start space-x-1"
            >
              <p>GitHub</p>
              <BsGithub />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
