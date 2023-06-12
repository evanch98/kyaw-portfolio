import { component$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import { BsMortarboard } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class="flex flex-col w-full pr-5 text-[#E3DCD2]">
      <Title title="Resume" />
      <div class="flex items-start justify-between mt-5">
        <section class="w-full flex flex-col items-center justify-center text-lg">
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-bold">Degree</h1>
            <BsMortarboard class="w-[24px] h-auto" />
          </div>
          <div class="flex flex-col items-center justify-center mt-5">
            <p>Bachelor of Science in Computer Science</p>
            <p>University of the People, CA</p>
            <p>2021-Present</p>
          </div>
        </section>
        <div class="h-full bg-[#E3DCD2] w-0.5"></div>
        <section class="w-full flex flex-col items-center justify-center">
          <h1 class="text-xl font-bold">Certificates</h1>
        </section>
      </div>
    </div>
  );
});