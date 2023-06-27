import { component$ } from "@builder.io/qwik";
import { BsBook, BsReceipt } from "@qwikest/icons/bootstrap";
import HorizontalSeparator from "../common/separators/horizontal-separator/horizontal-separator";

interface CertTemplateProps {
  name: string;
  platform: string;
  date: string;
  courses: Array<string>;
  desc: Array<string>;
  verificationLink: string;
  capstoneLink?: string;
}

export default component$((props: CertTemplateProps) => {
  return (
    <div class="flex flex-col w-[640px]">
      <div class="flex flex-col items-start text-base">
        <p>Course name --- {props.name}</p>
        <p>Offered by --- {props.platform}</p>
        <p>Date --- {props.date}</p>
      </div>
      <HorizontalSeparator />
      <div class="flex items-start justify-between h-auto w-full space-x-3">
        <section class="w-full flex flex-col items-start justify-start">
          <div class="flex justify-center items-center space-x-2">
            <h1 class="text-xl font-bold">Courses</h1>
            <BsBook class="w-[24px] h-auto" />
          </div>
          <div class="flex flex-col items-start justify-start space-y-3 w-full mt-5 pl-5">
            <ul class="list-disc">
              {props.courses.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </section>
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
      <a
        href={props.verificationLink}
        target="_blank"
        rel="noreferrer"
        class="text-sm text-center cursor-pointer hover:text-[#F7CE3E] ease-in duration-300"
      >
        Verify here
      </a>
    </div>
  );
});
