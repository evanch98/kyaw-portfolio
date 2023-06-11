import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="flex-1 w-full h-full flex flex-col bg-[#013329] rounded-md">
      <section class="flex flex-col p-5 items-center justify-center">
        <Image
          src="/assets/avatar.png"
          layout="constrained"
          width={247}
          height={247}
          alt="An avatar image"
        />
        <h1 class="tracking-widest text-4xl text-[#CC8B65]">Kyaw Thu</h1>
        <p class="text-lg text-[#E3DCD2] mt-5">
          I am an aspiring front-end web developer.
        </p>
        <div class="flex items-center justify-evenly"></div>
      </section>
    </div>
  );
});
