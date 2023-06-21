import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { BsDiscord, BsDownload, BsEnvelopeFill, BsGithub, BsLinkedin } from "@qwikest/icons/bootstrap";
import { Image } from "@unpic/qwik";
import { animate } from "motion";
import HorizontalSeparator from "~/components/common/separators/horizontal-separator/horizontal-separator";
import { easeOutElastic } from "~/utils/easing";

export default component$(() => {
  useVisibleTask$(() => {
    animate(
      ".mobile-icon",
      { rotate: [0, -90, 90, 0] },
      {
        easing: easeOutElastic,
        duration: 4,
      }
    );
  });
  return (
    <div class="w-full p-2 bg-[#1A2930] rounded-md flex flex-col items-center justify-center">
      <Image
        src="/assets/avatar.png"
        height={150}
        width={150}
        alt="An avatar image"
      />
      <h1 class="tracking-widest text-2xl text-[#F7CE3E]">Kyaw Thu</h1>
      <p class="text-base text-[#C5C1C0] mt-2">
        I am an aspiring front-end web developer.
      </p>
      <p class="text-sm text-[#C5C1C0] mt-2">
        Let's build something legendary together.
      </p>
      <div class="flex items-center space-x-5 mt-5">
        <a
          class="cursor-pointer"
          href="https://github.com/evanch98"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub class="mobile-icon text-[#C5C1C0] w-[24px] h-auto hover:text-[#F7CE3E] ease-in duration-300" />
        </a>
        <a
          class="cursor-pointer"
          href="https://www.linkedin.com/in/kyaw-thu-0b3956212/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin class="mobile-icon text-[#C5C1C0] w-[24px] h-auto hover:text-[#F7CE3E] ease-in duration-300" />
        </a>
        <a
          class="cursor-pointer "
          href="https://www.discordapp.com/users/442602474067722241"
          target="_blank"
          rel="noreferrer"
        >
          <BsDiscord class="mobile-icon text-[#C5C1C0] w-[24px] h-auto hover:text-[#F7CE3E] ease-in duration-300" />
        </a>
        <a class="cursor-pointer" href="mailto:evanch98@gmail.com">
          <BsEnvelopeFill class="mobile-icon text-[#C5C1C0] w-[24px] h-auto hover:text-[#F7CE3E] ease-in duration-300" />
        </a>
      </div>
      <HorizontalSeparator />
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
    </div>
  );
});
