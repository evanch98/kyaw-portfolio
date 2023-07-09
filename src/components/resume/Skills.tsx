import {
  IoChatboxOutline,
  IoGlobeOutline,
  IoLogoReact,
  IoPhonePortraitOutline,
} from "@qwikest/icons/ionicons";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";
import SkillsPercent from "../common/skills-percent/skills-percent";
import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

interface SkillsProps {
  frontEndOnClick: QRL<() => void>;
}

export default component$((props: SkillsProps) => {
  return (
    <>
      <div class="flex flex-col mt-5 space-y-6">
        <div class="flex flex-col lg:flex-row items-start justify-between">
          <section class="w-full flex flex-col items-center justify-center">
            <div
              onClick$={props.frontEndOnClick}
              class="flex justify-center items-center space-x-2 cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
            >
              <h1 class="text-xl font-bold">Front-End</h1>
              <IoLogoReact class="w-[24px] h-auto" />
            </div>
            <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 px-20">
              <SkillsPercent skill="Next JS" percent="70%" />
              <SkillsPercent skill="Qwik" percent="80%" />
              <SkillsPercent skill="Tailwind CSS" percent="80%" />
              <SkillsPercent skill="TypeScript" percent="75%" />
            </div>
          </section>
          <HorizontalSeparator class="lg:hidden w-10 self-center" />
          <VerticalSeparator class="hidden lg:flex" />
          <section class="w-full flex flex-col items-center justify-center">
            <div class="flex justify-center items-center space-x-2">
              <h1 class="text-xl font-bold">Mobile</h1>
              <IoPhonePortraitOutline class="w-[24px] h-auto" />
            </div>
            <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 px-20">
              <SkillsPercent skill="Dart" percent="70%" />
              <SkillsPercent skill="Flutter" percent="70%" />
              <SkillsPercent skill="Kotlin" percent="60%" />
              <SkillsPercent skill="Jetpack Compose" percent="50%" />
            </div>
          </section>
        </div>
        <HorizontalSeparator class="w-10 self-center" />
        <div class="flex flex-col lg:flex-row items-start justify-between">
          <section class="w-full flex flex-col items-center justify-center">
            <div class="flex justify-center items-center space-x-2">
              <h1 class="text-xl font-bold">Languages</h1>
              <IoChatboxOutline class="w-[24px] h-auto" />
            </div>
            <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 px-20">
              <SkillsPercent skill="Burmese" percent="100%" />
              <SkillsPercent skill="English" percent="85%" />
              <SkillsPercent skill="Traditional Chinese" percent="35%" />
            </div>
          </section>
          <HorizontalSeparator class="lg:hidden w-10 self-center" />
          <VerticalSeparator class="hidden lg:flex" />
          <section class="w-full flex flex-col items-center justify-center">
            <div class="flex justify-center items-center space-x-2">
              <h1 class="text-xl font-bold">Soft Skills</h1>
              <IoGlobeOutline class="w-[24px] h-auto" />
            </div>
            <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 px-20">
              <ul class="list-disc">
                <li>Strong problem solving and analytic skills</li>
                <li>Ability to learn new technologies quickly</li>
                <li>Good communication skills</li>
                <li>Willingness to explore and learn</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
});
