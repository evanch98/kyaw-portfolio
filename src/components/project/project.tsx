import {
  $,
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import Title from "../common/title/title";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import { project1, project2, project3, project4 } from "~/utils/projects";
import Modal from "../common/modal/modal";
import ProjectTemplate from "../common/project-template/project-template";
import AllProjects from "../all-projects/all-projects";
import { animate } from "motion";
import type { projectModalStore } from "~/types/types";
import ProjectBox from "../common/project-box/project-box";

export default component$(() => {
  useVisibleTask$(() => {
    animate(
      "#project",
      { opacity: [0, 1] },
      { easing: "ease-in", duration: 1 }
    );
  });
  const projectModal: projectModalStore = useStore({} as projectModalStore);
  const allProjectsModal = useSignal(false);
  const onAllProjectsModalClose = $(() => {
    allProjectsModal.value = false;
  });
  const onProjectModalClose = $(() => {
    projectModal.open = false;
  });
  return (
    <div id="project" class="flex flex-col w-full text-[#C5C1C0]">
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
            deployedOn={projectModal.projectData.deployedOn}
          />
        </Modal>
      )}
      {allProjectsModal.value && (
        <Modal title="All Projects" onClose={onAllProjectsModalClose}>
          <AllProjects />
        </Modal>
      )}
      <Title title="Projects" />
      {/* Projects section START */}
      <div class="flex flex-col mt-5 space-y-6">
        <div class="flex flex-col lg:flex-row items-start justify-between">
          {/* Project 1 */}
          <ProjectBox
            projectModal={projectModal}
            project={project1}
            imgSrc="/projects/airbnb.png"
            imgAlt="airbnb"
          />
          <HorizontalSeparator class="lg:hidden w-10 self-center" />
          <VerticalSeparator class="hidden lg:flex" />
          {/* Project 2 */}
          <ProjectBox
            projectModal={projectModal}
            project={project2}
            imgSrc="/projects/share_prompts.png"
            imgAlt="share prompts"
          />
        </div>
        <HorizontalSeparator class="lg:hidden w-10 self-center" />
        <div class="flex flex-col lg:flex-row items-start justify-between">
          {/* Project 3 */}
          <ProjectBox
            projectModal={projectModal}
            project={project3}
            imgSrc="/projects/chess.png"
            imgAlt="furry coats"
          />
          <HorizontalSeparator class="lg:hidden w-10 self-center" />
          <VerticalSeparator class="hidden lg:flex" />
          {/* Project 4 */}
          <ProjectBox
            projectModal={projectModal}
            project={project4}
            imgSrc="/projects/airbnb.png"
            imgAlt="spotify"
          />
        </div>
      </div>
      {/* Projects section END */}
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
