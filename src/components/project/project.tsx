import { component$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";

export default component$(() => {
  return (
    <div class="flex flex-col">
      <Title title="Projects" />
      <div class="flex flex-col mt-5 space-y-6">
        <div class="flex items-start justify-between"></div>
        <HorizontalSeparator />
        <div class="flex items-start justify-between"></div>
      </div>
    </div>
  );
});
