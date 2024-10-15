import TextCard from './components/TextCard';
import Bubble from '../../../public/bubble1.png';
import MobileBubble from '../../../public/Bubble3.png';
import Image from 'next/image';
export default function Description() {
  return (
    <div className="flex flex-col gap-[48px] px-5 sm:px-0 py-5 sm:py-0">
      <div className="flex flex-col gap-[16px]">
        <div className="fade-in">
          <Image src={Bubble} alt="bubble" className="hidden sm:block" />
          <Image src={MobileBubble} alt="bubble" className="sm:hidden" />
        </div>
        <div className="flex flex-col fade-up gap-[16px]">
          <span className="font-poppins text-[36px] sm:text-[48px] font-extrabold leading-[62.4px] text-left text-white">
            최고의 실력을 가진
          </span>

          <span className="font-poppins text-[36px] sm:text-[48px] font-extrabold leading-[62.4px] text-left text-white">
            외국인 인재를 찾고 계신가요?
          </span>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col fade-up gap-[8px]">
            <span className="font-poppins sm:text-[24px] text-[24px] font-extrabold leading-[34px] text-left text-white font-black">
              법률 및 인사관리 부담없이
            </span>
            <span className="font-poppins sm:text-[24px] text-[24px] font-extrabold leading-[34px] text-left text-white font-black">
              1주일 이내에 원격으로 채용해보세요.
            </span>
          </div>
          <div>
            <span className="font-poppins text-[18px] font-extrabold leading-[27px] text-left text-white hidden sm:block underline">
              개발자가 필요하신가요?
            </span>
          </div>
        </div>
      </div>

      <div className="fade-in-five-seconds flex flex-row gap-[32px] hidden sm:flex">
        <TextCard header={'평균 월 120만원'} content={['임금을 해당 국가를', '\n기준으로 계산합니다.']} />
        <TextCard header={'평균 월 120만원'} content={['임금을 해당 국가를', '\n기준으로 계산합니다.']} />
        <TextCard header={'평균 월 120만원'} content={['임금을 해당 국가를', '\n기준으로 계산합니다.']} />
      </div>
    </div>
  );
}
