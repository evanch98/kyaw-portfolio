import type { Meta } from "@storybook/html";
import type { TitleProps } from "./title";
import Title from "./title";

export default {
  title: "Title Component",
} as Meta;

const Template = (args: TitleProps) => <Title title={args.title} />;

export const Demo: any = Template.bind({
  title: "",
});

Demo.args = {
  title: "About",
};
