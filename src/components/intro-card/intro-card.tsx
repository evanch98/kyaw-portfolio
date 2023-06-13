import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
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

export default component$(() => {
  const modal = useSignal(false);
  useVisibleTask$(() => {
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
    <div class="h-[550px] flex flex-col bg-[#1A2930] rounded-md overflow-hidden px-5">
      {modal.value && <Modal><ProjectTemplate /></Modal>}
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
      </section>
      <HorizontalSeparator />
      <section class="flex items-center justify-between px-5 pb-5 bg-[#1A2930]">
        <div class="flex items-center justify-center w-full space-x-2 text-[#C5C1C0] cursor-pointer group">
          <a
            href="/resume.pdf"
            download={true}
            class="group-hover:text-[#F7CE3E] ease-in duration-300"
          >
            My Resume
          </a>
          <BsDownload class="group-hover:text-[#F7CE3E] ease-in duration-300 group-hover:translate-x-1" />
        </div>
        <VerticalSeparator />
        <div
          onClick$={() => (modal.value = true)}
          class="flex items-center justify-center w-full space-x-2 text-[#C5C1C0] cursor-pointer group"
        >
          <p class="group-hover:text-[#F7CE3E] ease-in duration-300">
            Website's Info
          </p>
          <BsInfoCircleFill class="group-hover:text-[#F7CE3E] ease-in duration-300 group-hover:translate-x-1" />
        </div>
      </section>
    </div>
  );
});
