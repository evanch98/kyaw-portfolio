import { component$ } from "@builder.io/qwik";
import CertificateBox from "~/components/common/certificate-box/certificate-box";
import type { certModalStore } from "~/types/types";
import certificatesList from "~/utils/certificates";

interface allCertificatesProps {
  allCertificatesModal: any;
  certModal: certModalStore;
}

export default component$((props: allCertificatesProps) => {
  return (
    <div>
      {certificatesList.map((certificate) => (
        <div key={certificate.name}>
          <CertificateBox
            certModal={props.certModal}
            certificate={certificate}
          />
        </div>
      ))}
    </div>
  );
});
