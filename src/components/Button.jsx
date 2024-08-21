const Button = ({ onUpdateInfo }) => {
  return (
    <div className='button-group'>
      <button type='submit'>추가하기</button>
      <button onClick={onUpdateInfo}>업데이트</button>
    </div>
  );
};

export default Button;
