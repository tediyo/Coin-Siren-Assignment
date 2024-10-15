export default function Text({
  content,
  fontSize = "16px",

  color = "#FFFFFF",
  weight = "900",
}: {
  content: string;
  color: string;
  fontSize?: string;
  weight?: string;
}) {
  return (
    <span
      className={`font-default text-[${fontSize}] font-[${weight}] `}
      style={{
        color: color,
      }}
    >
      {content}
    </span>
  );
}
