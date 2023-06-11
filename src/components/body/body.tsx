import { component$ } from "@builder.io/qwik";
import IntroCard from "../intro-card/intro-card";

export default component$(() => {
  return (
    <div class="text-[#E3DCD2] flex justify-between items-center">
      <IntroCard />
    </div>
  );
});