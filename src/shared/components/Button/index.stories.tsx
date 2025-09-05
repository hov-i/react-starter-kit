import { Button } from ".";
import type { ButtonProps } from ".";

const meta = {
  title: "base/Button",
  component: Button,
  argTypes: {
    disabled: {
      control: { type: "boolean", default: false },
    },
    full: {
      control: { type: "boolean", default: false },
    },
    theme: {
      control: {
        type: "select",
        options: ["gray", "red", "line"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "md-compact", "lg", "lg-compact", "full"],
      },
    },
  },
};

export default meta;

export const ButtonBox = ({
  disabled,
  theme,
  width,
  height,
  size,
  full,
}: ButtonProps) => {
  return (
    <div>
      <Button
        disabled={disabled}
        theme={theme}
        width={width}
        height={height}
        size={size}
        full={full}
      >
        버튼
      </Button>
    </div>
  );
};

ButtonBox.storyName = "버튼";
