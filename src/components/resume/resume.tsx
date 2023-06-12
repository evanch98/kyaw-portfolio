import { component$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import { BsMortarboard, BsPatchCheck } from "@qwikest/icons/bootstrap";
import { IoLogoReact } from "@qwikest/icons/ionicons";

export default component$(() => {
  return (
    <div class="flex flex-col w-full pr-5 text-[#E3DCD2]">
      <Title title="Resume" />
      <div class="flex items-start justify-between mt-5">
        <section class="w-full flex flex-col items-center justify-center">
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
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-bold">Certificates</h1>
            <BsPatchCheck class="w-[24px] h-auto" />
          </div>
          <div class="flex flex-col items-center justify-center mt-5">
            <p>Meta Front-End Developer Professional Certificate</p>
            <p>Meta and Coursera</p>
            <p>June 2023-Present</p>
          </div>
          <div class="flex flex-col items-center justify-center mt-5">
            <p>Meta Android Developer Professional Certificate</p>
            <p>Meta and Coursera</p>
            <p>September 2022-April 2023</p>
          </div>
          <div class="flex flex-col items-center justify-center mt-5">
            <p>IBM Data Analyst Professional Certificate</p>
            <p>IBM and Coursera</p>
            <p>July 2021-August 2021</p>
          </div>
        </section>
      </div>
      <hr class="w-full border-solid border-1 border-[#E3DCD2] my-5" />
      <Title title="Skills" />
      <div class="flex flex-col mt-5">
        <div class="flex items-start justify-between">
          <section class="w-full flex flex-col items-center justify-center">
            <div class="flex justify-center items-center space-x-2">
              <h1 class="text-xl font-bold">Front-End</h1>
              <IoLogoReact class="w-[24px] h-auto" />
            </div>
            <div></div>
          </section>
          <section class="w-full flex flex-col items-center justify-center">
            Mobile
          </section>
        </div>
        <div class="flex items-start justify-between">
          <section class="w-full flex flex-col items-center justify-center">
            Front-End
          </section>
          <section class="w-full flex flex-col items-center justify-center">
            Mobile
          </section>
        </div>
      </div>
    </div>
  );
});
