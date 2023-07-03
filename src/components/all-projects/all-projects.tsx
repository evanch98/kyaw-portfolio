import { component$ } from "@builder.io/qwik";
import { IoLogoReact, IoPhonePortraitOutline } from "@qwikest/icons/ionicons";
import { BsGithub } from "@qwikest/icons/bootstrap";

const projects = [
  {
    title: "Simple Calculator (Android/Kotlin)",
    type: "mobile",
    sourceUrl: "https://github.com/evanch98/calculator-android-kotlin",
  },
  {
    title: "BMI Calculator (Android/Kotlin)",
    type: "mobile",
    sourceUrl: "https://github.com/evanch98/bmi-android-kotlin",
  },
  {
    title: "Spotify Clone (NextJS)",
    type: "web",
    sourceUrl: "https://github.com/evanch98/spotify-clone-nextjs",
  },
  {
    title: "Chess (JavaScript)",
    type: "web",
    sourceUrl: "https://github.com/evanch98/chess-javascript",
  },
  {
    title: "My Portfolio Website (Qwik)",
    type: "web",
    sourceUrl: "https://github.com/evanch98/kyaw-portfolio",
  },
  {
    title: "Share Prompts (NextJS)",
    type: "web",
    sourceUrl: "https://github.com/evanch98/share-prompts-nextjs",
  },
  {
    title: "Airbnb Clone (NextJS)",
    type: "web",
    sourceUrl: "https://github.com/evanch98/airbnb_clone_react",
  },
  {
    title: "Twitter Clone (Flutter)",
    type: "mobile",
    sourceUrl: "https://github.com/evanch98/twitter_clone",
  },
  {
    title: "Little Lemon (Android/Kotlin)",
    type: "mobile",
    sourceUrl: "https://github.com/evanch98/little-lemon",
  },
];

export default component$(() => {
  return (
    <div class="flex flex-col w-full lg:w-[640px] space-y-2">
      <div class="w-full bg-green-200 rounded-md text-black">
        <h3 class="font-bold text-lg text-center">
          Check out my projects on GitHub
        </h3>
        <p class="text-center">The details of each project can be found on the README file</p>
      </div>
      {projects.map((project) => (
        <div
          key={project.title}
          class="w-full p-2 flex items-center justify-start space-x-2 border-2 border-[#C5C1C0] rounded-md"
        >
          {project.type === "web" ? (
            <IoLogoReact class="w-[40px] h-auto" />
          ) : (
            <IoPhonePortraitOutline class="w-[40px] h-auto" />
          )}
          <div class="flex flex-col justify-center items-start">
            <p class="text-lg">{project.title}</p>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300 text-sm flex items-center justify-start space-x-1"
            >
              <p>GitHub</p>
              <BsGithub />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
