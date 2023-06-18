import { component$ } from "@builder.io/qwik";
import type { certModalStore, certObject } from "~/types/types";

interface CertificateBoxProps {
  certModal: certModalStore;
  certificate: certObject;
}

export default component$((props: CertificateBoxProps) => {
  return (
    <div class="flex flex-col items-center justify-center mt-5">
      <p
        onClick$={() => {
          props.certModal.open = true;
          props.certModal.certData = { ...props.certificate };
        }}
        class="cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
      >
        {props.certificate.name}
      </p>
      <p>{props.certificate.platform}</p>
      <p>{props.certificate.date}</p>
    </div>
  );
});
