import {
  $,
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import Title from "../common/title/title";
import { BsMortarboard, BsPatchCheck } from "@qwikest/icons/bootstrap";
import {
  IoLogoReact,
  IoPhonePortraitOutline,
  IoChatboxOutline,
  IoGlobeOutline,
} from "@qwikest/icons/ionicons";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import Modal from "../common/modal/modal";
import CertTemplate from "../cert-template/cert-template";
import {
  ibmDataAnalyst,
  metaAndroid,
  metaFrontEnd,
} from "~/utils/certificates";
import { animate } from "motion";
import Uopeople from "../uopeople/uopeople";
import FrontEnd from "../front-end/front-end";
import type { certObject } from "~/types/types";

export default component$(() => {
  useVisibleTask$(() => {
    animate("#resume", { opacity: [0, 1] }, { easing: "ease-in", duration: 1 });
  });
  const certModal = useStore({
    open: false,
    certData: {
      name: "",
      platform: "",
      date: "",
      courses: [""],
      desc: [""],
      verificationLink: "",
    } as certObject,
  });

  const uopeopleModal = useSignal(false);
  const frontEndModal = useSignal(false);

  const onCertModalClose = $(() => {
    certModal.open = false;
  });

  const onUopeopleModalClose = $(() => {
    uopeopleModal.value = false;
  });

  const onFrontEndModalClose = $(() => {
    frontEndModal.value = false;
  });
  return (
    <div id="resume" class="flex flex-col w-full text-[#C5C1C0]">
      {certModal.open && (
        <Modal title="Certificate" onClose={onCertModalClose}>
          <CertTemplate
            name={certModal.certData.name}
            platform={certModal.certData.platform}
            date={certModal.certData.date}
            courses={certModal.certData.courses}
            desc={certModal.certData.desc}
            verificationLink={certModal.certData.verificationLink}
          />
        </Modal>
      )}
      {uopeopleModal.value && (
        <Modal title="Computer Science" onClose={onUopeopleModalClose}>
          <Uopeople />
        </Modal>
      )}
      {frontEndModal.value && (
        <Modal title="Front-End Skills" onClose={onFrontEndModalClose}>
          <FrontEnd />
        </Modal>
      )}
      <Title title="Resume" />
      <div class="flex items-start justify-between mt-5">
        <section class="w-full flex flex-col items-center justify-center">
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-bold">Degree</h1>
            <BsMortarboard class="w-[24px] h-auto" />
          </div>
          <div class="flex flex-col items-center justify-center mt-5">
            <p
              onClick$={() => (uopeopleModal.value = true)}
              class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
            >
              Bachelor of Science in Computer Science
            </p>
            <p>University of the People, CA</p>
            <p>2021-Present</p>
          </div>
        </section>
        <VerticalSeparator />
        <section class="w-full flex flex-col items-center justify-center">
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-bold">Certificates</h1>
            <BsPatchCheck class="w-[24px] h-auto" />
          </div>
          <div class="flex flex-col items-center justify-center mt-5">
            <p
              onClick$={() => {
                certModal.open = true;
                certModal.certData = { ...metaFrontEnd };
              }}
              class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
            >
              Meta Front-End Developer Professional Certificate
            </p>
            <p>Meta and Coursera</p>
            <p>June 2023-Present</p>
          </div>
          <div class="flex flex-col items-center justify-center mt-5">
            <p
              onClick$={() => {
                certModal.open = true;
                certModal.certData = { ...metaAndroid };
              }}
              class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
            >
              Meta Android Developer Professional Certificate
            </p>
            <p>Meta and Coursera</p>
            <p>September 2022-April 2023</p>
          </div>
          <div class="flex flex-col items-center justify-center mt-5">
            <p
              onClick$={() => {
                certModal.open = true;
                certModal.certData = { ...ibmDataAnalyst };
              }}
              class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
            >
              IBM Data Analyst Professional Certificate
            </p>
            <p>IBM and Coursera</p>
            <p>July 2021-August 2021</p>
          </div>
        </section>
      </div>
      <HorizontalSeparator />
      <Title title="Skills" />
      <div class="flex flex-col mt-5 space-y-6">
        <div class="flex items-start justify-between">
          <section class="w-full flex flex-col items-center justify-center">
            <div
              onClick$={() => (frontEndModal.value = true)}
              class="flex justify-center items-center space-x-2 cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
            >
              <h1 class="text-xl font-bold">Front-End</h1>
              <IoLogoReact class="w-[24px] h-auto" />
            </div>
            <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 px-20">
              <div class="flex flex-col w-full space-y-1">
                <p>Next JS</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 70%"></div>
                </div>
              </div>
              <div class="flex flex-col w-full space-y-1">
                <p>Qwik</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 80%"></div>
                </div>
              </div>
              <div class="flex flex-col w-full space-y-1">
                <p>Tailwind CSS</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 80%"></div>
                </div>
              </div>
              <div class="flex flex-col w-full space-y-1">
                <p>TypeScript</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 75%"></div>
                </div>
              </div>
            </div>
          </section>
          <VerticalSeparator />
          <section class="w-full flex flex-col items-center justify-center">
            <div class="flex justify-center items-center space-x-2">
              <h1 class="text-xl font-bold">Mobile</h1>
              <IoPhonePortraitOutline class="w-[24px] h-auto" />
            </div>
            <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 px-20">
              <div class="flex flex-col w-full space-y-1">
                <p>Dart</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 70%"></div>
                </div>
              </div>
              <div class="flex flex-col w-full space-y-1">
                <p>Flutter</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 70%"></div>
                </div>
              </div>
              <div class="flex flex-col w-full space-y-1">
                <p>Kotlin</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 60%"></div>
                </div>
              </div>
              <div class="flex flex-col w-full space-y-1">
                <p>Jetpack Compose</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 50%"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="flex items-start justify-between">
          <section class="w-full flex flex-col items-center justify-center">
            <div class="flex justify-center items-center space-x-2">
              <h1 class="text-xl font-bold">Languages</h1>
              <IoChatboxOutline class="w-[24px] h-auto" />
            </div>
            <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 px-20">
              <div class="flex flex-col w-full space-y-1">
                <p>Burmese</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 100%"></div>
                </div>
              </div>
              <div class="flex flex-col w-full space-y-1">
                <p>English</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 90%"></div>
                </div>
              </div>
              <div class="flex flex-col w-full space-y-1">
                <p>Traditional Chinese</p>
                <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
                  <div class="h-[5.5px] bg-[#F7CE3E]" style="width: 40%"></div>
                </div>
              </div>
            </div>
          </section>
          <VerticalSeparator />
          <section class="w-full flex flex-col items-center justify-center">
            <div class="flex justify-center items-center space-x-2">
              <h1 class="text-xl font-bold">Soft Skills</h1>
              <IoGlobeOutline class="w-[24px] h-auto" />
            </div>
            <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 px-20">
              <ul class="list-disc">
                <li>Strong problem solving and analytic skills</li>
                <li>Ability to learn new technologies quickly</li>
                <li>Good communication skills</li>
                <li>Willingness to explore and learn</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <HorizontalSeparator />
      <Title title="Virtual Experience" />
      <div class="flex flex-col space-y-2 pb-2">
        <div class="mt-5">
          <p class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300">
            Virtual Experience Program at Accenture Nordics, Developer
          </p>
          <p>Accenture Nordics and Forage</p>
          <p>March 2022</p>
        </div>
        <div class="mt-5">
          <p class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300">
            Virtual Experience Program at Lyft, Mobile Engineering
          </p>
          <p>Lyft and Forage</p>
          <p>January 2023</p>
        </div>
      </div>
    </div>
  );
});
