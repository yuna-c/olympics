import Input from './input/Input';
import Button from './button/Button';
import { useState } from 'react';
import './Form.scss';

const Form = ({ countryState, setCountryState, sortState, onHandleSort }) => {
  const [medalState, setMedalState] = useState({
    id: new Date().getTime(),
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0
  });

  const { country, gold, silver, bronze } = medalState;
  const findCountryState = countryState.find((e) => e.country === country); // 해당 객체에 country 있는지 확인하고 find로 주어진 조건의 첫번째 요소 찾아서 리턴 즉, 유효성 위한 문구 외부 상수화 함

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setMedalState((originalMedalState) => ({
      ...originalMedalState,
      [name]: name === 'country' ? value : isNaN(value) ? String(value) : Number(value)
    }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    }

    if (findCountryState) {
      alert('이미 등록된 있는 국가입니다.');
      return;
    }

    if (!findCountryState) {
      const newCountryState = {
        country: country,
        gold: gold,
        silver: silver,
        bronze: bronze
      };

      const updateCountrySate = [...countryState, newCountryState];
      window.localStorage.setItem('olympics', JSON.stringify([...countryState, newCountryState]));
      setCountryState(onHandleSort(updateCountrySate, sortState));

      alert('추가 되었습니다.');

      setMedalState({
        country: '',
        gold: 0,
        silver: 0,
        bronze: 0
      });

      return;
    }
  };

  const onHandleUpdate = () => {
    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    }

    if (!findCountryState) {
      alert('등록 되어 있지 않은 국가입니다.');
      return;
    }

    if (findCountryState) {
      const updateCounrtyState = countryState.map((e) =>
        e.country === country ? { ...e, gold: gold, silver: silver, bronze: bronze } : e
      );

      setCountryState(onHandleSort(updateCounrtyState, sortState));

      alert('업데이트 되었습니다.');

      setMedalState({
        country: '',
        gold: 0,
        silver: 0,
        bronze: 0
      });
      return;
    }
  };

  return (
    <form className="form-group" onSubmit={onHandleSubmit}>
      <Input
        label="국가명"
        type="text"
        name="country"
        placeholder="국가 입력"
        value={country}
        onChange={onHandleInputChange}
        onClick={(e) => console.log(e.target.value)}
      />
      <Input
        label="금메달"
        type="number"
        placeholder="금메달 개수"
        value={gold}
        name="gold"
        onChange={onHandleInputChange}
      />
      <Input
        label="은메달"
        type="number"
        name="silver"
        placeholder="은메달 개수"
        value={silver}
        onChange={onHandleInputChange}
      />
      <Input
        label="동메달"
        type="number"
        name="bronze"
        placeholder="동메달 개수"
        value={bronze}
        onChange={onHandleInputChange}
      />

      {/* 
      <div className="input-field">
        <label>국가명</label>
        <input type="text" placeholder="국가 입력" name="country" value={country} onChange={onHandleInputChange} />
      </div>
      <div className="input-field">
        <label>금메달</label>
        <input type="number" name="gold" value={gold} onChange={onHandleInputChange} />
      </div>
      <div className="input-field">
        <label>은메달</label>
        <input type="number" name="silver" value={silver} onChange={onHandleInputChange} />
      </div>
      <div className="input-field">
        <label>동메달</label>
        <input type="number" name="bronze" value={bronze} onChange={onHandleInputChange} />
      </div> 
      */}

      <Button onHandleUpdate={onHandleUpdate} />
    </form>
  );
};

export default Form;
