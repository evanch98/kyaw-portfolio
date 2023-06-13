import { component$ } from "@builder.io/qwik";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import { BsBook, BsStar } from "@qwikest/icons/bootstrap";
import { transferred, uopeopleCourses } from "~/utils/degree";

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
          <div class="w-full">
            <div class="flex items-start justify-between mb-2 text-lg font-semibold">
              <p>Code</p>
              <p>Name</p>
              <p>GPA</p>
            </div>
            {uopeopleCourses.map((course) => (
              <div key={course.code} class="flex items-start justify-between">
                <p class="w-60">{course.code}</p>
                <p class="w-96 text-left">{course.course}</p>
                <p class="w-40 text-right">{course.gpa}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HorizontalSeparator />
      <section class="w-full flex flex-col items-start justify-start">
        <div class="flex justify-center items-center space-x-2">
          <h1 class="text-xl font-bold">Transferred Courses</h1>
          <BsBook class="w-[24px] h-auto" />
        </div>
        <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 pl-5">
          <div class="w-full">
            <div class="flex items-start justify-between mb-2 text-lg font-semibold">
              <p class="w-full">Code</p>
              <p class="text-left w-full">Name</p>
            </div>
            {transferred.map((course) => (
              <div key={course.code} class="flex items-start justify-between">
                <p class="w-60">{course.code}</p>
                <p class="w-96 text-left">{course.course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HorizontalSeparator />
      <section class="w-full flex flex-col items-start justify-start">
        <div class="flex justify-center items-center space-x-2">
          <h1 class="text-xl font-bold">Achievements</h1>
          <BsStar class="w-[24px] h-auto" />
        </div>
        <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 pl-5">
          <h1 class="mb-2 text-lg font-semibold">
            President's List (CGPA 3.85 - 4.0)
          </h1>
          <p>AY 2021-22 Term 3</p>
          <p>AY 2021-22 Term 4</p>
          <p>AY 2021-22 Term 5</p>
          <p>AY 2022-23 Term 1</p>
          <p>AY 2022-23 Term 2</p>
          <p>AY 2022-23 Term 3</p>
          <p>AY 2022-23 Term 4</p>
        </div>
      </section>
    </div>
  );
});
