import { component$ } from "@builder.io/qwik";
import type { certModalStore, certObject } from "~/types/types";

interface allCertificatesProps {
  allCertificatesModal: any;
  certModal: certModalStore;
}

export default component$((props: allCertificatesProps) => {
  return <div>All Certificates</div>;
});
