import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import {
  BsGithub,
  BsLinkedin,
  BsDiscord,
  BsEnvelopeFill,
  BsDownload,
  BsInfoCircleFill,
} from "@qwikest/icons/bootstrap";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import { animate } from "motion";
import { easeOutElastic } from "~/utils/easing";
import Modal from "../common/modal/modal";
import ProjectTemplate from "../common/project-template/project-template";
import { portfolioWebsite } from "~/utils/projects";

export default component$(() => {
  /* to be used to open and close the modal */
  const modal = useSignal(false);
  /* handle the onClose function for the modal */
  const onClose = $(() => {
    modal.value = false;
  });
  /* this part is for the animation */
  useVisibleTask$(() => {
    /* 
      the following codes rotate the dev icons of the intro card
      the duration is 4 seconds
      the easing is easeOutElastic
     */
    animate(
      ".icon",
      { rotate: [0, -90, 90, 0] },
      {
        easing: easeOutElastic,
        duration: 4,
      }
    );
  });
  return (
    <div class="h-[550px] flex flex-col bg-[#1A2930] rounded-md overflow-hidden px-5 shadow-xl">
      {/* The Modal component will only be rendered if the value of the modal is true */}
      {modal.value && (
        /* change the info of the website in the ~/utils/projects.ts file */
        <Modal title={portfolioWebsite.title} onClose={onClose}>
          <ProjectTemplate
            sourceSrc={portfolioWebsite.sourceSrc}
            liveSrc={portfolioWebsite.liveSrc}
            date={portfolioWebsite.date}
            category={portfolioWebsite.category}
            tech={portfolioWebsite.tech}
            desc={portfolioWebsite.desc}
          />
        </Modal>
      )}
      {/* Main section of the IntroCard */}
      <section class="flex-1 flex flex-col p-5 items-center justify-center">
        <Image
          src="/assets/avatar.png"
          layout="constrained"
          width={247}
          height={247}
          alt="An avatar image"
        />
        <h1 class="tracking-widest text-4xl text-[#F7CE3E]">Kyaw Thu</h1>
        <p class="text-lg text-[#C5C1C0] mt-5">
          I am an aspiring front-end web developer.
        </p>
        <p class="text-sm text-[#C5C1C0] mt-3">
          Let's build something legendary together.
        </p>
        {/* Dev icons START */}
        <div class="flex items-center space-x-5 mt-5">
          <a
            class="cursor-pointer"
            href="https://github.com/evanch98"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub class="icon text-[#C5C1C0] w-[30px] h-auto hover:text-[#F7CE3E] ease-in duration-300" />
          </a>
          <a
            class="cursor-pointer"
            href="https://www.linkedin.com/in/kyaw-thu-0b3956212/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin class="icon text-[#C5C1C0] w-[30px] h-auto hover:text-[#F7CE3E] ease-in duration-300" />
          </a>
          <a
            class="cursor-pointer "
            href="https://www.discordapp.com/users/442602474067722241"
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord class="icon text-[#C5C1C0] w-[30px] h-auto hover:text-[#F7CE3E] ease-in duration-300" />
          </a>
          <a class="cursor-pointer" href="mailto:evanch98@gmail.com">
            <BsEnvelopeFill class="icon text-[#C5C1C0] w-[30px] h-auto hover:text-[#F7CE3E] ease-in duration-300" />
          </a>
        </div>
        {/* Dev icons END */}
      </section>
      <HorizontalSeparator />
      {/* Footer of the IntroCard if you will */}
      <section class="flex items-center justify-between px-5 pb-5 bg-[#1A2930]">
        <div class="flex items-center justify-center w-full space-x-2 text-[#C5C1C0] cursor-pointer group">
          <a
            href="https://drive.google.com/file/d/10mhxA0iDtQLDJPP7a3Ndiyl9RjExcT9o/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            class="group-hover:text-[#F7CE3E] ease-in duration-300"
          >
            My Resume
          </a>
          <BsDownload class="group-hover:text-[#F7CE3E] group-hover:animate-bounce ease-in duration-300" />
        </div>
        <VerticalSeparator />
        {/* onClick function will set the value of the modal to true resulting in rendering the Modal component */}
        <div
          onClick$={() => (modal.value = true)}
          class="flex items-center justify-center w-full space-x-2 text-[#C5C1C0] cursor-pointer group"
        >
          <p class="group-hover:text-[#F7CE3E] ease-in duration-300">
            Website's Info
          </p>
          <BsInfoCircleFill class="group-hover:text-[#F7CE3E] group-hover:animate-bounce ease-in duration-300" />
        </div>
      </section>
    </div>
  );
});
