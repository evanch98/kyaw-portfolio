import { component$ } from "@builder.io/qwik";
import { BsGithub, BsLinkedin, BsDiscord } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <footer class="flex items-center justify-between bg-[#1A2930] p-5">
      <section class="flex items-center justify-center space-x-5">
        <div class="text-[#C5C1C0] flex flex-col items-center justify-center">
          <h1 class="font-bold tracking-widest text-xl">About</h1>
          <p class="text-sm cursor-pointer hover:text-[#F7CE3E] ease-in duration-300">
            My story
          </p>
          <p class="text-sm cursor-pointer hover:text-[#F7CE3E] ease-in duration-300">
            About this website
          </p>
        </div>
        <div class="text-[#C5C1C0] flex flex-col items-center justify-center">
          <h1 class="font-bold tracking-widest text-xl">Contact</h1>
          <p class="text-sm cursor-pointer hover:text-[#F7CE3E] ease-in duration-300">
            Contact me
          </p>
          <div class="flex items-center justify-center space-x-1">
            <a
              class="cursor-pointer"
              href="https://github.com/evanch98"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub class="hover:text-[#F7CE3E] ease-in duration-300" />
            </a>
            <a
              class="cursor-pointer"
              href="https://www.linkedin.com/in/kyaw-thu-0b3956212/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin class="hover:text-[#F7CE3E] ease-in duration-300" />
            </a>
            <a
              class="cursor-pointer "
              href="https://www.discordapp.com/users/442602474067722241"
              target="_blank"
              rel="noreferrer"
            >
              <BsDiscord class="hover:text-[#F7CE3E] ease-in duration-300" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <p class="text-[#C5C1C0]">
          Designed and built by Kyaw Thu using Qwik, 2023 ⚡
        </p>
      </section>
    </footer>
  );
});
