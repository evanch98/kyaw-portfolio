import { component$, useVisibleTask$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import {
  IoFootballOutline,
  IoWaterOutline,
  IoBookOutline,
  IoVideocamOutline,
} from "@qwikest/icons/ionicons";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import { animate, spring, stagger } from "motion";

// About component
// It contains the information about me
export default component$(() => {
  useVisibleTask$(() => {
    animate("#about", { opacity: [0, 1] }, { easing: "ease-in", duration: 1 });
    animate(
      ".para",
      { x: [-1000, 0] },
      { easing: spring({ velocity: 50, stiffness: 50 }), delay: stagger(0.15) }
    );
  });
  return (
    <div id="about" class="flex flex-col">
      <Title title="About" />
      <article class="flex flex-col text-[#C5C1C0] text-lg mt-5 space-y-5">
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
      </article>
      <section class="hidden lg:flex flex-col">
        <HorizontalSeparator />
        <Title title="Fun Facts" />
        <div class="fun flex items-center justify-between mt-5 pb-2">
          <div class="flex flex-col items-center justify-center">
            <IoFootballOutline class="w-[28px] h-auto mb-2" />
            <h1 class="text-lg font-semibold">Favorite Sport</h1>
            <p class="text-sm">Soccer</p>
          </div>
          <VerticalSeparator />
          <div class="flex flex-col items-center justify-center">
            <IoWaterOutline class="w-[28px] h-auto mb-2" />
            <h1 class="text-lg font-semibold">Favorite Activity</h1>
            <p class="text-sm">Swimming</p>
          </div>
          <VerticalSeparator />
          <div class="flex flex-col items-center justify-center">
            <IoBookOutline class="w-[28px] h-auto mb-2" />
            <h1 class="text-lg font-semibold">Favorite Book</h1>
            <p class="text-sm">Wonder</p>
          </div>
          <VerticalSeparator />
          <div class="flex flex-col items-center justify-center">
            <IoVideocamOutline class="w-[28px] h-auto mb-2" />
            <h1 class="text-lg font-semibold">Favorite TV Show</h1>
            <p class="text-sm">Breaking Bad</p>
          </div>
        </div>
      </section>
    </div>
  );
});
