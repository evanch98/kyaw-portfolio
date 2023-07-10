import { component$, useVisibleTask$ } from "@builder.io/qwik";
import Title from "../common/title/title";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import { animate, spring, stagger } from "motion";
import ContactForm from "./contact-form";

export default component$(() => {
  useVisibleTask$(() => {
    animate("#contact", { opacity: [0, 1] }, { easing: "ease-in", duration: 1 });
    animate(
      ".info",
      { x: [-1000, 0] },
      { easing: spring({ velocity: 50, stiffness: 50 }), delay: stagger(0.15) }
    );
  });
  return (
    <div id="contact" class="flex flex-col w-full text-[#F7CE3EC5C1C0]">
      <Title title="Get in Touch" />
      <div class="flex flex-col mt-5 space-y-2 text-lg">
        <p class="info">Name --- Kyaw Thu</p>
        <p class="info">
          Email --- evanch98@gmail.com || kyawthuch98@gmail.com
        </p>
        <p class="info">Phone --- +886 958 437 425</p>
        <p class="info">Address --- New Taipei City, Taiwan</p>
        <p class="info">
          Availability --- Full-time, part-time, internship, and freelance
        </p>
      </div>
      <HorizontalSeparator />
      <Title title="Contact Form" />
      <ContactForm />
    </div>
  );
});
