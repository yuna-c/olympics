import { useState } from 'react';
import './style/App.css';

function App() {
  const [countryInput, setCountryInput] = useState('');
  const [goldInput, setGoldInput] = useState(0);
  const [silverInput, setSilverInput] = useState(0);
  const [bronzeInput, setBronzeInput] = useState(0);

  const addCountry = (e) => {
    e.preventDefault();
    console.log(countryInput);
    console.log(goldInput);
    console.log(silverInput);
    console.log(bronzeInput);
  };
  return (
    <>
      {/* <div className='cursor-wrapper'>
        <div className='cursor'>text</div>
      </div> */}
      <div className="main-container">
        <h1>2024 파리 올림픽 메달 대시보드</h1>
        <form className="input-form" onSubmit={addCountry}>
          <div className="input-field">
            <label htmlFor="country">국가명</label>
            <input type="text" id="country" onChange={(e) => setCountryInput(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="gold">금메달</label>
            <input type="text" id="gold" onChange={(e) => setGoldInput(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="silver">은메달</label>
            <input type="text" id="silver" onChange={(e) => setSilverInput(e.target.value)} />
          </div>
          <div className="input-field">
            <label htmlFor="bronze">동메달</label>
            <input type="text" id="bronze" onChange={(e) => setBronzeInput(e.target.value)} />
          </div>
          <div className="button-group">
            <button type="submit">추가하기</button>
            <button>업데이트</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
