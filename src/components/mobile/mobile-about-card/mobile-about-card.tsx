import { component$ } from "@builder.io/qwik";
import HorizontalSeparator from "~/components/common/separators/horizontal-separator/horizontal-separator";
import Title from "~/components/common/title/title";

export default component$(() => {
  return (
    <div class="w-full mt-2 h-[450px] p-2 bg-[#1A2930] rounded-md flex flex-col overflow-y-auto">
      <Title title="About" />
      <HorizontalSeparator />
      <div class="flex flex-col text-[#C5C1C0] text-lg space-y-2">
        <p class="para">
          I have spent 7 years studying medicine at the University of Medicine
          1, Yangon. Due to several reasons, including pandemic, I had to drop
          out of the university. For as long as I can remember, I have always
          been into technology and working with computers. In 2021, I started
          learning programming with Python, which made me love programming even
          more.
        </p>
        <p class="para">
          After exploring several career options, I was quickly drawn to
          front-end web development. I started learning HTML and CSS to build
          simple websites. Fascinated with how intricate web development can be,
          I was quickly drawn to learn more. I started learning JavaScript and
          was even more enthused with making websites interactive. I am now
          spending my time building projects with React JS, Next JS, Tailwind
          CSS, and MongoDB and learning new technologies.
        </p>
        <p class="para">
          Apart from coding, I enjoy swimming. My favorite movie and TV show
          genres are Sci-fi and Sitcom. My favorite sport is soccer. My favorite
          team is Liverpool FC based in Liverpool, England. I also watch NBA
          occasionally. My favorite NBA team is Golden State Warriors.
        </p>
      </div>
    </div>
  );
});