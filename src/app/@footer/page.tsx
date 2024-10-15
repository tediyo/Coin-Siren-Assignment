import CopyRight from './components/CopyRight';
import FirstSection from './components/FirstSection';
import SectionSection from './components/SectionSection';

export default function Footer() {
  return (
    <div className="grid grid-cols-1 gap-[40px] pt-[50px] px-[16px] pb-20">
      <FirstSection />
      <SectionSection />
      <CopyRight />
    </div>
  );
}
