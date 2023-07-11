import { component$ } from "@builder.io/qwik";
import HorizontalSeparator from "../separators/horizontal-separator/horizontal-separator";
import {
  BsCodeSlash,
  BsGithub,
  BsPostcard,
  BsReceipt,
} from "@qwikest/icons/bootstrap";
import type { projectObject } from "~/types/types";

export default component$((props: projectObject) => {
  return (
    <div class="flex flex-col w-full lg:w-[640px]">
      <div class="flex flex-col items-start space-y-5">
        <div class="flex items-center justify-start space-x-2">
          <a
            href={props.sourceSrc}
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center p-2 bg-[#C5C1C0] text-black cursor-pointer rounded-md hover:opacity-50 ease-in duration-300 shadow-md"
          >
            <p>GitHub</p>
            <BsGithub class="ml-2" />
          </a>
          <a
            href={props.liveSrc}
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center p-2 border-2 border-[#C5C1C0] cursor-pointer rounded-md hover:opacity-50 ease-in duration-300 shadow-md"
          >
            <p>Live</p>
            <BsPostcard class="ml-2" />
          </a>
        </div>
        <div class="flex flex-col items-start justify-center text-base">
          <p>Created by --- Kyaw Thu</p>
          <p>Date --- {props.date}</p>
          <p>Category --- {props.category}</p>
        </div>
      </div>
      <HorizontalSeparator />
      <div class="flex flex-col lg:flex-row items-start justify-between h-auto w-full">
        <section class="w-full flex flex-col items-start justify-start">
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-bold">Tech-Stack</h1>
            <BsCodeSlash class="w-[24px] h-auto" />
          </div>
          <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 pl-5">
            <ul class="list-disc">
              {props.tech.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </section>
        <HorizontalSeparator class="lg:hidden w-10 self-center" />
        <section class="w-full flex flex-col items-start justify-start">
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-bold">Description</h1>
            <BsReceipt class="w-[24px] h-auto" />
          </div>
          <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 pl-5">
            <ul class="list-disc">
              {props.desc.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <HorizontalSeparator />
      <p class="text-sm text-center">
        Deployed on {props.deployedOn ? props.deployedOn : "Vercel"}
      </p>
    </div>
  );
});
