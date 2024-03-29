import { component$ } from "@builder.io/qwik";

interface SkillsPercentProps {
  skill: string;
  percent: string;
}

/* to represent the expertise of each skill */
/* props --- skill: the name of the skill | percent: rating out of 100 */
export default component$((props: SkillsPercentProps) => {
  return (
    <div class="flex flex-col w-full space-y-1">
      <p>{props.skill}</p>
      <div class="h-[5.5px] w-full bg-[#C5C1C0] rounded-lg overflow-hidden">
        <div
          class="h-[5.5px] bg-[#F7CE3E]" style={`width: ${props.percent}`}
        ></div>
      </div>
    </div>
  );
});
