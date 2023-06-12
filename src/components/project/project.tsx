import { component$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import { Image } from "@unpic/qwik";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";

export default component$(() => {
  return (
    <div class="flex flex-col w-full text-[#E3DCD2]">
      <Title title="Projects" />
      <div class="flex flex-col mt-5 space-y-6">
        <div class="flex items-start justify-between">
          <div class="w-full flex flex-col items-center justify-center">
            <div class="relative">
              <Image
                src="/projects/airbnb.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
              />
            </div>
          </div>
          <VerticalSeparator />
          <div class="w-full flex flex-col items-center justify-center">
            <div class="relative">
              <Image
                src="/projects/share_prompts.png"
                width={300}
                height={148}
                alt="airbnb"
                layout="constrained"
              />
            </div>
          </div>
        </div>
        <div class="flex items-start justify-between"></div>
      </div>
    </div>
  );
});
