import Image from 'next/image';
import RigthArrow from '../../../../public/rightArrow.png';
export default function FirstSectionCard({
  imgSrc,
  title = '해외 개발자 원격 채용',
  footer = '바로가기',
}: {
  imgSrc: string;
  title?: string;
  footer?: string;
}) {
  return (
    <div className="flex flex-col justify-center  min-h-[142px] min-w-[142px] bg-white gap-[18px]">
      <div className="flex flex-col gap-[16px]">
        <Image src={imgSrc} width={40} height={40} alt="Logo" />
        <span className="font-poppins text-[14px] font-black leading-[21px] text-left text-[#343741] font-black">
          {title}
        </span>
      </div>
      <div className="flex gap-[8px]">
        <span className="font-poppins text-[14px] font-black leading-[21px] text-left text-[#5E626F]">{footer}</span>
        <Image src={RigthArrow} alt="right arrow" />
      </div>
    </div>
  );
}
