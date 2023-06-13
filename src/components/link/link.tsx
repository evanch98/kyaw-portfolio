import { component$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import { Image } from "@unpic/qwik";
import { BsBoxArrowUpRight } from "@qwikest/icons/bootstrap";

const links = [
  {
    imgSrc: "https://www.svgrepo.com/show/516640/github.svg",
    title: "GitHub",
    desc: "Star my projects on GitHub",
    href: "https://github.com/evanch98",
  },
  {
    imgSrc: "https://www.svgrepo.com/show/517550/linkedin.svg",
    title: "LinkedIn",
    desc: "Let's connect on LinkedIn",
    href: "https://www.linkedin.com/in/kyaw-thu-0b3956212/",
  },
  {
    imgSrc: "https://www.svgrepo.com/show/515916/discord.svg",
    title: "Discord",
    desc: "Let's chat on Discord",
    href: "https://www.discordapp.com/users/442602474067722241",
  },
  {
    imgSrc: "https://www.svgrepo.com/show/515672/coursera.svg",
    title: "Coursera",
    desc: "Check out my Coursera profile",
    href: "https://www.coursera.org/user/6e101c026829121c0a96b17d4a7ba8f9",
  },
];

export default component$(() => {
  return (
    <div class="flex flex-col w-full">
      <Title title="Links" />
      <div class="flex flex-col space-y-2 mt-5 cursor-pointer">
        {links.map((link) => (
          <a
            key={link.title}
            class="w-full border-2 bg-[#C5C1C0] rounded-md pl-2 py-2 flex space-x-5 items-center justify-start group"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <div class="w-[64px]">
              <Image src={link.imgSrc} alt={link.title} layout="fullWidth" />
            </div>
            <div class="flex flex-col justify-center items-start text-black">
              <div class="flex items-center">
                <p class="font-semibold text-xl group-hover:text-[#1A2930] ease-in duration-300">
                  {link.title}
                </p>
                <BsBoxArrowUpRight class="w-[32px] opacity-0 group-hover:opacity-100 text-black ease-in duration-300" />
              </div>
              <p class="font-sm">{link.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
});