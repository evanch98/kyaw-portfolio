import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="hidden xl:flex items-center justify-center bg-[#1A2930] p-2">
      <p class="text-[#C5C1C0] text-sm text-center">
        Designed and built by Kyaw Thu using Qwik &copy; {new Date().getFullYear().toString()} | All rights reserved ⚡
      </p>
    </footer>
  );
});
