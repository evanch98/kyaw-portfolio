import type { QRL} from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { BsMortarboard, BsPatchCheck } from "@qwikest/icons/bootstrap";
import { metaFrontEnd, metaAndroid, ibmDataAnalyst } from "~/utils/certificates";
import CertificateBox from "../common/certificate-box/certificate-box";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import VerticalSeparator from "../common/separators/vertical-separator/vertical-separator";
import type { certModalStore } from "~/types/types";

interface EducationProps {
  certModal: certModalStore;
  uopeopleOnClick: QRL<() => void>;
  certificatesOnClick: QRL<() => void>;
}

export default component$((props: EducationProps) => {
  return (
    <div class="flex flex-col lg:flex-row items-start justify-between mt-5">
      <section class="w-full flex flex-col items-center justify-center">
        <div class="flex justify-center items-center space-x-2">
          <h1 class="text-xl font-bold">Degree</h1>
          <BsMortarboard class="w-[24px] h-auto" />
        </div>
        <div class="flex flex-col items-center justify-center mt-5">
          <p
            onClick$={props.uopeopleOnClick}
            class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
          >
            Bachelor of Science in Computer Science
          </p>
          <p>University of the People, CA</p>
          <p>2021-Present</p>
        </div>
      </section>
      <HorizontalSeparator class="lg:hidden w-10 self-center" />
      <VerticalSeparator class="hidden lg:flex" />
      <section class="w-full flex flex-col items-center justify-center">
        <div
          onClick$={props.certificatesOnClick}
          class="flex justify-center items-center space-x-2 hover:text-[#F7CE3E] ease-in duration-300"
        >
          <h1 class="text-xl font-bold cursor-pointer ">Certificates</h1>
          <BsPatchCheck class="w-[24px] h-auto" />
        </div>
        <CertificateBox certModal={props.certModal} certificate={metaFrontEnd} />
        <CertificateBox certModal={props.certModal} certificate={metaAndroid} />
        <CertificateBox certModal={props.certModal} certificate={ibmDataAnalyst} />
      </section>
    </div>
  );
});
