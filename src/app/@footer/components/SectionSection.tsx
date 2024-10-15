import SecondSectionCard from './SecondSectionCard';

export default function SecondSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-[16px]">
      <div className="sm:col-start-1 sm:col-end-4 flex gap-2 bg-white ">
        <SecondSectionCard title={'상호명'} content={'하이퍼하이어'} footer={'Hyperhire India Private Limited'} />
        <SecondSectionCard title={'대표 CEO'} content={'김주현'} footer={'Juhyun Kim'} />
      </div>
      <div className="sm:col-start-5 sm:col-end-12  flex flex-col sm:flex-row gap-[16px]">
        <SecondSectionCard title={'사업자등록번호 CIN'} content={'427-86-01187'} footer={'U74110DL2016PTC290812'} />
        <SecondSectionCard
          title={'주소 ADDRESS'}
          content={'서울특별시 강남대로 479, 지하 1층 238호'}
          footer={'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India'}
        />
      </div>
    </div>
  );
}
