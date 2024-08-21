import { useState } from 'react';
import './styles/App.css';

function App() {
  const [countrise, setcountrise] = useState([]);
  const [countryInput, setCountryInput] = useState('');
  const [goldInput, setGoldInput] = useState(0);
  const [silverInput, setSilverInput] = useState(0);
  const [bronzeInput, setBronzeInput] = useState(0);

  const checkExistance = () => {
    return countrise.find((country) => {
      if (country.name.toLowerCase() === countryInput.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
  };

  const addCountry = (e) => {
    e.preventDefault();

    if (checkExistance()) {
      alert('이미 등록된 국가입니다.');
    } else {
      const newCountry = {
        name: countryInput,
        gold: goldInput,
        silver: silverInput,
        bronze: bronzeInput
      };
      // 기존 나라들과 새로운 나라들을 추가 하기 위해 의존성 배열
      setcountrise([...countrise, newCountry]);
    }
  };

  const updataCountry = (e) => {
    e.preventDefault(); // 버블링방지(중복 생김)

    if (checkExistance()) {
      // existingCountry===  true는 왜 입력이 안되고 else로 빠질까
      setcountrise(
        countrise.map((country) => {
          if (country.name.toLowerCase() === countryInput.toLowerCase()) {
            // 일치하는 나라는 금은동을 바꿈
            return { name: country.name, gold: goldInput, silver: silverInput, bronze: bronzeInput };
          } else {
            // 일치하지 않는 나라들은 그대로 냅둠
            return country;
          }
        })
      );
    } else {
      alert('등록되지 않은 국가입니다');
    }
  };

  // 이름을 받아 같은 이름을 삭제
  const deleteCountry = (name) => {
    setcountrise(
      countrise.filter((country) => {
        if (country.name.toLowerCase() === name) {
          return null;
        } else {
          return country;
        }
      })
    );

    alert(`${name}이 삭제되었습니다`);
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
            <button onClick={updataCountry}>업데이트</button>
          </div>
        </form>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
              </tr>
            </thead>
            <tbody>
              {countrise.map((country) => {
                return (
                  <tr key={country.name}>
                    <td>{country.name}</td>
                    <td>{country.gold}</td>
                    <td>{country.silver}</td>
                    <td>{country.bronze}</td>
                    <td
                      className="delete-btn"
                      onClick={() => {
                        deleteCountry(country.name);
                      }}
                    >
                      삭제
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
