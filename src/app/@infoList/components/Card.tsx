import Image from 'next/image';

export default function Card({
  imgSrc = '/screenImage.png',
  content = '해외 마케팅',
}: {
  imgSrc?: string;
  content?: string;
}) {
  return (
    <div className="mx-[10px] min-w-[250px] min-h-[88px] gap-[24px] rounded-[12px] flex items-center px-2 bg-[#39A3DC] whitespace-nowrap">
      {/* Ensure the height is set and items are centered */}
      <Image src={imgSrc} width={56} height={56} alt="img" />
      <span className="font-poppins text-[20px] font-extrabold leading-[36px] text-center text-white">{content}</span>
    </div>
  );
}
