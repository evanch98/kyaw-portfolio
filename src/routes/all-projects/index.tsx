import { component$ } from "@builder.io/qwik";
import AllProjects from "~/components/all-projects/all-projects";

export default component$(() => {
  return (
    <div class="w-full p-2 text-[#C5C1C0]">
      <AllProjects />
    </div>
  );
});
