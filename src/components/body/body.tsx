import { component$ } from "@builder.io/qwik";
import IntroCard from "../intro-card/intro-card";
import MainCard from "../main-card/main-card";

export default component$(() => {
  return (
    <>
      <div class="xl:hidden flex flex-col text-[#C5C1C0] w-full p-5 overflow-auto">
        <p>Mobile View</p>
      </div>
      <div class="hidden xl:flex justify-between items-center w-full text-[#C5C1C0] py-5 px-20 space-x-1">
        <IntroCard />
        <MainCard />
      </div>
    </>
  );
});