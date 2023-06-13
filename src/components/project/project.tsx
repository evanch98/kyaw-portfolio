import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import Title from "../common/title/title";
import { Image } from "@unpic/qwik";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";
import { BsPlusCircle } from "@qwikest/icons/bootstrap";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import { project1, project2 } from "~/utils/projects";
import Modal from "../common/modal/modal";
import ProjectTemplate from "../common/project-template/project-template";
import AllProjects from "../all-projects/all-projects";

export default component$(() => {
  const projectModal = useStore({
    open: false,
    projectData: {
      title: "",
      sourceSrc: "",
      liveSrc: "",
      date: "",
      category: "",
      tech: [""],
      desc: [""],
    },
  });
  const allProjectsModal = useSignal(false);
  const onAllProjectsModalClose = $(() => {
    allProjectsModal.value = false;
  });
  const onProjectModalClose = $(() => {
    projectModal.open = false;
  });
  return (
    <div class="flex flex-col w-full text-[#C5C1C0]">
      {projectModal.open && (
        <Modal
          title={projectModal.projectData.title}
          onClose={onProjectModalClose}
        >
          <ProjectTemplate
            sourceSrc={projectModal.projectData.sourceSrc}
            liveSrc={projectModal.projectData.liveSrc}
            date={projectModal.projectData.date}
            category={projectModal.projectData.category}
            tech={projectModal.projectData.tech}
            desc={projectModal.projectData.desc}
          />
        </Modal>
      )}
      {allProjectsModal.value && (
        <Modal title="All Projects" onClose={onAllProjectsModalClose}>
          <AllProjects />
        </Modal>
      )}
      <Title title="Projects" />
      <div class="flex flex-col mt-5 space-y-6">
        <div class="flex items-start justify-between">
          {/* Project 1 */}
          <div class="w-full flex flex-col items-center justify-center space-y-2">
            <div
              onClick$={() => {
                projectModal.open = true;
                projectModal.projectData = { ...project1 };
              }}
              class="relative group"
            >
              <Image
                src="/projects/airbnb.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
                class="group-hover:opacity-50 cursor-pointer ease-in duration-300"
              />
              <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                <BsPlusCircle class="w-[52px] h-auto cursor-pointer" />
              </div>
            </div>
            <p class="text-lg font-semibold">Airbnb Clone</p>
            <p class="text-sm">Project</p>
          </div>
          <VerticalSeparator />
          {/* Project 2 */}
          <div class="w-full flex flex-col items-center justify-center space-y-2">
            <div
              onClick$={() => {
                projectModal.open = true;
                projectModal.projectData = { ...project2 };
              }}
              class="relative group"
            >
              <Image
                src="/projects/share_prompts.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
                class="group-hover:opacity-70 cursor-pointer ease-in duration-300"
              />
              <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                <BsPlusCircle class="w-[52px] h-auto cursor-pointer" />
              </div>
            </div>
            <p class="text-lg font-semibold">Share Prompts</p>
            <p class="text-sm">Project</p>
          </div>
        </div>
        <div class="flex items-start justify-between">
          <div class="w-full flex flex-col items-center justify-center space-y-2">
            <div class="relative group">
              <Image
                src="/projects/airbnb.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
                class="group-hover:opacity-50 cursor-pointer ease-in duration-300"
              />
              <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                <BsPlusCircle class="w-[52px] h-auto" />
              </div>
            </div>
            <p class="text-lg font-semibold">Airbnb Clone</p>
            <p class="text-sm">Project</p>
          </div>
          <VerticalSeparator />
          <div class="w-full flex flex-col items-center justify-center space-y-2">
            <div class="relative group">
              <Image
                src="/projects/share_prompts.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
                class="group-hover:opacity-70 cursor-pointer ease-in duration-300"
              />
              <div class="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                <BsPlusCircle class="w-[52px] h-auto" />
              </div>
            </div>
            <p class="text-lg font-semibold">Share Prompts</p>
            <p class="text-sm">Project</p>
          </div>
        </div>
      </div>
      <HorizontalSeparator />
      <p
        onClick$={() => {
          allProjectsModal.value = true;
        }}
        class="pb-2 text-lg cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
      >
        See all projects
      </p>
    </div>
  );
});
