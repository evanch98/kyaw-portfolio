import {
  $,
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import Title from "../common/title/title";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";
import Modal from "../common/modal/modal";
import CertTemplate from "../cert-template/cert-template";
import { animate } from "motion";
import Uopeople from "../uopeople/uopeople";
import FrontEnd from "../front-end/front-end";
import type { certModalStore } from "~/types/types";
import VirtualExperience from "./virtual-experience/virtual-experience";
import AllCertificates from "./all-certificates/all-certificates";
import Skills from "./Skills";
import Education from "./Education";

export default component$(() => {
  useVisibleTask$(() => {
    animate("#resume", { opacity: [0, 1] }, { easing: "ease-in", duration: 1 });
  });
  const certModal: certModalStore = useStore({} as certModalStore);
  const allCertificatesModal = useSignal(false);
  const uopeopleModal = useSignal(false);
  const frontEndModal = useSignal(false);

  const onCertModalClose = $(() => {
    certModal.open = false;
  });

  const onAllCertificatesModalOpen = $(() => {
    allCertificatesModal.value = true;
  });

  const onAllCertificatesModalClose = $(() => {
    allCertificatesModal.value = false;
  });

  const onUopeopleModalOpen = $(() => {
    uopeopleModal.value = true;
  });

  const onUopeopleModalClose = $(() => {
    uopeopleModal.value = false;
  });

  const onFrontEndModalOpen = $(() => {
    frontEndModal.value = true;
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
            capstoneLink={certModal.certData.capstoneLink}
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
      {allCertificatesModal.value && (
        <Modal
          title="All Certificates"
          onClose={onAllCertificatesModalClose}
          class="z-40"
        >
          <AllCertificates
            allCertificatesModal={allCertificatesModal}
            certModal={certModal}
          />
        </Modal>
      )}
      <Title title="Education" />
      {/* Education section - START */}
      <Education
        certModal={certModal}
        uopeopleOnClick={onUopeopleModalOpen}
        certificatesOnClick={onAllCertificatesModalOpen}
      />
      {/* Education section - END */}
      <HorizontalSeparator />
      {/* Skills section - START */}
      <Title title="Skills" />
      <Skills frontEndOnClick={onFrontEndModalOpen} />
      {/* Skills section - END */}
      <HorizontalSeparator />
      <Title title="Virtual Experience" />
      <div class="flex flex-col space-y-2 pb-2">
        <VirtualExperience
          title="Front-End Software Engineering Virtual Experience Programme"
          company="Skyscanner and Forage"
          date="June 18th, 2023"
          url="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_j5vFHRiaXbcY3ndzS_1687106629061_completion_certificate.pdf"
        />
        <VirtualExperience
          title="Mobile Engineering Virtual Experience Program"
          company="Lyft and Forage"
          date="January 10th, 2023"
          url="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/z5WMH5vehnwDferzi_Lyft_j5vFHRiaXbcY3ndzS_1673407301433_completion_certificate.pdf"
        />
        <VirtualExperience
          title="Developer Program"
          company="Accenture Nordics and Forage"
          date="March 22nd, 2022"
          url="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_j5vFHRiaXbcY3ndzS_1673407291869_completion_certificate.pdf"
        />
      </div>
    </div>
  );
});
