import { component$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import { IoFootballOutline, IoWaterOutline, IoBookOutline, IoVideocamOutline } from "@qwikest/icons/ionicons";

export default component$(() => {
  return (
    <div class="flex flex-col pr-5">
      <Title title="About" />
      <div class="flex flex-col text-[#E3DCD2] text-lg mt-5 space-y-5">
        <p>
          I have spent 7 years studying medicine at the University of Medicine
          1, Yangon. Due to several reasons, including pandemic, I had to drop
          out of the university. For as long as I can remember, I have always
          been into technology and working with computers. In 2021, I started
          learning programming with Python, which made me love programming even
          more.
        </p>
        <p>
          After exploring several career options, I was quickly drawn to
          front-end web development. I started learning HTML and CSS to build
          simple websites. Fascinated with how intricate web development can be,
          I was quickly drawn to learn more. I started learning JavaScript and
          was even more enthused with making websites interactive. I am now
          spending my time building projects with React JS, Next JS, Tailwind
          CSS, and MongoDB and learning new technologies.
        </p>
        <p>
          Apart from coding, I enjoy swimming. My favorite movie and TV show
          genres are Sci-fi and Sitcom. My favorite sport is soccer. My favorite
          team is Liverpool FC based in Liverpool, England. I also watch NBA
          occasionally. My favorite NBA team is Golden State Warriors.
        </p>
      </div>
      <hr class="w-full border-solid border-1 border-[#E3DCD2] my-5" />
      <Title title="Fun Facts" />
      <div class="flex items-center justify-between mt-5 pb-2">
        <div class="flex flex-col items-center justify-center">
          <IoFootballOutline class="w-[28px] h-auto mb-2" />
          <h1 class="text-lg font-semibold">Favorite Sport</h1>
          <p class="text-sm">Soccer</p>
        </div>
        <div class="h-20 bg-[#E3DCD2] w-0.5"></div>
        <div class="flex flex-col items-center justify-center">
          <IoWaterOutline class="w-[28px] h-auto mb-2" />
          <h1 class="text-lg font-semibold">Favorite Activity</h1>
          <p class="text-sm">Swimming</p>
        </div>
        <div class="h-20 bg-[#E3DCD2] w-0.5"></div>
        <div class="flex flex-col items-center justify-center">
          <IoBookOutline class="w-[28px] h-auto mb-2" />
          <h1 class="text-lg font-semibold">Favorite Book</h1>
          <p class="text-sm">Wonder</p>
        </div>
        <div class="h-full bg-[#E3DCD2] w-0.5"></div>
        <div class="flex flex-col items-center justify-center">
          <IoVideocamOutline class="w-[28px] h-auto mb-2" />
          <h1 class="text-lg font-semibold">Favorite TV Show</h1>
          <p class="text-sm">Breaking Bad</p>
        </div>
      </div>
    </div>
  );
});
