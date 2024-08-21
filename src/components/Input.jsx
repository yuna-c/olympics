const Input = ({ setCountryInput, setGoldInput, setSilverInput, setBronzeInput, CountryInput, GoldInput, silverInput, bronzeInput }) => {
  return (
    <>
      <div className='input-field'>
        <label htmlFor='country'>국가별</label>
        <input type='text' id='country' placeholder='국가 입력' value={CountryInput} onChange={(e) => setCountryInput(e.target.value)} />
      </div>
      <div className='input-field'>
        <label htmlFor='gold'>금메달</label>
        <input type='number' id='gold' placeholder='금메달 개수' value={GoldInput} onChange={(e) => setGoldInput(e.target.value)} />
      </div>
      <div className='input-field'>
        <label htmlFor='silver'>은메달</label>
        <input type='number' id='silver' placeholder='은메달 개수' value={silverInput} onChange={(e) => setSilverInput(e.target.value)} />
      </div>
      <div className='input-field'>
        <label htmlFor='bronze'>동메달</label>
        <input type='number' id='bronze' placeholder='동메달 개수' value={bronzeInput} onChange={(e) => setBronzeInput(e.target.value)} />
      </div>
    </>
  );
};

export default Input;
