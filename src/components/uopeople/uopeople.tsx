import { component$ } from "@builder.io/qwik";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import { BsBook } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class="flex flex-col w-[640px]">
      <div class="flex flex-col items-start text-base">
        <p>Degree --- Bachelor of Science in Computer Science</p>
        <p>University --- University of the People, Pasadena, CA</p>
        <p>Date --- September 2021 - Present</p>
        <p>CGPA --- 3.97</p>
      </div>
      <HorizontalSeparator />
      <section class="w-full flex flex-col items-start justify-start">
        <div class="flex justify-center items-center space-x-2">
          <h1 class="text-xl font-bold">Courses</h1>
          <BsBook class="w-[24px] h-auto" />
        </div>
        <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 pl-5">
          <ul class="list-disc">
            
          </ul>
        </div>
      </section>
    </div>
  );
});
