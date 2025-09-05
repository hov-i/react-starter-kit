import { Text } from ".";
import type { TextProps } from ".";

const meta = {
  title: "base/Text",
  component: Text,
  args: {
    text: "텍스트",
    size: "h2",
  },
  argTypes: {
    text: {
      control: { type: "text" },
    },
    size: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      },
    },
  },
};

export default meta;

export const TextBox = ({ size, text }: TextProps & { text: string }) => {
  return <Text size={size}>{text}</Text>;
};

TextBox.storyName = "텍스트";
