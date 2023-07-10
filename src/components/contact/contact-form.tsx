import { component$ } from "@builder.io/qwik";
import { BsSend } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <form
      class="flex flex-col space-y-2 mt-5 pb-2"
      action="https://getform.io/f/7d7e9421-700a-4548-8a97-e472b180613d"
      method="POST"
    >
      <div class="flex space-x-2">
        <div class="w-full relative">
          <input
            name="name"
            placeholder=" "
            type="text"
            class="peer w-full p-4 pt-6 font-light bg-transparent border-2 border-[#C5C1C0] rounded-md outline-none transition"
          />
          <label class="absolute text-base duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Full Name
          </label>
        </div>
        <div class="w-full relative">
          <input
            name="email"
            placeholder=" "
            type="email"
            class="peer w-full p-4 pt-6 font-light bg-transparent border-2 border-[#C5C1C0] rounded-md outline-none transition"
          />
          <label class="absolute text-base duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Email
          </label>
        </div>
      </div>
      <div class="w-full relative">
        <textarea
          name="message"
          rows={5}
          class="peer w-full p-4 pt-6 font-light bg-transparent border-2 border-[#C5C1C0] rounded-md outline-none transition"
        ></textarea>
        <label class="absolute text-base duration-150 transform -translate-y-3 top-6 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
          Your Message
        </label>
      </div>
      <button class="w-52 h-10 bg-transparent border-2 border-[#C5C1C0] rounded-md flex items-center justify-center px-5 hover:border-[#F7CE3E] ease-in duration-300 group">
        <p class="group-hover:text-[#F7CE3E] ease-in duration-300">
          Send Message
        </p>
        <BsSend class="ml-2 group-hover:text-[#F7CE3E] group-hover:translate-x-1 ease-in duration-300" />
      </button>
    </form>
  );
});
