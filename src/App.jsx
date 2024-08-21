import { useState } from 'react';
import Header from './components/header';
import Table from './components/Table';
import Button from './components/Button';
import Input from './components/Input';
import Nodata from './components/Nodata';
import './App.css';

function App() {
  const [CountryInfo, setCountryInfo] = useState([]);
  const [CountryInput, setCountryInput] = useState('');
  const [GoldInput, setGoldInput] = useState(0);
  const [silverInput, setSilverInput] = useState(0);
  const [bronzeInput, setBronzeInput] = useState(0);

  // 추가
  const onAddInfo = (e) => {
    e.preventDefault();

    if (!CountryInput) {
      alert('국가명을 입력해 주세요');
      return;
    }

    const newCountryInfo = {
      name: CountryInput,
      gold: GoldInput,
      silver: silverInput,
      bronze: bronzeInput
    };

    const sortArr = [...CountryInfo, newCountryInfo].sort((a, b) => {
      return a.gold === b.gold ? b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze) : b.gold - a.gold;
    });

    setCountryInfo(sortArr);
  };

  // 업데이트
  const onUpdateInfo = (e) => {
    e.preventDefault();

    const updateCountryInfo = CountryInfo.find((country) => {
      return country.name === CountryInput ? true : false;
    });

    if (updateCountryInfo) {
      setCountryInfo(
        CountryInfo.map((country) => {
          return country.name === CountryInput
            ? { name: country.name, gold: GoldInput, silver: silverInput, bronze: bronzeInput }
            : country;
        })
      );
    } else {
      alert('등록 X 국가');
    }
  };

  // 삭제
  const onDeleteInfo = (name) => {
    const deleteInfo = CountryInfo.filter((country) => {
      if (country.name !== name) return country;
      alert('삭제 완료');
    });

    setCountryInfo(deleteInfo);
  };

  return (
    <>
      <div id="wrap">
        <Header />
        <form onSubmit={onAddInfo}>
          <Input
            setCountryInput={setCountryInput}
            setGoldInput={setGoldInput}
            setSilverInput={setSilverInput}
            setBronzeInput={setBronzeInput}
            CountryInput={CountryInput}
            GoldInput={GoldInput}
            silverInput={silverInput}
            bronzeInput={bronzeInput}
          />
          <Button onUpdateInfo={onUpdateInfo} />
        </form>

        {CountryInfo.length === 0 ? <Nodata /> : <Table onDeleteInfo={onDeleteInfo} CountryInfo={CountryInfo} />}
      </div>
    </>
  );
}

export default App;
