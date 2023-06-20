import { component$, useSignal } from "@builder.io/qwik";
import IntroCard from "../intro-card/intro-card";
import MainCard from "../main-card/main-card";
import MobileIntroCard from "../mobile/mobile-intro-card/mobile-intro-card";
import MobileAboutCard from "../mobile/mobile-main-card/mobile-main-card";
import {
  BsGrid3X3GapFill,
  BsList,
  BsPersonWorkspace,
  BsEye,
  BsEnvelope,
  BsX,
} from "@qwikest/icons/bootstrap";

export default component$(() => {
  const sideMenu = useSignal(false);
  return (
    <>
      <div class="xl:hidden flex flex-col items-center justify-start text-[#C5C1C0] w-full p-2 h-full relative">
        <div class={`${sideMenu.value ? "absolute top-0 left-0 w-full h-full bg-black/70 z-50" : ""}`}>
          <div
            class={`${
              sideMenu.value
                ? "fixed left-0 top-0 w-[75%] h-screen bg-[#1A2930] p-10 ease-in duration-500 z-50 flex flex-col items-center justify-center drop-shadow-xl"
                : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"
            }`}
          >
            <div class="flex flex-col items-center justify-start space-y-5">
              <div class="text-xl flex items-center w-full justify-start space-x-1">
                <BsList />
                <p>Resume</p>
              </div>
              <div class="text-xl flex items-center w-full justify-start space-x-1">
                <BsPersonWorkspace />
                <p>Projects</p>
              </div>
              <div class="text-xl flex items-center w-full justify-start space-x-1">
                <BsEye />
                <p>Links</p>
              </div>
              <div class="text-xl flex items-center w-full justify-start space-x-1">
                <BsEnvelope />
                <p>Contact</p>
              </div>
              <div
                onClick$={() => (sideMenu.value = false)}
                class="w-5 h-5 bg-[#C5C1C0] rounded-full text-black flex flex-col items-center justify-center cursor-pointer"
              >
                <BsX class="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
        <BsGrid3X3GapFill
          onClick$={() => (sideMenu.value = true)}
          class="w-[28px] h-auto self-start mb-2"
        />
        <MobileIntroCard />
        <MobileAboutCard />
      </div>
      <div class="hidden xl:flex justify-between items-center w-full text-[#C5C1C0] py-5 px-20 space-x-1">
        <IntroCard />
        <MainCard />
      </div>
    </>
  );
});
