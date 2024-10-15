import FooterLogo from '../../../../public/footerLogo.png';
import Image from 'next/image';
import FirstSectionCard from './FirstSectionCard';
export default function FirstSection() {
  const cardData = [
    {
      imgSrc: '/codeSym.png',
      title: '해외 개발자 원격 채용',
      footer: '바로가기',
    },
    {
      imgSrc: '/account.png',
      title: '외국인 원격 채용 (비개발)',
      footer: '바로가기',
    },
    {
      imgSrc: '/kor.png',
      title: '한국어 가능 외국인 채용',
      footer: '바로가기',
    },
    {
      imgSrc: '/setting.png',
      title: '해외 개발자 활용 서비스',
      footer: '바로가기',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="sm:col-start-1 sm:col-end-4 flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[12px]">
          <Image src={FooterLogo} alt="Footer logo" />
          <span className="font-poppins text-[14px] font-black leading-[21px] text-left">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </span>
        </div>
        <div className="flex flex-col gap-[12px]">
          <span className="font-poppins text-[13px] font-black leading-[19.5px] text-left text-[#5E626F]">
            010-0000-0000
          </span>
          <span className="font-poppins text-[13px] font-black leading-[19.5px] text-left text-[#5E626F]">
            aaaaa@naver.com
          </span>
        </div>
      </div>

      <div className="sm:col-start-5 sm:col-end-13 grid grid-cols-2 sm:grid-cols-4 justify-center">
        {cardData.map((data, index) => (
          <FirstSectionCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
