import { component$ } from "@builder.io/qwik";
import IntroCard from "../intro-card/intro-card";
import MainCard from "../main-card/main-card";

export default component$(() => {
  return (
    <div class="flex justify-between items-center w-full text-white p-5">
      <IntroCard />
      <MainCard />
    </div>
  );
});