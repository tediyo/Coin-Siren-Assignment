import Text from "../ui/Text";
import DownArrow from "../../../../public/DownArrow.png";
import Image from "next/image";
export default function Menu() {
  return (
    <div className="flex items-center gap-10 px-[40px]">
      <div className="flex items-center gap-2">
        <div>
          <Text content={"채용"} color={"white"} />
        </div>
        <Image src={DownArrow} alt="down arrow" />
      </div>

      <Text content={"해외 개발자 활용 서비스"} color={"white"} />
    </div>
  );
}
