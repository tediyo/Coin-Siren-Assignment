import FetchTalent from './action/FetchTalent';
import TalentList from './components/TalentList';

export default async function Talents() {
  let result = [];
  try {
    result = await FetchTalent();
  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <TalentList cards={result} />
    </div>
  );
}
