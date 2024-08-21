import { useState } from 'react';
import './styles/App.scss';

// yarn add sass --save

function App() {
  // default : const countries = { country: country, gold: gold, silver: silver, bronze: bronze }
  // const [country, setCountry] = useState('');
  // const [gold, setGold] = useState(0);
  // const [silver, setSilver] = useState(0);
  // const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);

  // 1. 위의 state를 하나로 묶을 객체 state 추가
  const [medalState, setMedalState] = useState({
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0
  });

  // 2. 구조분해 할당을 통한 객체 찢기(name에 값을 주기 위해)
  const { country, gold, silver, bronze } = medalState;

  // const onAddCountry = (e) => setCountry(e.target.value);
  // const onAddGold = (e) => setGold(e.target.value);
  // const onAddSilver = (e) => setSilver(e.target.value);
  // const onAddBronze = (e) => setBronze(e.target.value);

  // 4. 이벤트 전부 공통화해서 onHandleInputChange에 담기 , []에 name을 담아 동적으로 객체 키를 지정하고 input값을 덮어씀
  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setMedalState((originalMedalState) => ({ ...originalMedalState, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    }
    const findCountry = countries.find((e) => e.country === country);
    if (findCountry) {
      alert('이미 등록된 있는 국가입니다.');
      return;
    }
    const newCountries = {
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze)
    };
    const sortedArr = [...countries, newCountries].sort((a, b) => {
      if (a.gold === b.gold) return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
      else return b.gold - a.gold;
    });
    setCountries(sortedArr);

    // setCountry('');
    // setGold('');
    // setSilver('');
    // setBronze('');

    // 5. 위의 여러 함수 대신에 setMedalState로 모든 필드를 초기값으로 재설정
    setMedalState({
      country: '',
      gold: 0,
      silver: 0,
      bronze: 0
    });
  };

  const onHandleUpdate = () => {
    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    }
    const findCountry = countries.find((e) => e.country === country);
    if (!findCountry) {
      alert('등록 되어 있지 않은 국가입니다.');
      return;
    }
    const updateCounrty = countries.map((e) =>
      e.country === country ? { ...e, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) } : e
    );
    return setCountries(updateCounrty);
  };

  const onHandleDelete = (target) => {
    const deletedCounrty = countries.filter((e) => e.country !== target);
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
            <input type="text" placeholder="국가 입력" name="country" value={country} onChange={onHandleInputChange} />
          </div>
          <div className="input-field">
            <label>금메달</label>
            <input type="number" placeholder="금메달 개수" name="gold" value={gold} onChange={onHandleInputChange} />
          </div>
          <div className="input-field">
            <label>은메달</label>
            <input
              type="number"
              placeholder="은메달 개수"
              name="silver"
              value={silver}
              onChange={onHandleInputChange}
            />
          </div>
          <div className="input-field">
            <label>동메달</label>
            <input
              type="number"
              placeholder="동메달 개수"
              name="bronze"
              value={bronze}
              onChange={onHandleInputChange}
            />
          </div>

          <div className="button-group">
            <button type="submit">국가 추가</button>
            <button type="button" onClick={onHandleUpdate}>
              업데이트
            </button>
            {/* 업데이트를 눌렀을 때 어떻게 동작해야하지? 
            (1) input창 중에 나라이름에 매칭된 state 정보(name)
            (2) state에 있는 나라이름(ex대한민국)으로 현존하는 countries 배열에서 찾아 by find => 내가 수정하려고 하는 국가 countries.find~
            (3) map을 사용(변경대상의 배열을 새롭게 만들고 싶어) 
            (3)-1. map이 하나하나 순회를 도는데, targetCoutnry의 이름과 일치하면 => gold,silver, bronze에 맞게 수정
            (3)-2. map이 하나하나 순회를 도는데, targetCoutnry의 이름과 일치하지 않으면 그대로 내보내(return)
            const newCountrise = countries.map~
            (4) setCountries  setCountise(~~)
            (5) input에 연결되어있는 state들을 초기화?
        */}
          </div>
        </form>

        {countries.length === 0 ? (
          <div className="no-data">
            <span>아직 추가된 국가가 없습니다. 메달을 추적하세요!</span>
          </div>
        ) : (
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
                      <button
                        type="button"
                        onClick={() => {
                          onHandleDelete(data.country);
                        }}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
