import { useState } from 'react';
import './styles/App.scss';

// yarn add sass --save

function App() {
  // const countries = { country: country, gold: gold, silver: silver, bronze: bronze }
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);

  const onAddCountry = (e) => {
    setCountry(e.target.value);
  };

  const onAddGold = (e) => {
    setGold(e.target.value);
  };

  const onAddSilver = (e) => {
    setSilver(e.target.value);
  };

  const onAddBronze = (e) => {
    setBronze(e.target.value);
  };

  // console.log(countries);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const findCountry = countries.find((el) => el.country === country);
    const newCountries = {
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze)
    };

    if (!country) {
      alert('국가명을 입력해 주세요.');
      // return;
    } else if (findCountry) {
      alert('이미 등록된 있는 국가입니다.');
    } else {
      // 추가를 할 수 있는 상태
      // 1) sort 처리를 먼저
      // const sortedArr = [...countries, newCountries].sort(~~~~);
      const sortedArr = [...countries, newCountries].sort((a, b) => {
        if (a.gold === b.gold) {
          return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
        } else {
          return b.gold - a.gold;
        }
      });

      // 2) setCounties
      setCountries(sortedArr);

      // countries를 바꿔주는 로직
      // setCountries([...countries, newCountries]);
    }

    // 이 부분부터 counties는 바뀐 배열일까??? set으로 인해 바뀐 상태지만 그걸 다 가지고 오지 않았어서 처리가 되지 않았다.
    // console.log(sortedArr);
    // onSortCountry();

    setCountry('');
    setGold('');
    setSilver('');
    setBronze('');
  };

  const onHandleUpdate = () => {
    const findCountry = countries.some((el) => el.country === country);
    const updateCounrty = [...countries].map((el) =>
      el.country === country ? { ...el, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) } : el
    );
    if (!country) alert('국가를 입력해 주세요.');
    else if (!findCountry) alert('등록 되어 있지 않은 국가입니다.');
    else setCountries(updateCounrty);
  };

  const onHandleDelete = () => {
    const deletedCounrty = countries.filter((el) => el.country != country);
    setCountries(deletedCounrty);
  };

  return (
    <div id="wrap">
      <header className="header">
        <h1>2024 파리 올림픽</h1>
      </header>
      <main className="main">
        <form className="form-group" onSubmit={onHandleSubmit}>
          <div className="input-field">
            <label>국가명</label>
            <input type="text" placeholder="국가 입력" name="country" value={country} onChange={onAddCountry} />
          </div>
          <div className="input-field">
            <label>금메달</label>
            <input type="number" name="gold" value={gold} onChange={onAddGold} />
          </div>
          <div className="input-field">
            <label>은메달</label>
            <input type="number" name="silver" value={silver} onChange={onAddSilver} />
          </div>
          <div className="input-field">
            <label>동메달</label>
            <input type="number" name="bronze" value={bronze} onChange={onAddBronze} />
          </div>

          <div className="button-group">
            <button type="submit">국가 추가</button>
            <button type="button" onClick={onHandleUpdate}>
              업데이트
            </button>
          </div>
        </form>

        {countries.length > 0 ? (
          <div className="table-group">
            <table>
              <caption> 메달 획득 현황 </caption>
              <colgroup>
                <col width="16.66%" />
                <col width="16.66%" />
                <col width="16.66%" />
                <col width="16.66%" />
                <col width="16.66%" />
                <col width="16.66%" />
              </colgroup>
              <thead>
                <tr>
                  <th>국가명</th>
                  <th>금메달</th>
                  <th>은메달</th>
                  <th>동메달</th>
                  <th>메달 총 개수</th>
                  <th>액션</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((data, idx) => (
                  <tr id={idx} key={data.country}>
                    <td>{data.country}</td>
                    <td>{data.gold}</td>
                    <td>{data.silver}</td>
                    <td>{data.bronze}</td>
                    <td>{data.gold + data.silver + data.bronze}</td>
                    <td>
                      <button type="button" onClick={onHandleDelete}>
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-data">
            <span>아직 추가된 국가가 없습니다. 메달을 추적하세요!</span>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
