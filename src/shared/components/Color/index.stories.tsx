import { colors } from ".";

const meta = {
  title: "base/Color",
  component: ColorPreview,
};

export default meta;

const colorKeys = Object.keys(colors) as (keyof typeof colors)[];

export function ColorPreview() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
        padding: "24px",
      }}
    >
      {colorKeys.map((color) => (
        <div
          key={color}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "4px",
              background: colors[color],
              border: "1px solid #ddd",
            }}
          />
          <span
            style={{
              marginTop: "8px",
              fontSize: "14px",
              textAlign: "center",
              wordBreak: "break-all",
            }}
          >
            {color}: <strong>{colors[color]}</strong>
          </span>
        </div>
      ))}
    </div>
  );
}
ColorPreview.storyName = "색상";
