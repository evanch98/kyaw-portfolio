import { component$ } from "@builder.io/qwik";
import { IoLogoReact } from "@qwikest/icons/ionicons";

const skills: { title: string; skills: string }[] = [
  { title: "Qwik", skills: "80%" },
  { title: "React", skills: "80%" },
  { title: "Tailwind CSS", skills: "80%" },
  { title: "JavaScript", skills: "75%" },
  { title: "TypeScript", skills: "75%" },
  { title: "Next JS", skills: "70%" },
  { title: "CSS", skills: "70%" },
  { title: "HTML", skills: "70%" },
  { title: "Astro", skills: "30%" },
];

export default component$(() => {
  return (
    <div class="flex flex-col w-[640px]">
      <div class="flex flex-col items-start justify-start space-y-5">
        <div class="flex justify-center items-center space-x-2">
          <h1 class="text-xl font-bold">Front-End Skills</h1>
          <IoLogoReact class="w-[24px] h-auto" />
        </div>
        <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5">
          {skills.map((skill) => (
            <div key={skill.title} class="flex flex-col w-full space-y-1">
              <p>{skill.title}</p>
              <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                <div
                  class="h-[5.5px] bg-[#F7CE3E]"
                  style={`width: ${skill.skills}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
