import { component$ } from "@builder.io/qwik";
import virtualExperienceList from "~/utils/virtualExperience";
import VirtualExperienceItem from "./virtual-experience-item";

export default component$(() => {
  return (
    <div>
      {virtualExperienceList.map((item) => (
        <VirtualExperienceItem
          key={item.title}
          title={item.title}
          company={item.company}
          date={item.date}
          url={item.url}
        />
      ))}
    </div>
  );
});
