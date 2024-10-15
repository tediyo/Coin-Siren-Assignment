import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import BurgerIcon from '../../../../public/Burger_Icon.svg';
import Menu from './Menu';
import Text from '../ui/Text';
export default function TopNavBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-between h-[60px] px-5 sm:px-0">
      <div className="flex items-center  ">
        <Image src={Logo} alt="img" />
      </div>
      <div className="hidden sm:block">
        <Menu />
      </div>
      <div className="flex items-center justify-end">
        <button className="hidden sm:block w-[104px] h-[36px] bg-[white] rounded">
          <Text content={'문의하기'} color={'#4A77FF'} />
        </button>
        <Image src={BurgerIcon} alt="Burger Icon" className="sm:hidden" />
      </div>
    </div>
  );
}
