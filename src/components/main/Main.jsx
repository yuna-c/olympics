import Form from './form/Form';
import Sort from './sort/Sort';
import Nodata from './nodata/Nodata';
import Table from './table/Table';
import { useEffect, useState } from 'react';
import './Main.scss';

const Main = () => {
  const [countryState, setCountryState] = useState(JSON.parse(window.localStorage.getItem('olympics')) ?? []);
  const [sortState, setSortState] = useState('금은동');

  const onHandleSort = (countryState) => {
    if (sortState === '금은동') {
      return countryState.sort((a, b) => {
        if (a.gold === b.gold) return b.silver === a.silver ? b.bronze - a.bronze : b.silver - a.silver;
        return b.gold - a.gold;
      });
    }

    if (sortState === '총메달') {
      return countryState.sort((a, b) => {
        const totalMedalA = a.gold + a.silver + a.bronze;
        const totalMedalB = b.gold + b.silver + b.bronze;
        return totalMedalB - totalMedalA;
      });
    }
    return countryState;
  };

  // 상태 변경될 떄마다 정렬 다시 수행( sort가 더블클릭해야 해결되는 문제로 인한 사용 )
  useEffect(() => {
    setCountryState((originalSortState) => onHandleSort([...originalSortState], sortState));
  }, [sortState]);

  return (
    <main className="main">
      <Form
        countryState={countryState}
        setCountryState={setCountryState}
        sortState={sortState}
        onHandleSort={onHandleSort}
      />
      {countryState.length === 0 ? (
        <Nodata />
      ) : (
        <section className="field-group">
          <Sort sortState={sortState} setSortState={setSortState} />
          <Table countryState={countryState} setCountryState={setCountryState} sortState={sortState} />
        </section>
      )}
    </main>
  );
};

export default Main;
