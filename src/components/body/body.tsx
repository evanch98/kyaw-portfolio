import { component$ } from "@builder.io/qwik";
import IntroCard from "../intro-card/intro-card";
import MainCard from "../main-card/main-card";
import MobileIntroCard from "../mobile/mobile-intro-card/mobile-intro-card";
import MobileAboutCard from "../mobile/mobile-about-card/mobile-about-card";
import { IoAppsOutline } from "@qwikest/icons/ionicons";

export default component$(() => {
  return (
    <>
      <div class="xl:hidden flex flex-col items-center justify-end text-[#C5C1C0] w-full p-2 overflow-auto">
        <IoAppsOutline class="w-[28px] h-auto self-end mb-2" />
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
