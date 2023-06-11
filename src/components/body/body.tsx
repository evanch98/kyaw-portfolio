import { component$ } from "@builder.io/qwik";
import IntroCard from "../intro-card/intro-card";

export default component$(() => {
  return (
    <div class="flex justify-between items-center w-full text-white p-5">
      <IntroCard />
    </div>
  );
});