import type { Meta } from "@storybook/html";
import type { TitleProps } from "./title";
import Title from "./title";

export default {
  title: "Title",
} as Meta;

const Template = (args: TitleProps) => <Title title={args.title} />;

export const TitleComponent: any = Template.bind({
  title: "",
  tags: ["autodocs"],
});

TitleComponent.args = {
  title: "About",
};
