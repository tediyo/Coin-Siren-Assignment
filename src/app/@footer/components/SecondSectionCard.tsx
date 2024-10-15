export default function SecondSectionCard({
  title,
  content,
  footer,
}: {
  title: string;
  content: string;
  footer: string;
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div>
        <span className="font-poppins text-[12px] font-extrabold leading-[18px] text-left text-[#343741]">{title}</span>
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="text-[#5E626F] font-poppins text-[13px] font-extrabold leading-[19.5px] text-left">
          {content}
        </span>
        <span className="font-black text-[#5E626F]">{footer}</span>
      </div>
    </div>
  );
}
