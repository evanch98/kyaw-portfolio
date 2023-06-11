import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import {
  BsGithub,
  BsLinkedin,
  BsDiscord,
  BsEnvelopeFill,
  BsDownload,
} from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class="h-full flex flex-col bg-[#013329] rounded-md overflow-hidden">
      <section class="flex flex-col p-5 items-center justify-center">
        <Image
          src="/assets/avatar.png"
          layout="constrained"
          width={247}
          height={247}
          alt="An avatar image"
        />
        <h1 class="tracking-widest text-4xl text-[#CC8B65]">Kyaw Thu</h1>
        <p class="text-lg text-[#E3DCD2] mt-5">
          I am an aspiring front-end web developer.
        </p>
        <div class="flex items-center space-x-5 mt-5">
          <a
            class="cursor-pointer"
            href="https://github.com/evanch98"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub class="text-[#E3DCD2] w-[30px] h-auto hover:text-[#CC8B65] ease-in duration-300" />
          </a>
          <a
            class="cursor-pointer"
            href="https://www.linkedin.com/in/kyaw-thu-0b3956212/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin class="text-[#E3DCD2] w-[30px] h-auto hover:text-[#CC8B65] ease-in duration-300" />
          </a>
          <a
            class="cursor-pointer "
            href="https://www.discordapp.com/users/442602474067722241"
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord class="text-[#E3DCD2] w-[30px] h-auto hover:text-[#CC8B65] ease-in duration-300" />
          </a>
          <a class="cursor-pointer" href="mailto:evanch98@gmail.com">
            <BsEnvelopeFill class="text-[#E3DCD2] w-[30px] h-auto hover:text-[#CC8B65] ease-in duration-300" />
          </a>
        </div>
      </section>
      <section class="flex-1 flex items-center justify-between p-5 bg-[#E3DCD2]">
        <div class="flex items-center justify-center w-full space-x-5 text-[#100C0D] cursor-pointer hover:text-[#CC8B65] ease-in duration-300">
          <p>My Resume</p>
          <BsDownload />
        </div>
        <p class="text-[#100C0D]">|</p>
        <div class="flex items-center justify-center w-full space-x-5 text-[#100C0D] cursor-pointer hover:text-[#CC8B65] ease-in duration-300">
          <p>My LinkedIn</p>
          <BsLinkedin />
        </div>
      </section>
    </div>
  );
});
