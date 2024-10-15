import Checkbox from '../../../../public/checkbox.png';
import Image from 'next/image';
export default function CheckCards({ text }: { text: string }) {
  return (
    <div className="flex gap-2">
      <Image src={Checkbox} alt="" />
      <span className="font-poppins text-base font-extrabold leading-6 text-left text-white">{text}</span>
    </div>
  );
}
