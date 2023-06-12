import { component$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import { BsSend } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class="flex flex-col w-full text-[#E3DCD2]">
      <Title title="Get in Touch" />
      <div class="flex flex-col mt-5 space-y-2 text-lg">
        <p>Name --- Kyaw Thu</p>
        <p>Email --- evanch98@gmail.com || kyawthuch98@gmail.com</p>
        <p>Phone --- +886 958 437 425</p>
        <p>Address --- New Taipei City, Taiwan</p>
        <p>Availability --- Full-time, part-time, internship, and freelance</p>
      </div>
      <HorizontalSeparator />
      <Title title="Contact Form" />
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
              class="peer w-full p-4 pt-6 font-light bg-transparent border-2 border-[#E3DCD2] rounded-md outline-none transition"
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
              class="peer w-full p-4 pt-6 font-light bg-transparent border-2 border-[#E3DCD2] rounded-md outline-none transition"
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
            class="peer w-full p-4 pt-6 font-light bg-transparent border-2 border-[#E3DCD2] rounded-md outline-none transition"
          ></textarea>
          <label class="absolute text-base duration-150 transform -translate-y-3 top-6 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Your Message
          </label>
        </div>
        <button class="w-52 h-10 bg-transparent border-2 border-[#E3DCD2] rounded-md flex items-center justify-center px-5 hover:border-[#CC8B65] ease-in duration-300 group">
          <p class="group-hover:text-[#CC8B65] ease-in duration-300">
            Send Message
          </p>
          <BsSend class="ml-2 group-hover:text-[#CC8B65] group-hover:translate-x-1 ease-in duration-300" />
        </button>
      </form>
    </div>
  );
});
