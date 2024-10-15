export default function TextCard({ header, content }: { header: string; content: Array<string> }) {
  return (
    <div className="flex flex-col gap-[8px] border-t">
      <span className="font-poppins text-[18px] font-extrabold leading-[27px] text-left text-white">{header}</span>
      <div className="flex flex-col">
        {content.map((text, key) => (
          <span className="font-poppins text-[16px] font-extrabold leading-[24px] text-left text-white" key={key}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
