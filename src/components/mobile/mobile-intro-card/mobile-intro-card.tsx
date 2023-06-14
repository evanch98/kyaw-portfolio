import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="w-full p-2 bg-[#1A2930] rounded-md">
      <Image
        src="/assets/avatar.png"
        height={150}
        width={150}
        alt="An avatar image"
      />
    </div>
  );
});
