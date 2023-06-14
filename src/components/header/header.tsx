import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="hidden lg:flex justify-between items-center w-full h-20 p-5">
      <Image
        src="/assets/logo.png"
        layout="constrained"
        width={64}
        height={64}
        alt="A logo image"
      />
      <p class="text-[#C5C1C0]">evanch98@gmail.com</p>
    </div>
  );
});
