import './Button.scss';

const Button = ({ onHandleUpdate }) => {
  return (
    <div className="button-group">
      <button type="submit">국가 추가</button>
      <button type="button" onClick={onHandleUpdate}>
        업데이트
      </button>
    </div>
  );
};

export default Button;
