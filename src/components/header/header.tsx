import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="flex justify-between items-center w-full h-20">
      <Image 
        src="/assets/logo.png"
        layout="constrained"
        width={64}
        height={64}
        alt="A logo image"
      />
      <p>evanch98@gmail.com</p>
    </div>
  );
});